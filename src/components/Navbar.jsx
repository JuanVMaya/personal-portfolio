import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="navbar absolute top-0 z-10 bg-base-100 px-8 py-4 mt-4 max-w-screen-xl mx-auto rounded-lg shadow-sm">
      <nav className="dropdown">
        <div tabIndex="0" role="button" className="btn btn-ghost lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </div>
        <ul
          tabIndex="0"
          className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `btn btn-ghost font-medium text-lg ${
                  isActive ? "bg-neutral text-neutral-content" : ""
                }`
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                `btn btn-ghost font-medium text-lg ${
                  isActive ? "bg-neutral text-neutral-content" : ""
                }`
              }
            >
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `btn btn-ghost font-medium text-lg ${
                  isActive ? "bg-neutral text-neutral-content" : ""
                }`
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className="flex-1 justify-end lg:justify-start">
        <NavLink to="/" className="btn btn-ghost text-xl font-bold shadow-md">
          <p className="blue-gradient_text">JVM</p>
        </NavLink>
      </div>

      <nav className="flex-none gap-6 px-1 hidden lg:flex">
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `btn btn-ghost font-medium text-lg ${
              isActive ? "bg-neutral text-neutral-content" : ""
            }`
          }
        >
          About
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            `btn btn-ghost font-medium text-lg ${
              isActive ? "bg-neutral text-neutral-content" : ""
            }`
          }
        >
          Projects
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `btn btn-ghost font-medium text-lg ${
              isActive ? "bg-neutral text-neutral-content" : ""
            }`
          }
        >
          Contact
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
