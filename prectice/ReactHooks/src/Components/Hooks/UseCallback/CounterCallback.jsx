import React, { useCallback, useEffect, useState } from "react";
import ButtonCounter from "./ButtonCounter";

function CounterCallback() {
    let [count ,setCount ] = useState(0)

    const increment = useCallback(() => {
      setCount((preventCount) => preventCount + 1);
    }, []);

    useEffect(() => {
      console.log("inside useE");
    }, [increment]);


  return (
    <>
      <div className="container bg-black">
        <h1 className="count text-white text-center">count : {count}</h1>
        <ButtonCounter increment={ increment } />
      </div>
    </>
  );
}


export default CounterCallback;
