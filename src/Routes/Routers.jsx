import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import MainPage from "../Pages/MainPage/MainPage/MainPage";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";

const Routers = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <MainPage />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/sign-up",
        element: <SignUp />,
      },
    ],
  },
]);

export default Routers;
