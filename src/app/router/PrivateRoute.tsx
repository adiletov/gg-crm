import { Navigate, Outlet } from "react-router";
import { useAppSelector } from "../store";

export default function PrivateRoute() {
  const isAuth = useAppSelector((state) => state.auth.isAuth);
  return isAuth ? <Outlet /> : <Navigate to={"/auth"} />;
}
