import React, { useMemo } from "react";

function ReasultComponents({ Name, Mark, Subject}) {
  console.log("inside reasult");

  const parcentage = useMemo(() => {
    return (Mark * 100) / 100;
  }, [Mark]);

  return (
    <>
      <div className="main container bg-black p-3 mt-1 border border-5 border-primary">
        <h1 className="text-bg-dark mt-1 mx-2">Name : {Name}</h1>
        <h2 className="text-bg-dark mt-1 mx-2">Mark : {Mark}</h2>
        <h3 className="text-bg-dark mt-1 mx-2">Subject : {Subject}</h3>
        <h4 className="text-bg-dark mt-1 mx-2">Percentage : {parcentage}</h4>
      </div>
    </>
  );
}

export default ReasultComponents;
