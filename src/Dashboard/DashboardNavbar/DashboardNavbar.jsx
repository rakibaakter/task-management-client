import { Link, NavLink } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";

const DashboardNavbar = () => {
  const { user, logOut } = useAuth();
  const handleLogOut = () => {

    logOut()
      .then(() => {
        Swal.fire({
          title: "Sign Out Successfully",
          showClass: {
            popup: `
                animate__animated
                animate__fadeInUp
                animate__faster
              `,
          },
          hideClass: {
            popup: `
                animate__animated
                animate__fadeOutDown
                animate__faster
              `,
          },
        });
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error.message,
        });
      });
  };

  const userNavItems = (
    <>
    <li>
      <ul>
        <li>
        <img
                className="h-12 w-12 md:h-16 md:w-20 rounded-full"
                src={user?.photoURL}
                alt=""
              />
        </li>
        <li><h2>{user.displayName}</h2></li>
        <h3 className="normal-case">{user.email}</h3>
      </ul>
      <div className="divider"></div> 
    </li>
      <li>
        <NavLink
          to="/dashboard"
          className={({ isActive }) => (isActive ? "text-white" : "")}
        >
          All
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "text-white" : "")}
        >
          to do list
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "text-white" : "")}
        >
          ongoing list
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/dashboard/my-cart"
          className={({ isActive }) => (isActive ? "text-white" : "")}
        >
          
          done list
        </NavLink>
      </li>
      <li>
      <button onClick={handleLogOut} >
              Log Out
            </button>
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