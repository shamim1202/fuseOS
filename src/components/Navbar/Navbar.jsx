import { BsGithub } from "react-icons/bs";
import { Link } from "react-router";
import logo from "../../assets/fuseOS-logo.png";

const Navbar = () => {
  const links = (
    <>
      <li>
        <a>Home</a>
      </li>
      <li>
        <a>Apps</a>
      </li>
      <li>
        <a>Installation</a>
      </li>
    </>
  );

  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <Link
            to="/"
            className="flex flex-col md:flex-row md:items-center justify-center"
          >
            <img className="md:w-14" src={logo} alt="" srcset="" />
            <span className="md:text-xl font-bold bg-linear-to-r from-[#8AD63F] to-[#353BA2] bg-clip-text text-transparent">
              fuseOS
            </span>
          </Link>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>

        <div className="navbar-end ">
          <a className="btn bg-linear-to-r from-[#8AD63F] to-[#353BA2] text-white">
            <BsGithub /> Contribute
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
