import { FaGoogle } from "react-icons/fa";
import "./GoogleBtn.css";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { auth } from "../../firebase/firebase.config";
import { Loading } from "../Loading/Loading";
export const GoogleLogin = () => {
  const [signInWithGoogle, user, error] = useSignInWithGoogle(auth);
  const handleGoogleLogin = () => {
    signInWithGoogle();
    if (Loading) return <Loading></Loading>;
  };
  console.log(error);

  return (
    <>
      <ul>
        <li className="googleBtn" onClick={handleGoogleLogin}>
          <FaGoogle />
        </li>
      </ul>
    </>
  );
};
