import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Profile from "./Components/Profile";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <>
      <Navbar/>
      <Home/>
      </>,
    },
    {
      path: "/profile",
      element: <> <Navbar/> <Profile/> </>,
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
