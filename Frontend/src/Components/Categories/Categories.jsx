import { useLayoutEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../Redux/Reducers/getCategories";
import CategoriesHead from "./CategoriesHead";
import "./style.css";
import CategoriesCard from "./CategoriesCard";

export default function Categories() {
  const dispatch = useDispatch();
  useLayoutEffect(() => {
    dispatch(getCategories());
  }, []);
  const { data } = useSelector((state) => state.categories);
  return (
    <div className="py-8">
      <div className="container m-auto">
        <CategoriesHead />
        <CategoriesCard data={data} />
      </div>
    </div>
  );
}
