import React from "react";
import HocCounter from "./HocCounter";

function HoverCounter(props) {
  const { count, increment } = props;
  return (
    <>
      <div className="container">
        <button className="btn btn-dark" onMouseOver={increment}>
          Hover
        </button>
        <h2>count: {count}</h2>
      </div>
    </>
  );
}

export default HocCounter(HoverCounter);
