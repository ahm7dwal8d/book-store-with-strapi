import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./slider.css";
import { motion } from "framer-motion";

export default function Slider() {
  return (
    <div className="slider">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        loop={true}
        autoplay={true}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        <SwiperSlide className="slide-1 h-screen relative">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="container ms-12 absolute top-1/2 -translate-y-1/2"
          >
            <h1 className="my-4">Ipusm Dolor Si</h1>
            <p className="w-4/6 my-4">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Voluptate, dolorem optio eligendi tempora aspernatur saepe debitis
              harum accusantium vel, sequi velit deserunt reiciendis iusto ipsam
              at a, iste temporibus quis? Rem, fugiat hic!
            </p>
            <button className="capitalize">read more</button>
          </motion.div>
        </SwiperSlide>
        <SwiperSlide className="slide-2 h-screen relative">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="container ms-12 absolute top-1/2 -translate-y-1/2"
          >
            <h1 className="my-4">Ipusm Dolor Si</h1>
            <p className="w-4/6 my-4">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Voluptate, dolorem optio eligendi tempora aspernatur saepe debitis
              harum accusantium vel, sequi velit deserunt reiciendis iusto ipsam
              at a, iste temporibus quis? Rem, fugiat hic!
            </p>
            <button className="capitalize">read more</button>
          </motion.div>
        </SwiperSlide>
        <SwiperSlide className="slide-3 h-screen relative">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="container ms-12 absolute top-1/2 -translate-y-1/2"
          >
            <h1 className="my-4">Ipusm Dolor Si</h1>
            <p className="w-4/6 my-4">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Voluptate, dolorem optio eligendi tempora aspernatur saepe debitis
              harum accusantium vel, sequi velit deserunt reiciendis iusto ipsam
              at a, iste temporibus quis? Rem, fugiat hic!
            </p>
            <button className="capitalize">read more</button>
          </motion.div>
        </SwiperSlide>
        <SwiperSlide className="slide-4 h-screen relative">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="container ms-12 absolute top-1/2 -translate-y-1/2"
          >
            <h1 className="my-4">Ipusm Dolor Si</h1>
            <p className="w-4/6 my-4">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Voluptate, dolorem optio eligendi tempora aspernatur saepe debitis
              harum accusantium vel, sequi velit deserunt reiciendis iusto ipsam
              at a, iste temporibus quis? Rem, fugiat hic!
            </p>
            <button className="capitalize">read more</button>
          </motion.div>
        </SwiperSlide>
        <SwiperSlide className="slide-5 h-screen relative">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="container ms-12 absolute top-1/2 -translate-y-1/2"
          >
            <h1 className="my-4">Ipusm Dolor Si</h1>
            <p className="w-4/6 my-4">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Voluptate, dolorem optio eligendi tempora aspernatur saepe debitis
              harum accusantium vel, sequi velit deserunt reiciendis iusto ipsam
              at a, iste temporibus quis? Rem, fugiat hic!
            </p>
            <button className="capitalize">read more</button>
          </motion.div>
        </SwiperSlide>
        <SwiperSlide className="slide-6 h-screen relative">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="container ms-12 absolute top-1/2 -translate-y-1/2"
          >
            <h1 className="my-4">Ipusm Dolor Si</h1>
            <p className="w-4/6 my-4">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Voluptate, dolorem optio eligendi tempora aspernatur saepe debitis
              harum accusantium vel, sequi velit deserunt reiciendis iusto ipsam
              at a, iste temporibus quis? Rem, fugiat hic!
            </p>
            <button className="capitalize">read more</button>
          </motion.div>
        </SwiperSlide>
        <SwiperSlide className="slide-7 h-screen relative">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="container ms-12 absolute top-1/2 -translate-y-1/2"
          >
            <h1 className="my-4">Ipusm Dolor Si</h1>
            <p className="w-4/6 my-4">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Voluptate, dolorem optio eligendi tempora aspernatur saepe debitis
              harum accusantium vel, sequi velit deserunt reiciendis iusto ipsam
              at a, iste temporibus quis? Rem, fugiat hic!
            </p>
            <button className="capitalize">read more</button>
          </motion.div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
