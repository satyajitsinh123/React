import React from "react";

function MarkComponents({ Mark }) {
    console.log("inside mark");
    
  return (
    <>
      <div className=" container main p-3 bg-danger border border-5 border-black">
        <h1 className="mark text-bg-dark">Your Marks : {Mark}</h1>
      </div>
    </>
  );
}

export default React.memo(MarkComponents);
