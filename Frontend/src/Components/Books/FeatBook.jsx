import { Link } from "react-router-dom";
import Feature_book from "../../assets/Feature_book.png";
import { motion } from "framer-motion";

export default function FeatBook() {
  return (
    <div className="py-4">
      <div className="container m-auto grid lg:grid-cols-2 md:grid-cols-1 place-items-center">
        <motion.div
          initial={{ opacity: 0, translateY: "-100" }}
          whileInView={{ opacity: 1, translateY: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="me-2"
        >
          <img src={Feature_book} className="w-[95%] rounded" alt="" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, translateY: "100px" }}
          whileInView={{ opacity: 1, translateY: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h4 className="text-3xl text-black hover:text-black dark:text-white hover:dark:text-white relative pb-10 after:absolute after:left-0 after:top-14 after:w-20 after:h-1 after:bg-red-700">
            Featured book
          </h4>
          <p className="text-base text-black hover:text-black dark:text-white hover:dark:text-white opacity-70 mt-2">
            By Timbur Hood
          </p>
          <h3 className="text-2xl text-black hover:text-black dark:text-white hover:dark:text-white">
            Birds gonna be happy
          </h3>
          <p className="text-base text-black hover:text-black dark:text-white hover:dark:text-white opacity-70 mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu
            feugiat amet, libero ipsum enim pharetra hac.
          </p>
          <p className="text-xl text-black hover:text-black dark:text-white hover:dark:text-white mt-4">
            <span className="text-red-600">45.00</span> $
          </p>
          <Link
            to={"/books"}
            className="text-black hover:text-black dark:text-white hover:dark:text-white border border-black dark:border-white p-2 mt-4 w-[170px] flex justify-center capitalize rounded"
          >
            view more
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
