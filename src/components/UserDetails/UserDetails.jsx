import { useLoaderData } from "react-router-dom";

export const UserDetails = () => {
  const user = useLoaderData();
  const { name, userName } = user;
  return (
    <>
      <h2>this is for user detais</h2>
      <h1>{name}</h1>
      <h4>{userName}</h4>
    </>
  );
};
