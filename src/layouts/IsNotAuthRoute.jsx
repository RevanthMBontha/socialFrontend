import { Navigate, Outlet } from "react-router";

const IsNotAuthRoute = () => {
  const user = localStorage.getItem("user");

  if (user) return <Navigate to="/" />;
  return <Outlet />;
};

export default IsNotAuthRoute;
