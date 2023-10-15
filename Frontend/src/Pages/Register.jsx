import { useFormik } from "formik";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { API } from "../helper";
import { useEffect } from "react";

export default function Register({ setValue }) {
  useEffect(() => {
    setValue(false);
  }, []);
  const navigate = useNavigate();
  async function sendDataToApi(values) {
    const { username, email, password, phone } = values;
    try {
      const res = await fetch(`${API}auth/local/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username,
          email: email,
          password: password,
          phone: phone,
        }),
      });
      const data = await res.json();
      console.log(data);
      if (data?.error) {
        toast.error(data?.error?.message);
      }
      if (res.ok) {
        // navigate("/", { replace: true });
      }
    } catch (err) {
      toast.error(err.message);
    }
  }
  const formikObj = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      phone: "",
    },
    onSubmit(values) {
      sendDataToApi(values);
    },
    validate: function (values) {
      const errors = {};
      const { username, email, password, phone } = values;
      if (username.length < 1) {
        errors.username = "The UserName Length Should Be Bagger Than 1";
      }
      if (email.length < 1) {
        errors.email = "The Email Is Required";
      }
      if (password.length < 1) {
        errors.password = "The password Length Should Be Bagger Than 1";
      }
      if (phone.length < 1) {
        errors.phone = "The phone Length Should Be Bagger Than 1";
      }

      return errors;
    },
  });
  document.title = "Register";
  return (
    <motion.div
      initial={{ opacity: 0, translateY: "-100px" }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 0.6 }}
      className="container m-auto h-screen relative"
    >
      <h1 className="text-center mt-2">Register</h1>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-11/12">
        <form
          action=""
          onSubmit={formikObj.handleSubmit}
          className="w-4/6 m-auto"
        >
          <div className="form-control m-auto mt-3 w-full">
            <label
              className="block capitalize text-black dark:text-white mb-2"
              htmlFor="username"
            >
              username:
            </label>
            <input
              type="text"
              name=""
              id="username"
              onChange={formikObj.handleChange}
              value={formikObj.values.username}
              className="w-full focus:outline-none bg-slate-800 dark:bg-slate-200 text-black dark:text-black ps-2 py-1"
            />
            {formikObj.errors.username && (
              <div className="bg-red-400 p-3 mt-1 rounded">
                {formikObj.errors.username}
              </div>
            )}
          </div>
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
            {formikObj.errors.email && (
              <div className="bg-red-400 p-3 mt-1 rounded">
                {formikObj.errors.email}
              </div>
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
          <div className="form-control  m-auto mt-3 w-full">
            <label
              className="block capitalize text-black dark:text-white mb-2"
              htmlFor="phone"
            >
              phone:
            </label>
            <input
              type="tel"
              name=""
              id="phone"
              onChange={formikObj.handleChange}
              value={formikObj.values.phone}
              className="w-full focus:outline-none bg-slate-800 dark:bg-slate-200 text-black dark:text-black ps-2 py-1"
            />
            {formikObj.errors.phone && (
              <div className="bg-red-400 p-3 mt-1 rounded">
                {formikObj.errors.phone}
              </div>
            )}
          </div>
          <button
            type="submit"
            className="bg-red-600 hover:bg-red-500 transition-all mt-3 ms-auto block p-2"
          >
            Register
          </button>
        </form>
        <h2 className="text-center">
          Are You Have <Link to="/">Account</Link>
        </h2>
      </div>
      <ToastContainer />
    </motion.div>
  );
}
