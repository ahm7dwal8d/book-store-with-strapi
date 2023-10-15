import About from "../Components/About/About";
import FeatureBooks from "../Components/Books/FeatureBooks";
import Categories from "../Components/Categories/Categories";
import Slider from "../Components/Slider/Slider";
import FeatBook from "../Components/Books/FeatBook";

export default function HomePage() {
  document.title = "Home Page";
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
