import { useLayoutEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getBookBySearch } from "../../Redux/Reducers/getBooksBySearch";
import { motion } from "framer-motion";
import SearchCard from "./SearchCard";

export default function SearchItems() {
  const { name } = useParams();
  const dispatch = useDispatch(name);
  useLayoutEffect(() => {
    dispatch(getBookBySearch(name));
  }, []);
  const { data } = useSelector((state) => state.booksbySearch);
  console.log(data);
  return (
    <div className="py-4 height">
      <div className="container m-auto">
        <motion.div
          initial={{ opacity: 0, translateY: "200px" }}
          whileInView={{ opacity: 1, translateY: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-between items-center"
        >
          <h2 className="capitalize text-xl">{name}</h2>
          <Link
            className="text-black hover:text-black dark:text-white hover:dark:text-white "
            to={"/Books"}
          >
            All Books
          </Link>
        </motion.div>
        <div
          className={`${
            data?.data?.length > 1
              ? "grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1"
              : "block"
          } py-4`}
        >
          {data?.data?.map((el) => {
            return <SearchCard data={el} key={el.id} />;
          })}
        </div>
      </div>
    </div>
  );
}
