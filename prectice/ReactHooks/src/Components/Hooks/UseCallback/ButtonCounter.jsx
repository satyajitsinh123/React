import React from "react";

function ButtonCounter({ increment }) {
  console.log("inside btn");

  return (
    <>
    <div className="main text-center">
      <button className="btn btn-danger" onClick={increment}>
        +
      </button>
      </div>
    </>
  );
}

export default React.memo(ButtonCounter);
