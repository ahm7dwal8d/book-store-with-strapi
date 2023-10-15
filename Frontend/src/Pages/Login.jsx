import axios from "axios";
import { useFormik } from "formik";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { API } from "../helper";
import { useEffect } from "react";
import { login } from "../Redux/Reducers/Auth";
import { useDispatch } from "react-redux";

export default function Login() {
  const dispatch = useDispatch();
  const nagicate = useNavigate();
  async function getDataFromApi(values) {
    const { email, password } = values;
    try {
      const res = await fetch(`${API}auth/local`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          identifier: email,
          password: password,
        }),
      });
      const data = await res.json();
      if (data?.error) {
        toast.error(data?.error?.message);
      }
      if (res.ok) {
        toast.success(data?.user?.username);
        localStorage.setItem("token", data?.jwt);
        document.cookie = `userToken=${data?.jwt}`;
        nagicate("/Home", { replace: true });
      }
    } catch (err) {
      toast.error(err.message);
    }
  }
  const formikObj = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: function (values) {
      getDataFromApi(values);
      dispatch(login(values.email));
    },
    validate: (values) => {
      const error = {};
      const { email, password } = values;
      if (email.length < 1) {
        error.email = "Email Input Is Required";
      }
      if (password.length < 4) {
        error.password = "The Password Length Should Be Bigger Than 4 ";
      }
      return error;
    },
  });
  document.title = "Login";
  return (
    <motion.div
      initial={{ opacity: 0, translateY: "-100px" }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 0.6 }}
      className="container m-auto h-screen relative z-10"
    >
      <h1 className="text-center mt-2">Login</h1>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-11/12">
        <form
          action=""
          className="w-4/6 m-auto"
          onSubmit={formikObj.handleSubmit}
        >
          <div className="form-control  m-auto mt-3 w-full">
            <label
              className="block capitalize text-black dark:text-white mb-2"
              htmlFor="email"
            >
              email:
            </label>
            <input
              type="email"
              name=""
              id="email"
              onChange={formikObj.handleChange}
              value={formikObj.values.email}
              className="w-full focus:outline-none bg-slate-800 dark:bg-slate-200 text-black dark:text-black ps-2 py-1"
            />
            {formikObj.errors.email ? (
              <div className="bg-red-400 p-3 mt-1 rounded">
                {formikObj.errors.email}
              </div>
            ) : (
              ""
            )}
          </div>
          <div className="form-control m-auto mt-3 w-full">
            <label
              className="block capitalize text-black dark:text-white mb-2"
              htmlFor="password"
            >
              password:
            </label>
            <input
              type="password"
              name=""
              id="password"
              onChange={formikObj.handleChange}
              value={formikObj.values.password}
              className="w-full focus:outline-none bg-slate-800 dark:bg-slate-200 text-black dark:text-black ps-2 py-1"
            />
            {formikObj.errors.password && (
              <div className="bg-red-400 p-3 mt-1 rounded">
                {formikObj.errors.password}
              </div>
            )}
          </div>

          <button
            type="submit"
            className="bg-red-600 hover:bg-red-500 transition-all mt-3 ms-auto block p-2"
          >
            Login
          </button>
        </form>
        <h2 className="text-center">
          Are You Not Have <Link to="/Register">Account</Link>
        </h2>
      </div>
      <ToastContainer />
    </motion.div>
  );
}
