import React from "react";
import ChildComponet from "./ChildComponet";

function PerentComponent() {
  return (
    <>
      <div className="container bg-dark-subtle mt-3 p-4 text-center">
        <h1>Parent Component : </h1>
        <ChildComponet/>
      </div>
    </>
  );
}

export default PerentComponent;
