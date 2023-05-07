const express = require("express");
const cors = require("cors");
const { MongoClient } = require("mongodb");
const bodyParser = require("body-parser");

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json({ extended: true }));
app.use(cors());

const uri =
  "mongodb+srv://arittram:sdjbGwjtK0x66qP6@mycluster.8ilggc9.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.post("/postUserData", async (req, res) => {
  if (req.body) {
    try {
      const dbConnectPost = await client.connect();
      await dbConnectPost
        .db("onito_test_user_data_form")
        .collection("onito_test_user_data")
        .insertOne(req.body);
      console.log("Inserted!");
      res.send("Ok!");
    } catch (err) {
      console.log(err);
    } finally {
      await client.close();
    }
  } else {
    console.log("Not Inserted!");
  }
});

app.get("/getUserData", async (req, res) => {
  try {
    const dbConnectGet = await client.connect();
    let userData = await dbConnectGet
      .db("onito_test_user_data_form")
      .collection("onito_test_user_data")
      .find()
      .toArray();
    console.log("Data retrive successfully!");
    res.send(userData);
  } catch (err) {
    console.log(err);
  } finally {
    await client.close();
  }
});

app.listen(5000, () => {
  console.log("Server Started!");
});
