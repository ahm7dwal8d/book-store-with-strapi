import HomePage from "../Pages/HomePage";
import Login from "../Pages/Login";
import { login } from "../Redux/Reducers/Auth";
import { useSelector } from "react-redux";

export default function ProtectedRoute({ setState }) {
  const { data } = useSelector((state) => state.Auth);
  const Auth = localStorage.getItem("Auth");
  return Auth === null ? <Login setState={setState} /> : <HomePage />;
}
