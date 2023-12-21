import { Link, useNavigation } from "react-router-dom";
import "./User.css";
export const User = ({
  user: {
    id,
    name,
    email,
    website,
    company: { name: companyName },
  },
}) => {
  console.log(companyName);
  const navigation = useNavigation();
  return (
    <>

      <div
        className={`userCard ${
          navigation.state === "loading" ? "loading" : ""
        }`}
      >
        
        <h2>Name:{name}</h2>
        <p>{email}</p>
        <a href={website}>{website}</a>
        <h1>{companyName}fg</h1>
        <br />
        <Link to={`/users/${id}`}>
          <button>See details</button>
        </Link>
      </div>
    </>
  );
};
