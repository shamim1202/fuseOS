import { BsGithub } from "react-icons/bs";
import { Link, NavLink } from "react-router";

const Navbar = () => {
  const links = (
    <>
      <NavLink
        to="/"
        end
        className={({ isActive }) =>
          isActive
            ? "text-[#66C23F] font-bold border-b-2 border-[#66C23F]"
            : "hover:text-[#66C23F]"
        }
      >
        <li>Home</li>
      </NavLink>

      <NavLink
        to="/apps"
        end
        className={({ isActive }) =>
          isActive
            ? "text-[#66C23F] font-bold border-b-2 border-[#66C23F]"
            : "hover:text-[#66C23F]"
        }
      >
        <li>All Apps</li>
      </NavLink>

      <NavLink
        to="/apps/installed_apps"
        className={({ isActive }) =>
          isActive
            ? "text-[#66C23F] font-bold border-b-2 border-[#66C23F]"
            : "hover:text-[#66C23F]"
        }
      >
        <li>Installation</li>
      </NavLink>
    </>
  );

  return (
    <div className="navbar py-3 md:py-0 md:px-20">
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
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-2 w-36 p-2 text-sm md:text-base"
          >
            {links}
          </ul>
        </div>
        <Link to="/" className="flex flex-row items-center justify-center">
          <img
            className="w-10 md:w-14"
            src="https://i.ibb.co.com/Zz3Fnjxx/fuse-OS-logo.png"
            alt=""
            srcset=""
          />
          <span className="md:text-xl font-bold bg-linear-to-r from-[#353BA2] to-[#8AD63F] bg-clip-text text-transparent">
            fuseOS
          </span>
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 md:flex md:items-center md:gap-4 font-semibold text-[#000000e6]">
          {links}
        </ul>
      </div>

      <div className="navbar-end ">
        <a
          href="https://github.com/shamim1202"
          className="btn bg-[#66C23F] hover:bg-[#353BA2] text-white text-sm md:text-base font-medium"
          target="_blank"
        >
          <BsGithub /> Contribute
        </a>
      </div>
    </div>
  );
};

export default Navbar;
