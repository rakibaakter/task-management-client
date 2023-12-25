import { Outlet } from "react-router-dom";
import DashboardNavbar from "../DashboardNavbar/DashboardNavbar";

const DashboardLayout = () => {
  return (
    <div className="flex w-full ">
      <div className="">
        <DashboardNavbar />
      </div>

      <div
        className="flex-1 max-h-screen overflow-auto
       text-center "
      >
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;