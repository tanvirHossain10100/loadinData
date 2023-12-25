import { useEffect, useState } from "react";
import {
  useAuthState,
  useCreateUserWithEmailAndPassword,
  useSendEmailVerification,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../firebase/firebase.config";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import "./Registration.css";
import { GoogleLogin } from "../../components/socailLogInBtn/GoogleLogin";

export const Registration = () => {
  const [sendEmailVerification, sending, error2] =
    useSendEmailVerification(auth);
  const [userSucces, loadingSucces, errorSuccs] = useAuthState(auth);
  const [updateProfile, updating, error1] = useUpdateProfile(auth);

  const navigate = useNavigate();
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    password: "",
    rePassword: "",
  });
  console.log(userInfo);
  useEffect(() => {
    console.log(user);
    if (userSucces.emailVerified === true) {
      toast("Succesfully registered !");
      console.log(user);
      console.log(user);
      navigate("/");
    }
  }, [userSucces]);
  // use a=await user
  console.log(error1);
  const handleSignUp = async (e) => {
    e.preventDefault();
    const name = userInfo.name;
    const pass = userInfo.password;
    const rePass = userInfo.rePassword;
    if (pass !== rePass) {
      toast.error("Password doesn't mathc !", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: true,
        progress: false,
        theme: "dark",
      });
      return;
    }
    e.preventDefault();
    await createUserWithEmailAndPassword(userInfo.email, userInfo.password);

    const sucessEmailVarification = await sendEmailVerification(true);
    await updateProfile({ displayName: name });
    if (sucessEmailVarification) {
      toast.info("Check your eamil and verify", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
    console.log(user);
    console.log(user);
    // const hey = );
    // console.log(hey, "hey");
    console.log(user);

    if (error) {
      return (
        <div>
          <p>Error: {error.message}</p>
        </div>
      );
    }
    if (loading) {
      return <p>Loading...</p>;
    }
    if (updating) {
      return <p>Loding....</p>;
    }
    console.log(userSucces);

    console.log(error);
    if (user) {
      // toast("Succesfully registered !");
      // console.log(user);
      // navigate("/");

      return (
        <div>
          <p>Registered User: {user.user.email}</p>
        </div>
      );
    }
  };

  return (
    <>
      <div className="singUpContainer">
        <div className="signupBtn">
          <h2>Sign up</h2>
          <form onSubmit={handleSignUp}>
            <input
              type="text"
              placeholder="type your name"
              name="name"
              onChange={(e) =>
                setUserInfo({ ...userInfo, [e.target.name]: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="Type your email"
              name="email"
              onChange={(e) =>
                setUserInfo({ ...userInfo, [e.target.name]: e.target.value })
              }
            />
            <input
              type="password"
              placeholder="Type your paswword"
              name="password"
              onChange={(e) =>
                setUserInfo({ ...userInfo, [e.target.name]: e.target.value })
              }
            />
            <input
              type="password"
              placeholder="retyype your paswword"
              name="rePassword"
              onChange={(e) =>
                setUserInfo({ ...userInfo, [e.target.name]: e.target.value })
              }
            />

            <button type="submit">Register</button>
            <div className="socialLoginBtnContainer">
              <h2>Socail login</h2>

              <div className="socialLogin">
                <GoogleLogin></GoogleLogin>
              </div>
            </div>
            <Link to="/login">Already have a account?</Link>
          </form>
        </div>
      </div>
    </>
  );
};
