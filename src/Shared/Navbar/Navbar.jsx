import { IoIosMenu } from "react-icons/io";
import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";

const Navbar = () => {
  const navLinks = (
    <>
      <li>
        <a>Item 1</a>
      </li>
      <li>
        <a>Item 3</a>
      </li>
    </>
  );

  return (
    <nav>
      <div className="navbar bg-base-100  md:px-12 lg:px-44">
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
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLinks}
            </ul>
          </div>
          <Link to="/">
            <Logo />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
