import { Outlet, useNavigation } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Loading } from "../components/Loading/Loading";
import "./Layout.css";

export const MainLayout = () => {
  const navigaiton = useNavigation();
  // dkj
  return (
    <>
      <div className="mainLaout">
        <Header></Header>
        <div className={`${navigaiton.state}?"loadigBg":'' bodyOfLayout`}>
          {navigaiton.state === "loading" && <Loading></Loading>}
          <Outlet></Outlet>
        </div>
        <Footer></Footer>
      </div>
    </>
  );
};
