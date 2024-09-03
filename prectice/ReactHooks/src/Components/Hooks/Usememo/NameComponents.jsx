import React from "react";

function NameComponents({ Name }) {
    console.log("inside name");
    
  return (
    <>
      <div className="container name-heding p-4 bg-black mt-1 border border-5 border-danger">
        <h1 className="main text-bg-primary">Name : {Name}</h1>
      </div>
    </>
  );
}

export default React.memo(NameComponents);
