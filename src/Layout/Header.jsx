import { NavLink } from "react-router-dom";
import "./Header.css";
export const Header = () => {
  return (
    <>
      <div>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <NavLink to="/users">Users</NavLink>
          <NavLink to="/login">Login</NavLink>
        </nav>
      </div>
    </>
  );
};
