import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import SignIn from "./sign-in";
import Home from "./home";
import PrivateRoute from "./private-route";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PrivateRoute element={<Home />} />,
  },
  {
    path: "login",
    element: <SignIn />
  }
]);

const AppRouter: React.FC<{}> = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default AppRouter;