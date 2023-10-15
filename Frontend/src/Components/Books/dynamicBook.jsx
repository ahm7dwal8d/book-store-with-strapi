import { useLayoutEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getBooksById } from "../../Redux/Reducers/getBooksById";
import { setCartData } from "../../Redux/Reducers/setCartData";
import { setwatchList } from "../../Redux/Reducers/setWatchList";
import { motion } from "framer-motion";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function DynamicBook() {
  const [img, setImg] = useState(null);
  const { id } = useParams();
  const dispach = useDispatch();
  useLayoutEffect(() => {
    dispach(getBooksById(id));
  }, []);
  const { data } = useSelector((state) => state.booksById);
  const navigate = useNavigate();
  const changeImgs = (img) => {
    setImg(img);
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="mt-4 py-4">
      <div className="container m-auto grid lg:grid-cols-2 md:grid-cols-1">
        <motion.div
          initial={{ translateY: "400px" }}
          whileInView={{ translateY: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="imgs mt-4"
        >
          <img
            src={`http://localhost:1337${
              img === null
                ? data?.data?.attributes?.book_img?.data?.attributes?.url
                : img
            }`}
            alt={data?.data?.attributes?.book_title}
            className="w-full rounded"
          />
          <div className="flex">
            {data?.data?.attributes?.book_imgs?.data?.map((el) => {
              return (
                <img
                  src={`http://localhost:1337${el?.attributes?.url}`}
                  alt={el?.attributes?.name}
                  className=" me-4 rounded w-28 mt-7 cursor-pointer"
                  key={el.id}
                  onClick={() => changeImgs(el?.attributes?.url)}
                />
              );
            })}
          </div>
        </motion.div>
        <motion.div
          initial={{ translateY: "400px" }}
          whileInView={{ translateY: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="ms-4 mt-4"
        >
          <h5 className="text-4xl text-black hover:text-black dark:text-white hover:dark:text-white">
            {data && data.data.attributes.book_title}
          </h5>
          <p className="mt-4 opacity-70 text-black hover:text-black dark:text-white hover:dark:text-white">
            <b>Author:</b>&nbsp; {data && data.data.attributes.book_actor}
            &nbsp;&nbsp;
          </p>
          <p className="mt-4 opacity-70 text-black hover:text-black dark:text-white hover:dark:text-white">
            <b>Print:</b>&nbsp; {data && data.data.attributes.book_print}
            &nbsp;&nbsp;
          </p>
          <p className="mt-4 opacity-70 text-black hover:text-black dark:text-white hover:dark:text-white">
            <del> {data && data.data.attributes.book_discount}</del>
            <b> {data && data.data.attributes.book_price}$</b>
          </p>
          <p className="mt-4 text-black hover:text-black dark:text-white hover:dark:text-white">
            {data && data.data.attributes.book_desc}
          </p>
          <button
            className="me-2 capitalize mt-6 transition-all bg-red-800 hover:bg-red-700 hover:border-transparent p-2 rounded"
            onClick={() => {
              toast.success("This Book Add To Cart");
              dispach(
                setCartData({
                  data: {
                    book_title: data?.data?.attributes?.book_title,
                    book_img:
                      data?.data?.attributes?.book_img?.data?.attributes?.url,
                    book_cate: data?.data?.attributes?.book_cate,
                    book_price: data?.data?.attributes?.book_price,
                  },
                })
              );
              setTimeout(() => {
                navigate("/cart");
              }, 3000);
            }}
          >
            add To Cart
          </button>
          <button
            className="me-2 capitalize mt-6 transition-all bg-blue-800 hover:bg-blue-700 hover:border-transparent p-2 rounded"
            onClick={() => {
              toast.success("This Book Add To WatchList");
              dispach(
                setwatchList({
                  data: {
                    book_title: data?.data?.attributes?.book_title,
                    book_img:
                      data?.data?.attributes?.book_img?.data?.attributes?.url,
                    book_cate: data?.data?.attributes?.book_cate,
                    book_price: data?.data?.attributes?.book_price,
                  },
                })
              );
              setTimeout(() => {
                navigate("/watchList");
              }, 3000);
            }}
          >
            add To watchlist
          </button>
        </motion.div>
      </div>
      <ToastContainer />
    </div>
  );
}
