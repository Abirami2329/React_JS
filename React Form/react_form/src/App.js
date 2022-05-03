import "./App.css";
import { useState } from "react";
import "./index.css";

function MyForm() {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
    alert("You have submitted the form.");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="App-header">
        <div className="">
          <span>
            <h3>REGISTRATION FORM</h3>
          </span>
        </div>
        <div className="row">
          <label className="label">Enter Name:</label>
          <div className="column_input">
            <input
              type="text"
              name="username"
              value={inputs.username || ""}
              onChange={handleChange}
              style={{ marginBottom: 20 }}
              className="input"
            />
          </div>
        </div>
        <div className="row">
          <label className="label">Enter DOB:</label>
          <div className="column_input">
            <input
              type="date"
              name="age"
              value={inputs.age || ""}
              onChange={handleChange}
              style={{ marginBottom: 20 }}
              className="input"
            />
          </div>
        </div>
        <div className="row">
          <label className="label">Enter Mobile Number:</label>
          <div className="column_input">
            <input
              type="number"
              name="mobile"
              value={inputs.mobile || ""}
              onChange={handleChange}
              style={{ marginBottom: 20 }}
              className="input"
            />
          </div>
        </div>
        <div className="row">
          <label className="label">Enter Email:</label>
          <div className="column_input">
            <input
              type="text"
              name="email"
              value={inputs.email || ""}
              onChange={handleChange}
              style={{ marginBottom: 20 }}
              className="input"
            />
          </div>
        </div>
        <div className="row">
          <label className="label">Enter Address:</label>
          <div className="column_input">
            <textarea
              name="address"
              value={inputs.address || ""}
              onChange={handleChange}
              style={{ marginBottom: 20 }}
              className="input"
            />
          </div>
        </div>
        <div className = 'button_row'> 
        <input type="submit" style={{ width: 120 }} className="button" />
        </div>
      </div>
    </form>
  );
}

export default MyForm;
