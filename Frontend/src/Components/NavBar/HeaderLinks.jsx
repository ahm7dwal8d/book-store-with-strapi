import { NavLink } from "react-router-dom";

export default function HeaderLinks() {
  const activeStyle = ({ isActive }) => {
    return {
      color: isActive ? "red" : "",
      transition: "all .4s ease",
    };
  };
  return (
    <ul className="links  justify-center items-center mt-6">
      <NavLink
        className="me-2 uppercase text-black dark:text-slate-100 hover:text-black hover:dark:text-slate-100"
        style={activeStyle}
        to="/Home"
      >
        home
      </NavLink>
      <NavLink
        className="me-2 uppercase text-black dark:text-slate-100 hover:text-black hover:dark:text-slate-100"
        style={activeStyle}
        to="/about"
      >
        about us
      </NavLink>
      <NavLink
        className="me-2 uppercase text-black dark:text-slate-100 hover:text-black hover:dark:text-slate-100"
        style={activeStyle}
        to="/books"
      >
        books
      </NavLink>
      <NavLink
        className="me-2 uppercase text-black dark:text-slate-100 hover:text-black hover:dark:text-slate-100"
        style={activeStyle}
        to="/release"
      >
        new release
      </NavLink>
      <NavLink
        className="me-2 uppercase text-black dark:text-slate-100 hover:text-black hover:dark:text-slate-100"
        style={activeStyle}
        to="/contact"
      >
        contact us
      </NavLink>
      <NavLink
        className="me-2 uppercase text-black dark:text-slate-100 hover:text-black hover:dark:text-slate-100"
        style={activeStyle}
        to="/blogs"
      >
        blogs
      </NavLink>
    </ul>
  );
}
