import React from "react";

function ButtonCounter({ increment }) {
  console.log("inside btn");

  return (
    <>
      <button className="btn btn-danger" onClick={increment}>
        +
      </button>
    </>
  );
}

export default React.memo(ButtonCounter);
