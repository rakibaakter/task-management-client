import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";

const Routers = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
  },
]);

export default Routers;
