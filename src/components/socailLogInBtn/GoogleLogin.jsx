import { FaGoogle } from "react-icons/fa";
import "./GoogleBtn.css";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { auth } from "../../firebase/firebase.config";
export const GoogleLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const handleGoogleLogin = () => {
    signInWithGoogle();
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
