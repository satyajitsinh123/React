import React from "react";
import Gradesystem from "./Gradesystem";

function Conditional() {
  const mark = prompt("Enter your Mark");
  return (
    <div className="main border m-3 bg-black text-white w-25 d-flex mt-5 container m-auto text-center rounded rounded-5">
      <Gradesystem grade={mark} />
    </div>
  );
}

export default Conditional;
