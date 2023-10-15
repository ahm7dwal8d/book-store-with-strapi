import { motion } from "framer-motion";

export default function SearchCard({ data }) {
  return (
    <motion.a
      initial={{ opacity: 0, translateY: "200px" }}
      whileInView={{ opacity: 1, translateY: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mt-4 block text-black hover:text-black dark:text-white hover:dark:text-white "
      href={`/books/${data.id}`}
    >
      <img
        src={`http://localhost:1337${data?.attributes?.book_img?.data?.attributes?.url}`}
        alt={data?.attributes?.book_title}
        className="w-[98%] rounded"
        loading="lazy"
      />
      <h4 className="mt-4 text-center">{data?.attributes?.book_title}</h4>
    </motion.a>
  );
}
