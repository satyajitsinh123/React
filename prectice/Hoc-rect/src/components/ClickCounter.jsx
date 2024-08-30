import React from "react";
import HocCounter from "./HocCounter";

function ClickCounter(props) {
  const { count, increment } = props;
  return (
    <>
      <div className="container">
        <button className="btn btn-dark" onClick={increment}>
          Click
        </button>
        <h2>count: {count}</h2>
      </div>
    </>
  );
}

export default HocCounter(ClickCounter);
