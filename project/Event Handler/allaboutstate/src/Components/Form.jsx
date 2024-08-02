import React, { useState } from "react";

function Form() {
  const [Form, setForm] = useState({
    name: "",
    lastName: "",
    email: "",
    password: "",
    PhoneNo: "",
  });

  console.log(Form.name);

  function hendlerFirstNAme(e) {
    setForm({
      ...Form,
      name: e.target.value,
    });
  }

  function hendlerLastName(e) {
    setForm({
      ...Form,
      lastName: e.target.value,
    });
  }

  function hendlerEmail(e) {
    setForm({
      ...Form,
      email: e.target.value,
    });
  }

  function hendlerPassword(e) {
    setForm({
      ...Form,
      password: e.target.value,
    });
  }

  function hendlerPhoneNO(e) {
    setForm({
      ...Form,
      PhoneNo: e.target.value,
    });
  }

  return (
    <>
      <div className="main bg-black">
        <h1 className="heding bg-success bg-gradient text-center">Form</h1>
      </div>
      <form className="container w-50" onSubmit={(e) => e.preventDefault()}>
        <div className="mb-4">
          <label className="form-label">FIRST NAME :</label>
          <input
            type="text"
            className="form-control"
            value={Form.name}
            onChange={hendlerFirstNAme}
          />
        </div>

        <div className="mb-4">
          <label className="form-label">LAST NAME :</label>
          <input
            type="text"
            className="form-control"
            value={Form.lastName}
            onChange={hendlerLastName}
          />
        </div>

        <div className="mb-4">
          <label className="form-label">Email :</label>
          <input
            type="email"
            className="form-control"
            value={Form.email}
            onChange={hendlerEmail}
          />
        </div>

        <div className="mb-4">
          <label className="form-label">Password : </label>
          <input
            type="password"
            className="form-control"
            value={Form.password}
            onChange={hendlerPassword}
          />
        </div>

        <div className="mb-4">
          <label className="form-label">Phone No : </label>
          <input
            type="number"
            className="form-control"
            value={Form.PhoneNo}
            onChange={hendlerPhoneNO}
          />
        </div>

        <button type="submit" className="btn btn-danger mt-4">
          Submit
        </button>

        <div className="container bg-success bg-gradient text-white mt-5">
          <h3>Name : {Form.name}</h3>
          <h3>Last Name : {Form.lastName}</h3>
          <h3>Email : {Form.email}</h3>
          <h3>Password : {Form.password}</h3>
          <h3>PhoneNo : {Form.PhoneNo}</h3>
        </div>
      </form>
    </>
  );
}

export default Form;
