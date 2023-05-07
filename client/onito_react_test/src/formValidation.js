import * as yup from "yup";

const alphaNumericReg = /^(?=.*[a-zA-Z])(?=.*[0-9])[A-Za-z0-9]+$/;
const numericStringReg = /^\d+$/;

export const userSchema = yup.object().shape({
  name: yup.string().required(),
  age: yup.number().required(),
  //   dob: yup.date(),
  gender: yup.string().required(),
  mobile: yup.string(),
  govtIdType: yup.string(),
  govtIdNo: yup.string().when("govtIdType", (govtIdType, schema) => {
    if (govtIdType != "") {
      if (govtIdType == "aadhar")
        return schema.matches(numericStringReg).required().min(12).max(12);
      else if (govtIdType == "pan")
        return schema.matches(alphaNumericReg).required().min(10).max(10);
    } else {
      return schema.max(0);
    }
  }),
  gurdianLabel: yup.string(),
  gurdianName: yup.string(),
  gurdianEmail: yup.string().email(),
  gurdianEmgContactNo: yup.string(),
  address: yup.string(),
  state: yup.string(),
  city: yup.string(),
  country: yup.string(),
  //   pincode: yup.number().min(9).max(9),
  occupation: yup.string(),
  religion: yup.string(),
  maritalSts: yup.string(),
  bloodGr: yup.string(),
  nationality: yup.string(),
});
