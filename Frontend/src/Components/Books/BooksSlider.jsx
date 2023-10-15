import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
export default function BooksSlider({ data }) {
  return (
    <motion.div
      initial={{ opacity: 0, translateY: "-100px" }}
      whileInView={{ opacity: 1, translateY: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mt-4"
    >
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={30}
        slidesPerView={3}
        navigation
        loop
        pagination={{ clickable: true }}
      >
        {data?.map((el) => {
          return (
            <SwiperSlide className="ms-4 my-7" key={el.id}>
              <motion.a
                href={`/books/${el.id}`}
                initial={{ translateY: "-100px" }}
                whileInView={{ translateY: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <img
                  src={`http://localhost:1337${el?.attributes?.book_img?.data?.attributes?.url}`}
                  alt={el?.attributes?.book_title}
                  className="w-full rounded"
                />
                <h4 className="text-xl mt-3 text-center text-black hover:text-black dark:text-white hover:dark:text-white">
                  {el?.attributes?.book_title}
                </h4>
              </motion.a>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </motion.div>
  );
}
