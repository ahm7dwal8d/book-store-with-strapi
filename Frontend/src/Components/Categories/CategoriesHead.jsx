import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function CategoriesHead() {
  return (
    <motion.div
      initial={{ opacity: 0, translateY: "-60px" }}
      whileInView={{ opacity: 1, translateY: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="flex justify-between items-center head"
    >
      <div className="info">
        <h3 className="capitalize ps-12 relative text-black dark:text-slate-100 after:absolute after:top-1/2 after:-translate-1/2 after:left-0 after:w-10 after:h-1 after:bg-red-600 ">
          categories
        </h3>
        <p className="capitalize text-black dark:text-slate-100 mt-3">
          explore our top categories
        </p>
      </div>
      <Link
        className="capitalize text-black dark:text-slate-100 hover:text-black hover:dark:text-slate-100"
        to="/categories"
      >
        all categories
      </Link>
    </motion.div>
  );
}
