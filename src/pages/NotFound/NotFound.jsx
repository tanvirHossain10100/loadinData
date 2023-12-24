// import { useRouteError } from "react-router-dom";

import { useNavigate } from "react-router-dom";

export const NotFound = () => {
  const navigate = useNavigate();

  // const error = useRouteError();
  // const err=useRoutErr
  // console.log(error.message);
  return (
    <>
      <h2> This is for not found</h2>
      <button onClick={() => navigate(-1)}>Go back</button>
    </>
  );
};
