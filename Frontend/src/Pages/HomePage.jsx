import About from "../Components/About/About";
import FeatureBooks from "../Components/Books/FeatureBooks";
import Categories from "../Components/Categories/Categories";
import Slider from "../Components/Slider/Slider";
import FeatBook from "../Components/Books/FeatBook";
import { useEffect } from "react";

export default function HomePage({ setValue }) {
  document.title = "Home Page";
  useEffect(() => {
    setValue(true);
  }, []);
  return (
    <>
      <Slider />
      <Categories />
      <About />
      <FeatureBooks />
      <FeatBook />
    </>
  );
}
