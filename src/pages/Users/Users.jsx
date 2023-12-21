import { useLoaderData, useRouteLoaderData } from "react-router-dom";
import { User } from "../../components/User/User";
import "./Users.css";

export const Users = () => {
  const users = useLoaderData();
  console.log(users);
  return (
    <>
      <h1>This is for users</h1>
      <div className="usersContainer">
        {users.map((user) => (
          <User key={user.id} user={user}></User>
        ))}
      </div>
    </>
  );
};
