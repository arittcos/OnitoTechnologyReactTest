import React from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { userSchema } from "./formValidation";
import "./user-form.css";

function UserForm() {
  const phoneReg = /^(0|91)?[6-9][0-9]{9}$/;
  const navigate = useNavigate();
  let isValid;
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    isValid = await userSchema.isValid(data);
    // console.log(data);
    // alert(isValid);
    if (isValid) {
      axios
        .post("http://localhost:5000/postUserData", data)
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
      reset({
        name: "",
        age: "",
        dob: "",
        gender: "",
        mobile: "",
        govtIdType: "",
        govtIdNo: "",
        gurdianLabel: "",
        gurdianName: "",
        gurdianEmail: "",
        gurdianEmgContactNo: "",
        address: "",
        state: "",
        city: "",
        country: "",
        pincode: "",
        occupation: "",
        religion: "",
        maritalSts: "",
        bloodGr: "",
        nationality: "",
      });
      alert("Your Data Submitted Successfully!");
      navigate("/UserTable", { replace: true });
    }
  };

  return (
    <>
      <div className="user-form-container">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="personal-details">
            <h3>Personal Details:</h3>
            <div className="details-fields">
              <div>
                <label htmlFor="name">Name</label>
                <input
                  className="mt-l-12"
                  name="name"
                  placeholder="Enter Name"
                  {...register("name", { required: true })}
                />
                {errors.name && (
                  <div className="error-msg ">please enter your name</div>
                )}
              </div>
              <div className="mt-l-20">
                <label htmlFor="age">Age</label>
                <input
                  className="mt-l-12"
                  name="age"
                  placeholder="Enter Age"
                  {...register("age", { required: true })}
                />
                {errors.age && (
                  <div className="error-msg ">please enter your age</div>
                )}
              </div>
              <div>
                <label className="mt-l-20" htmlFor="dob">
                  Date of Birth
                </label>
                <input
                  className="mt-l-12"
                  type="date"
                  name="dob"
                  {...register("dob")}
                />
              </div>
              <div className="mt-l-20">
                <div className="disp-flex align-center">
                  <label htmlFor="gender">Sex</label>
                  <input
                    className="mt-l-12"
                    type="radio"
                    value="male"
                    name="gender"
                    {...register("gender", { required: true })}
                  />
                  <div>Male</div>
                  <input
                    type="radio"
                    name="gender"
                    {...register("gender", { required: true })}
                    value="Female"
                  />
                  <div>Female</div>
                </div>
                {errors.gender && (
                  <div className="error-msg">please enter your sex</div>
                )}
              </div>
              <div className="mt-l-20">
                <label htmlFor="mobile">Mobile</label>
                <input
                  className="mt-l-12"
                  type="tel"
                  name="mobile"
                  placeholder="Enter Mobile"
                  {...register("mobile", {
                    pattern: phoneReg,
                    min: 10,
                  })}
                />
                {errors.mobile && (
                  <div className="error-msg ">
                    please enter your valid mobile no.
                  </div>
                )}
              </div>
              <label htmlFor="govtId">Govt. Issued ID</label>
              <select
                className="mt-l-12"
                name="govtIdType"
                {...register("govtIdType")}
              >
                <option value="">ID Type</option>
                <option value="aadhar">Aadhar</option>
                <option value="pan">PAN</option>
              </select>
              <input
                className="mt-l-12"
                name="govtIdNo"
                placeholder="Enter Govt ID"
                {...register("govtIdNo")}
              />
            </div>
          </div>
          <div className="contact-details">
            <h3>Contact Details:</h3>
            <div className="details-fields">
              <label htmlFor="gurdian-details">Gurdian details</label>
              <select
                className="mt-l-12"
                name="gurdianLabel"
                {...register("gurdianLabel")}
              >
                <option value="">Enter Label</option>
                <option value="father">Father</option>
                <option value="Mother">Mother</option>
              </select>
              <input
                className="mt-l-12"
                name="gurdianName"
                placeholder="Enter Gurdian Name"
                {...register("gurdianName")}
              />
              <label className="mt-l-20" htmlFor="gurdian-email">
                Email
              </label>
              <input
                className="mt-l-12"
                name="gurdianEmail"
                placeholder="enter Email"
                {...register("gurdianEmail")}
              />
              <div className="mt-l-20">
                <label htmlFor="gurdian-emergency-no">
                  Emergency Contact Number
                </label>
                <input
                  className="mt-l-12"
                  type="tel"
                  name="gurdianEmgContactNo"
                  placeholder="Enter Energency No"
                  {...register("gurdianEmgContactNo", {
                    pattern: phoneReg,
                    min: 10,
                  })}
                />
                {errors.gurdianEmgContactNo && (
                  <div className="error-msg">Please enter a valid number</div>
                )}
              </div>
            </div>
          </div>
          <div className="address-details">
            <h3>Address Details:</h3>
            <div className="details-fields">
              <div>
                <label htmlFor="address">Address</label>
                <input
                  className="mt-l-12"
                  name="address"
                  placeholder="Enter Address"
                  {...register("address")}
                />
              </div>
              <div>
                <label className="mt-l-20" htmlFor="state">
                  State
                </label>
                <input
                  className="mt-l-12"
                  name="state"
                  placeholder="Enter State"
                  {...register("state")}
                />
              </div>
              <div>
                <label className="mt-l-20" htmlFor="city">
                  City
                </label>
                <input
                  className="mt-l-12"
                  name="city"
                  placeholder="Enter City"
                  {...register("city")}
                />
              </div>
              <div>
                <label className="mt-l-20" htmlFor="country">
                  Country
                </label>
                <input
                  className="mt-l-12"
                  name="country"
                  placeholder="Enter Country"
                  defaultValue="India"
                  {...register("country")}
                />
              </div>
              <div>
                <label htmlFor="pincode">Pincode</label>
                <input
                  className="mt-l-12"
                  name="pincode"
                  placeholder="Enter Pincode"
                  {...register("pincode")}
                />
              </div>
            </div>
          </div>
          <div className="other-details">
            <h3>Other Details:</h3>
            <div className="details-fields">
              <div>
                <label htmlFor="occupationh">Occupation</label>
                <input
                  className="mt-l-12"
                  name="occupation"
                  placeholder="Enter Occupation"
                  {...register("occupation")}
                />
              </div>
              <div>
                <label className="mt-l-20" htmlFor="religion">
                  Religion
                </label>
                <input
                  className="mt-l-12"
                  name="religion"
                  placeholder="Enter Religion"
                  {...register("religion")}
                />
              </div>
              <div>
                <label className="mt-l-20" htmlFor="marital-status">
                  Marital Status
                </label>
                <select
                  className="mt-l-12"
                  name="maritalSts"
                  {...register("maritalSts")}
                >
                  <option value="">Enter Marital Status</option>
                  <option value="married">Married</option>
                  <option value="Unmarried">Unmarried</option>
                  <option value="Divorced">Divorced</option>
                  <option value="single">Single</option>
                </select>
              </div>
              <div>
                <label className="mt-l-20" htmlFor="blood-gr">
                  Blood Group
                </label>
                <input
                  className="mt-l-12"
                  name="bloodGr"
                  placeholder="Enter Blood Group"
                  {...register("bloodGr")}
                />
              </div>
              <div>
                <label htmlFor="nationality">Nationality</label>
                <input
                  className="mt-l-12"
                  name="nationality"
                  placeholder="Enter Nationality"
                  defaultValue="Indian"
                  {...register("nationality")}
                />
              </div>
            </div>
          </div>
          <div className="formBtns">
            <input type="submit" className="submit-btn" />
            <Link to="/UserTable" className="link">
              User Data
            </Link>
          </div>
        </form>
      </div>
    </>
  );
}

export default UserForm;
