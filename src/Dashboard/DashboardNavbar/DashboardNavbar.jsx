import { NavLink } from "react-router-dom";
import {
  FaBitbucket,
  FaCalendar,
  FaCreditCard,
  FaHome,
} from "react-icons/fa";
import { FaBookBookmark, FaRankingStar } from "react-icons/fa6";
import { MdDashboard } from "react-icons/md";

const DashboardNavbar = () => {

  const userNavItems = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "text-white" : "")}
        >
          <FaHome />
          User Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "text-white" : "")}
        >
          <FaCalendar />
          Reservation
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "text-white" : "")}
        >
          <FaCreditCard />
          Payment History
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/dashboard/my-cart"
          className={({ isActive }) => (isActive ? "text-white" : "")}
        >
          <FaBitbucket />
          My Cart
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "text-white" : "")}
        >
          <FaRankingStar />
          Add Review
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "text-white" : "")}
        >
          <FaBookBookmark />
          My Booking
        </NavLink>
      </li>
    </>
  );

  return (
    <div>
      <div className="drawer z-10 lg:drawer-open ">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* Page content here */}
          <label
            htmlFor="my-drawer-2"
            className="btn btn-ghost drawer-button lg:hidden"
          >
            <MdDashboard className="text-4xl text-teal-600 " />
          </label>
        </div>
        <div className="drawer-side  ">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul
            className="menu p-4 md:w-80 min-h-full
           bg-teal-600 text-white  font-medium uppercase"
          >
             {userNavItems}
           
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardNavbar;