import React from 'react'
import DisplayData from './Components/DisplayData';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <DisplayData />,
    },
    {
      path: "/",
      element: <DisplayData />,
    },
    {
      path: "/",
      element: <DisplayData />,
    },
  ]);

  return (
    <>

      <RouterProvider router={router} />
    </>
  )
}

export default App