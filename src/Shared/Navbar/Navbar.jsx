import { IoIosMenu } from "react-icons/io";
import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";

const Navbar = () => {
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

  const navLinks = (
    <>
      <li>
        <a>Item 1</a>
      </li>
      <li>
        <Link to="/dashboard">Dashboard</Link>
      </li>
    </>

    
  );

  return (
    <nav>
      <div className="navbar bg-teal-50 fixed z-10 md:px-12 lg:px-44">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden text-3xl"
            >
              <IoIosMenu />
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content  z-[1] p-2 shadow   w-52"
            >
              {navLinks}
            </ul>
          </div>
          <div>
            <Link to="/">
              <Logo />
            </Link>
          </div>
        </div>
        <div className="navbar-end justify-end">
          <div className=" hidden lg:flex justify-end ">
            <ul className="menu menu-horizontal px-1 ">{navLinks}</ul>
          </div>
          <div className="font-semibold text-teal-600">
          {user ? (
          <div className="flex items-center gap-2 md:gap-4">
            <div className="flex flex-col justify-center">
              <img
                className="h-8 w-6 md:h-8 md:w-10 rounded-full mx-auto"
                src={user?.photoURL}
                alt=""
              />
              <span>{user?.displayName}</span>
            </div>
            <button onClick={handleLogOut} >
              Log Out
            </button>
          </div>
        ) : (
          <Link to="/login">Log In</Link>
        )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
