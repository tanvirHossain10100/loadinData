import { useNavigate } from "react-router-dom";

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
      <div className="loginForm">Login</div>
      <div>
        <form action="submitLogin">
          <input type="text" placeholder="type your name" />
          <input type="text" placeholder="Type your email" />
          <input type="text" placeholder="Type your paswword" />

          <button type="submit"></button>
        </form>
      </div>
      <button onClick={handleClick}>Go back</button>
      <button onClick={handleGohome}>Home</button>
    </>
  );
};
