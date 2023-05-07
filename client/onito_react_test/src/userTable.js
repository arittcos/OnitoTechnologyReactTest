import React, { useEffect, useState } from "react";
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import $ from "jquery";
import axios from "axios";

function UserTable() {
  const [userData, setuserData] = useState([]);

  useEffect(() => {
    $(document).ready(function () {
      $("#example").DataTable();
    });
    axios
      .get("http://localhost:5000/getUserData")
      .then((res) => setuserData(res.data))
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <div style={{ padding: 20 }}>
        <table id="example">
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Sex</th>
              <th>Mobile</th>
              <th>Govt ID</th>
              <th>Gurdian Details</th>
              <th>Nationality</th>
            </tr>
          </thead>
          <tbody>
            {userData.map((data, key) => {
              return (
                <tr key={key}>
                  <td>{data.name}</td>
                  <td>{data.age}</td>
                  <td>{data.gender}</td>
                  <td>{data.mobile}</td>
                  <td>
                    {data.govtIdNo},{data.govtIdType}
                  </td>
                  <td>
                    {data.gurdianLabel},{data.gurdianName},
                    {data.gurdianEmgContactNo},{data.gurdianEmail}
                  </td>
                  <td>{data.nationality}</td>
                </tr>
              );
            })}
          </tbody>
          <tfoot>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Sex</th>
              <th>Mobile</th>
              <th>Govt ID</th>
              <th>Gurdian Details</th>
              <th>Nationality</th>
            </tr>
          </tfoot>
        </table>
      </div>
    </>
  );
}

export default UserTable;
