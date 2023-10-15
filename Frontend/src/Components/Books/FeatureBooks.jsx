import { useDispatch, useSelector } from "react-redux";
import BooksSlider from "./BooksSlider";
import { useLayoutEffect } from "react";
import { getBooks } from "../../Redux/Reducers/getBooks";

export default function FeatureBooks() {
  const dispatch = useDispatch();
  useLayoutEffect(() => {
    dispatch(getBooks());
  }, []);
  const { data } = useSelector((state) => state.books);
  return (
    <div className="py-6">
      <div className="container m-auto">
        <div className="text-center">
          <h4 className=" text-black hover:text-black dark:text-slate-100 hover:dark:text-slate-100">
            Some quality items
          </h4>
          <h4 className="mt-4 text-5xl text-black hover:text-black dark:text-slate-100 hover:dark:text-slate-100">
            New Release Books
          </h4>
        </div>
        <BooksSlider data={data?.data} />
      </div>
    </div>
  );
}
