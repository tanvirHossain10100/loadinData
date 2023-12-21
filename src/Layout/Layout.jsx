import { Outlet, useNavigation } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Loading } from "../components/Loading/Loading";

export const MainLayout = () => {
  const navigaiton = useNavigation();
  // dkj
  return (
    <>
      <div>
        <Header></Header>
        <div>
          {navigaiton.state === "loading" && <Loading></Loading>}
          <Outlet></Outlet>
        </div>
        <Footer></Footer>
      </div>
    </>
  );
};
