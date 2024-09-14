import React from "react";
import Navbar from "./Components/Navbar";
import Todo from "./Components/Todo";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Display from "./Components/Display";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Navbar />
          <Todo />
        </>
      ),
    },
    {
      path: "/display",
      element: (
        <>
          <Navbar />
          <Display />
        </>
      ),
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
