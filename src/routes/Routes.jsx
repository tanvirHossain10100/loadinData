import { createBrowserRouter, useFetcher } from "react-router-dom";
import App from "../App";
import { About } from "../pages/RegistrationPage/About/About";
import { Contact } from "../pages/Contact/Contact";
import { Login } from "../pages/Login/Login";
import { Registration } from "../pages/RegistrationPage/Registration";
import { NotFound } from "../pages/NotFound/NotFound";
import { Home } from "../pages/Home/Home";
import { Users } from "../pages/Users/Users";
import { UserDetails } from "../components/UserDetails/UserDetails";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "about",
        element: <About></About>,
      },
      {
        path: "contact",
        element: <Contact></Contact>,
      },
      {
        path: "/users",
        element: <Users></Users>,
        loader: () => fetch("https://jsonplaceholder.typicode.com/users"),
        errorElement: <NotFound></NotFound>,
      },
      {
        path: "users/:userId",
        element: <UserDetails></UserDetails>,
        loader: ({ params }) =>
          fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        errorElement: <NotFound />,

        //
        // console.log(userId)
        // console.log(params.userId);
      },
    ],
  },
  {
    path: "login",
    element: <Login></Login>,
  },
  {
    path: "register",
    element: <Registration></Registration>,
  },
  {
    path: "*",
    element: <NotFound></NotFound>,
  },
]);
