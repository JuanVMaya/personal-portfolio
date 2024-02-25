import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="navbar bg-base-100">
      <NavLink to="/" className="btn btn-ghost text-xl">
        <p>JVM</p>
      </NavLink>
    </header>
  );
};

export default Navbar;
