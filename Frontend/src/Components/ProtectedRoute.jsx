import HomePage from "../Pages/HomePage";
import Login from "../Pages/Login";
import { login } from "../Redux/Reducers/Auth";
import { useSelector } from "react-redux";

export default function ProtectedRoute({ setValue }) {
  const { data } = useSelector((state) => state.Auth);
  const Auth = localStorage.getItem("Auth");
  return Auth === null ? <Login setValue={setValue} /> : <HomePage />;
}
