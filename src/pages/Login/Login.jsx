import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
export const Login = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(-1);
  };
  const handleGohome = () => {
    navigate("/register");
  };
  return (
    <>
      <div className="loginForm">
        <div className="logininputInfo">
          <h2> Login</h2>
          <form action="submitLogin" className="submitLogin">
            <input type="text" placeholder="Type your email" />
            <input type="text" placeholder="Type your paswword" />

            <button type="submit">submit</button>
            <Link to="/register">Already have a account?</Link>
          </form>
        </div>
      </div>

      {/* <button onClick={handleClick}>Go back</button>
      <button onClick={handleGohome}>Home</button> */}
    </>
  );
};
