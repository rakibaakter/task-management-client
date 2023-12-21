import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import MainPage from "../Pages/MainPage/MainPage/MainPage";

const Routers = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <MainPage />,
      },
    ],
  },
]);

export default Routers;
