import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import MainPage from "../Pages/MainPage/MainPage/MainPage";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import PrivateRoutes from "./PrivareRoutes";
import DashboardLayout from "../Dashboard/DashboardLayout/DashboardLayout";
import AllTask from "../Dashboard/AllTask/AllTask";
import CreateTask from "../Dashboard/CreateTask/CreateTask";
import ToDo from "../Dashboard/ToDo/ToDo";
import Ongoing from "../Dashboard/Ongoing/Ongoing";
import Complete from "../Dashboard/Complete/Complete";
import EditTask from "../Dashboard/EditTask/EditTask";

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
  {
    path: "/dashboard",
    element: (
      <PrivateRoutes>
        <DashboardLayout />
      </PrivateRoutes>
    ),
    children: [
      {
        path : "/dashboard",
        element : <AllTask/>
      },
      {
        path : "/dashboard/create-task",
        element : <CreateTask/>
      },
      {
        path : "/dashboard/edit-task/:id",
        element : <EditTask/>
      },
      {
        path : "/dashboard/to-do",
        element : <ToDo/>
      },
      {
        path : "/dashboard/on-going",
        element : <Ongoing/>
      },
      {
        path : "/dashboard/complete",
        element : <Complete/>
      },
    ]
   
  },
]);

export default Routers;
