import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import Register from "./Pages/register";
import NavBar from "./Components/NavBar/NavBar";
import HomePage from "./Pages/HomePage";
import Profile from "./Pages/Profile";
import NotFound from "./Components/NotFound";
import Categories from "./Pages/Categories";
import { useEffect, useState } from "react";
import AddNew from "./Components/Categories/addNew";
import DynamicBook from "./Components/Books/dynamicBook";
import Cart from "./Pages/Cart";
import WatchList from "./Pages/WatchList";
import Books from "./Components/Books/Books";
import Loading from "./Components/Loading/Loading";
import SearchItems from "./Components/Search/SearchItems";
import ProtectedRoute from "./Components/ProtectedRoute";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "./Redux/Reducers/Theme";

function App() {
  const [load, setLoad] = useState(false);
  const [state, setState] = useState("");
  const dispatch = useDispatch();
  const [scroll, setScroll] = useState(0);
  const themeStore = localStorage.getItem("theme");
  const { theme } = useSelector((state) => state.Theme);
  useEffect(() => {
    setTimeout(() => {
      setLoad(true);
    }, 3000);
    if (themeStore === "light") {
      document.documentElement.classList.add("light");
    } else {
      document.documentElement.classList.add("dark");
    }
  }, []);
  const setValue = (value) => {
    setState(value);
  };
  if (load === false) return <Loading />;
  window.onscroll = function () {
    setScroll(window.scrollY);
  };
  return (
    <div
      className={`app ${scroll > 80 ? "h-[100%]" : "h-screen"}  ${
        themeStore === "dark" ? "bg-slate-800" : "bg-slate-100 transition-all"
      }`}
    >
      <BrowserRouter>
        {state === true ? <NavBar /> : ""}
        <Routes>
          <Route path="/:name" element={<SearchItems />} />
          <Route path="/" element={<ProtectedRoute setValue={setValue} />} />
          <Route path="/Register" element={<Register setValue={setValue} />} />
          <Route path="/Home" element={<HomePage setValue={setValue} />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/cart" element={<Cart setValue={setValue} />} />
          <Route
            path="/watchList"
            element={<WatchList setValue={setValue} />}
          />
          <Route
            path="/categories"
            element={<Categories setValue={setValue} />}
          />
          <Route path="/categories/add-new" element={<AddNew />} />
          <Route path="/books" element={<Books setValue={setValue} />} />
          <Route path="/books/:id" element={<DynamicBook />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
