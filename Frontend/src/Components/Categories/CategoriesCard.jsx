import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { motion } from "framer-motion";
import { IMG_PATH_URL } from "../../helper";

export default function CategoriesCard({ data }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className=""
    >
      <Swiper
        slidesPerView={3}
        modules={[Navigation, Autoplay, Pagination]}
        loop
        autoplay
        spaceBetween={50}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        {data?.data?.map((el) => {
          return (
            <SwiperSlide className="my-12" key={el.id}>
              <img
                src={`${IMG_PATH_URL}${el?.attributes?.cate_img?.data[0]?.attributes?.url}`}
                alt={el?.attributes?.cate_title}
                className="w-full rounded"
                loading="lazy"
              />
              <h3 className="mt-3 capitalize text-center">
                {el?.attributes?.cate_title}
              </h3>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </motion.div>
  );
}
