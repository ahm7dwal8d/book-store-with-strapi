import logo from "../../assets/logo-removebg-preview.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faUserAlt,
  faShoppingCart,
  faHeart,
  faBars,
  faSun,
  faMoon,
} from "@fortawesome/free-solid-svg-icons";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import CustomForm from "./CustomForm";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../../Redux/Reducers/Theme";

export default function HeaderInfo() {
  const [state, setState] = useState(false);
  const activeStyle = ({ isActive }) => {
    return {
      color: isActive ? "red" : "",
      transition: "all .4s ease",
    };
  };
  const { theme } = useSelector((state) => state.Theme);
  const dispatch = useDispatch();

  return (
    <>
      <div className="header pt-3 flex relative justify-between items-center after:border-t-2 after:border after:absolute after:top-0 after:left-0 after:w-full after:border-slate-700 after:dark:border-slate-200 after:opacity-40">
        <img src={logo} alt="" className="w-[50px] h-[50px] rounded-[50%]" />
        <div className="form-group bg-slate-800 dark:bg-slate-100 text-white dark:text-black px-3 py-1 rounded-[30px] w-[40%]">
          <CustomForm />
        </div>
        <div className="links">
          <Link
            to="/profile"
            className="me-2 text-black dark:text-slate-100 hover:text-black hover:dark:text-white capitalize "
          >
            profile
            <FontAwesomeIcon className="ms-2" icon={faUserAlt} />
          </Link>
          <Link
            to="/cart"
            className="me-2 text-black dark:text-slate-100 hover:text-black hover:dark:text-white capitalize "
          >
            cart
            <FontAwesomeIcon className="ms-2" icon={faShoppingCart} />
          </Link>
          <Link
            to="/watchlist"
            className="me-2 text-black dark:text-slate-100 hover:text-black hover:dark:text-white capitalize "
          >
            watchlist
            <FontAwesomeIcon className="ms-2" icon={faHeart} />
          </Link>
          <div
            className="ms-2 cursor-pointer"
            onClick={() => {
              dispatch(toggleTheme());
            }}
          >
            <FontAwesomeIcon icon={theme === "dark" ? faSun : faMoon} />
          </div>
        </div>
        <div className=" icon flex">
          <div
            className="cursor-pointer me-2"
            onClick={() => {
              dispatch(toggleTheme());
            }}
          >
            <FontAwesomeIcon icon={theme === "dark" ? faSun : faMoon} />
          </div>
          <div
            className=" cursor-pointer me-2"
            onClick={() => {
              setState(!state);
              document.body.style.overflow = "hidden";
            }}
          >
            <FontAwesomeIcon icon={faBars} />
          </div>
        </div>
      </div>
      {state && (
        <div
          className="absolute inset-0 w-full h-full bg-gray-900 opacity-80 z-50"
          onClick={() => setState(false)}
        >
          <div className="mobile block w-1/2 bg-slate-800 dark:bg-slate-100 p-4 rounded absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
            <Link
              to="/profile"
              className="me-2 text-black  dark:text-black hover:text-white hover:dark:text-black capitalize block"
              onClick={() => setState(false)}
            >
              profile
              <FontAwesomeIcon className="ms-2" icon={faUserAlt} />
            </Link>
            <Link
              to="/cart"
              className="me-2 text-white  dark:text-black hover:text-white hover:dark:text-black capitalize block mt-2"
              onClick={() => setState(false)}
            >
              cart
              <FontAwesomeIcon className="ms-2" icon={faShoppingCart} />
            </Link>
            <Link
              to="/watchlist"
              className="me-2 text-white  dark:text-black hover:text-white hover:dark:text-black capitalize block mt-2"
              mt-2
              onClick={() => setState(false)}
            >
              watchlist
              <FontAwesomeIcon className="ms-2" icon={faHeart} />
            </Link>
            <ul className=" mt-6">
              <NavLink
                className="me-2 text-white  dark:text-black hover:text-white hover:dark:text-black capitalize block mt-2"
                style={activeStyle}
                to="/Home"
                onClick={() => setState(false)}
              >
                home
              </NavLink>
              <NavLink
                className="me-2 uppercase text-black block mt-4 "
                style={activeStyle}
                to="/about"
                onClick={() => setState(false)}
              >
                about us
              </NavLink>
              <NavLink
                className="me-2 uppercase text-black block mt-4 "
                style={activeStyle}
                to="/books"
                onClick={() => setState(false)}
              >
                books
              </NavLink>
              <NavLink
                className="me-2 uppercase text-black block mt-4 "
                style={activeStyle}
                to="/release"
                onClick={() => setState(false)}
              >
                new release
              </NavLink>
              <NavLink
                className="me-2 uppercase text-black block mt-4 "
                style={activeStyle}
                to="/contact"
                onClick={() => setState(false)}
              >
                contact us
              </NavLink>
              <NavLink
                className="me-2 uppercase text-black dark:text-slate-100 hover:text-black hover:dark:text-slate-100 block"
                style={activeStyle}
                to="/blogs"
                onClick={() => setState(false)}
              >
                blogs
              </NavLink>
            </ul>
          </div>
          <span
            className="uppercase absolute top-5 right-5 cursor-pointer hover:text-red-600 transition-all"
            onClick={() => {
              setState(false);
              document.body.style.overflow = "auto";
            }}
          >
            x
          </span>
        </div>
      )}
    </>
  );
}
