import { NavLink } from "react-router-dom";
import "./Header.css";
import { getAuth, signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/firebase.config";
export const Header = () => {
  const [authUser] = useAuthState(auth);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("suecces");
      })
      .catch((error) => {
        // An error happened.
        console.log(error);
      });
  };
  return (
    <>
      <div>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <NavLink to="/users">Users</NavLink>
          {authUser ? (
            <NavLink onClick={handleSignOut}>Log out</NavLink>
          ) : (
            <NavLink to="/Login">Log in</NavLink>
          )}
        </nav>
      </div>
    </>
  );
};
