import { useLayoutEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../Redux/Reducers/getCategories";
import { motion } from "framer-motion";
import { IMG_PATH_URL } from "../helper";

export default function Categories() {
  const dispatch = useDispatch();
  useLayoutEffect(() => {
    dispatch(getCategories());
  }, []);
  const { data } = useSelector((state) => state.categories);
  return (
    <div className="mt-4">
      <div className="flex justify-between items-center">
        <motion.h2
          initial={{ opacity: 0, translateX: "-100px" }}
          animate={{ opacity: 1, translateX: "0" }}
          transition={{ duration: 0.6 }}
          className="capitalize ps-10 mb-6"
        >
          categories
        </motion.h2>
        <motion.a
          className="capitalize pe-10 mb-6"
          href="/categories/add-new"
          initial={{ opacity: 0, translateX: "100px" }}
          animate={{ opacity: 1, translateX: 0 }}
          transition={{ duration: 0.6 }}
        >
          add new
        </motion.a>
      </div>
      <div className="container m-auto grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1">
        {data?.data?.map((el) => {
          return (
            <motion.a
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mt-4 me-2 text-black dark:text-white hover:text-white hover:dark:text-white"
              href={`/categories/${el.id}`}
              key={el.id}
            >
              <img
                src={`${IMG_PATH_URL}${el?.attributes?.cate_img?.data[0]?.attributes?.url}`}
                alt={el?.attributes?.cate_title}
                loading="lazy"
                className="w-full rounded"
              />
              <h4 className="mt-2 text-center">{el?.attributes?.cate_title}</h4>
            </motion.a>
          );
        })}
      </div>
    </div>
  );
}
