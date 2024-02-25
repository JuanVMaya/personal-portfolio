import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="navbar absolute top-0 z-10 bg-base-100 px-8 py-4 mt-4 max-w-screen-xl mx-auto rounded-lg shadow-sm">
      <div className="flex-1">
        <NavLink to="/" className="btn btn-ghost text-xl font-bold shadow-md">
          <p className="blue-gradient_text">JVM</p>
        </NavLink>
      </div>
      <nav className="flex-none gap-6 px-1">
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
