import { useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(-1);
  };
  const handleGohome = () => {
    navigate("/");
  };
  return (
    <>
      <div>Login</div>
      <button onClick={handleClick}>Go back</button>
      <button onClick={handleGohome}>Home</button>
    </>
  );
};
