import React, { useReducer } from "react";

const InitioalValue = {
  name: "",
  age: "",
  number: "",
  email: "",
};

function handelaClick() {
  
}

function reducerFuntion(preveState, nextState) {
  console.log("nextState", nextState);

  return { ...preveState, ...nextState };
}

function ReducerForm() {
  const [form, setForm] = useReducer(reducerFuntion, InitioalValue);

  function handelaName(e) {
    setForm({ name: e.target.value });
  }

  function handelaAge(e) {
    setForm({ age: e.target.value });
  }

  function handelaNumber(e) {
    setForm({ number: e.target.value });
  }

  function handelaEmail(e) {
    setForm({ email: e.target.value });
  }

  function handelaClick() {
    console.log("Form subbmited", { form });
  }
  return (
    <>
      <div className="container p-4 text-bg-dark mb-4 mt-5 rounded-4">
        <h1 className="text-center">Use Reduser</h1>

        <input
          type="text"
          placeholder="Enter your name"
          className="form-control my-3"
          onInput={handelaName}
          value={form.name}
        />
        <input
          type="number"
          placeholder="Enter your age"
          className="form-control my-3"
          onInput={handelaAge}
          value={form.age}
        />
        <input
          type="tel"
          placeholder="Enter your number"
          className="form-control my-3"
          onInput={handelaNumber}
          value={form.number}
        />
        <input
          type="email"
          placeholder="Enter your email"
          className="form-control my-3"
          onInput={handelaEmail}
          value={form.email}
        />

        <button className="btn btn-danger my-3" onClick={handelaClick}>
          Submit
        </button>
      </div>


      <div className="main w-50 rounded-3 bg-black container">
        <h4 className=" text-light p-2">Name : {form.name}</h4>
        <h4 className=" text-light p-2">Age : {form.age}</h4>
        <h4 className=" text-light p-2">Number : {form.number}</h4>
        <h4 className=" text-light p-2">Email : {form.email}</h4>
      </div>
    </>
  );
}

export default ReducerForm;
