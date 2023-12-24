import { Link, useNavigation } from "react-router-dom";
import "./User.css";
import avatar from "../../assets/7309681.jpg";
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
      <div className="userContainer">
        <div
          className={`userCard ${
            navigation.state === "loading" ? "loading" : ""
          }`}
        >
          <div className="card-content">
            <h2>Name:{name}</h2>
            <h3>Company:{companyName}fg</h3>
            <div className="img">
              <img src={avatar} alt="" />
            </div>

            <p>{email}</p>
            <a href={website}>{website}</a>

            <br />
          </div>
        </div>
        <Link className="heyo" to={`/users/${id}`}>
          <button>See details</button>
        </Link>
      </div>
    </>
  );
};
