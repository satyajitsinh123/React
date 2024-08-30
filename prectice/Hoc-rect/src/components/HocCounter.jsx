import React, { useState } from "react";

function HocCounter(WrapComponent, increment = 1) {
  return function component(props) {
    const [count, setCount] = useState(0);
    return (
      <>
        <WrapComponent
          {...props}
          count={count}
          increment={() => {
            setCount(count + 1);
          }}
        />
      </>
    );
  };
}

export default HocCounter;
