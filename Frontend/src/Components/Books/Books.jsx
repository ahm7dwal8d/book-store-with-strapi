import { useLayoutEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBooks } from "../../Redux/Reducers/getBooks";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Books() {
  const dispatch = useDispatch();
  useLayoutEffect(() => {
    dispatch(getBooks());
  }, []);
  const { data } = useSelector((state) => state.books);
  console.log(data);
  return (
    <div className="py-4">
      <div className="container m-auto grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1">
        {data?.data?.map((el) => {
          return (
            <motion.div
              initial={{ opacity: 0, translateY: 200 }}
              whileInView={{ opacity: 1, translateY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Link
                to={`/books/${el.id}`}
                className="mt-4 cursor-pointer text-black hover:text-black dark:text-white hover:dark:text-white"
              >
                <img
                  src={`http://localhost:1337${el?.attributes?.book_img?.data?.attributes?.url}`}
                  alt={el?.attributes?.book_title}
                  className="w-[95%] rounded"
                />
                <h4 className="mt-4 text-center">
                  {el?.attributes?.book_title}
                </h4>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
