import { Navigate, Outlet } from "react-router";
import axios from "axios";
import { USERS_ENDPOINT } from "../api-routes";

const IsAuthRoute = () => {
  const user = localStorage.getItem("user");
  const test = JSON.parse(user);
  const getData = async () => {
    const response = await axios.get(`${USERS_ENDPOINT}/${test._id}`);
    localStorage.setItem("user", JSON.stringify(response.data));
  };

  getData();

  if (!user) return <Navigate to="/login" />;
  return <Outlet />;
};

export default IsAuthRoute;
