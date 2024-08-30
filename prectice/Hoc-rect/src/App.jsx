import React from 'react'
import ClickCounter from "./components/ClickCounter";
import HoverCounter from "./components/HoverCounter";

function App() {
  return (
    <>
    <div className="container w-75 text-bg-danger text-center p-5 mt-4 border rounded-4  ">
      <h1>Hoc-Higher order component</h1>
      <ClickCounter />
      <HoverCounter />
    </div>  
    </>
  );
}

export default App;
