import "./App.css";
import { useState } from "react";
import "./index.css";

function MyForm() {
  const [inputs, setInputs] = useState({});

  const validateName = (event) => {
    if (document.getElementById("name").value) {
      handleChange(event);
    } else {
      alert("Name shoule not be blank");
    }
  };
  const validateDob = (event) => {
    const emailValue = document.getElementById("dob").value;
    if (emailValue) {
      handleChange(event);
    } else {
      alert("Invalid Email");
    }
  };
  const validateMobile = (event) => {
    if (document.getElementById("mobile").value) {
      handleChange(event);
    } else {
      alert("MobileNumber shoule not be blank");
    }
  };
  const validateEmail = (event) => {
    if (document.getElementById("email").value) {
      handleChange(event);
    } else {
      alert("email shoule not be blank");
    }
  };
  const validateAddress = (event) => {
    if (document.getElementById("address").value) {
      handleChange(event);
    } else {
      alert("Address shoule not be blank");
    }
  };

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      inputs.username &&
      inputs.age &&
      inputs.mobile &&
      inputs.email &&
      inputs.address
    ) {
      alert("You have submitted the form.");
    }
    alert("Please Enter All Details");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="App-header">
        <div>
          <span>
            <h3>REGISTRATION FORM</h3>
          </span>
        </div>
        <div className="row">
          <label className="label">Enter Name:</label>
          <div className="column_input">
            <input
              id="name"
              type="text"
              name="username"
              value={inputs.username || ""}
              onChange={validateName}
              style={{ marginBottom: 20 }}
              className="input"
            />
          </div>
        </div>
        <div className="row">
          <label className="label">Enter DOB:</label>
          <div className="column_input">
            <input
              id="dob"
              type="date"
              name="age"
              value={inputs.age || ""}
              onChange={validateDob}
              style={{ marginBottom: 20 }}
              className="input"
            />
          </div>
        </div>
        <div className="row">
          <label className="label">Enter Mobile Number:</label>
          <div className="column_input">
            <input
              id="mobile"
              type="number"
              name="mobile"
              value={inputs.mobile || ""}
              onChange={validateMobile}
              style={{ marginBottom: 20 }}
              className="input"
            />
          </div>
        </div>
        <div className="row">
          <label className="label">Enter Email:</label>
          <div className="column_input">
            <input
              id="email"
              type="text"
              name="email"
              value={inputs.email || ""}
              onChange={validateEmail}
              style={{ marginBottom: 20 }}
              className="input"
            />
          </div>
        </div>
        <div className="row">
          <label className="label">Enter Address:</label>
          <div className="column_input">
            <textarea
              id="address"
              name="address"
              value={inputs.address || ""}
              onChange={validateAddress}
              style={{ marginBottom: 20 }}
              className="input"
            />
          </div>
        </div>
        <div className="button_row">
          <input type="submit" style={{ width: 120 }} className="button" />
        </div>
      </div>
    </form>
  );
}

export default MyForm;
