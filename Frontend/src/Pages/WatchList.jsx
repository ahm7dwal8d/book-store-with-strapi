import { useLayoutEffect, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getWatchList } from "../Redux/Reducers/getWathList";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { API, BEARER, GET_TOKEN } from "../helper";

const token = GET_TOKEN();

export default function WatchList({ setValue }) {
  const deleteItem = async (id) => {
    const res = await fetch(`${API}wachlists/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `${BEARER} ${token}`,
      },
    });
    const data = await res.json();
    window.location.reload();
    return data;
  };
  useEffect(() => {
    setValue(true);
  }, []);
  const dispatch = useDispatch();
  useLayoutEffect(() => {
    dispatch(getWatchList());
  }, []);
  const { data } = useSelector((state) => state.watchList);
  console.log(data);
  return (
    <div className="py-6 height">
      <div className="container m-auto">
        <h4 className="text-3xl capitalize">cart items</h4>
        <motion.table
          initial={{ opacity: 0, translateY: "200px" }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.6 }}
          className="border mt-4 w-full text-center"
        >
          <thead className="border">
            <tr>
              <th className="border p-3 text-black dark:text-white"></th>
              <th className="border p-3 text-black dark:text-white">IMG</th>
              <th className="border p-3 text-black dark:text-white">Title</th>
              <th className="border p-3 text-black dark:text-white">Price</th>
              <th className="border p-3 text-black dark:text-white">
                Category
              </th>
            </tr>
          </thead>
          <tbody>
            {data?.data?.length === 0 ? (
              <tr className="text-center py-5 block w-full text-xl">
                The WatchList Is Emty
              </tr>
            ) : (
              data?.data?.map((el, index) => {
                return (
                  <tr key={el.id}>
                    <td className="border mt-4">{index + 1}</td>
                    <td className="border mt-4">
                      <img
                        src={`http://localhost:1337${el?.attributes?.book_img}`}
                        alt={el?.attributes?.book_title}
                        className="w-16"
                      />
                    </td>
                    <td className="text-xs text-black dark:text-white border">
                      {el?.attributes?.book_title}
                    </td>
                    <td className="text-xs text-black dark:text-white border">
                      {el?.attributes?.book_price}$
                    </td>
                    <td className="text-xs text-black dark:text-white border">
                      {el?.attributes?.book_cate}
                    </td>
                    <td className="border mt-4">
                      <button
                        className="text-red-600"
                        onClick={() => deleteItem(el.id)}
                      >
                        <FontAwesomeIcon icon={faTrash} />
                      </button>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </motion.table>
        <Link
          to="/Home"
          className="capitalize bg-red-700 text-white p-3 mt-8 w-56 flex justify-center hover:text-white rounded"
        >
          redirect to home
        </Link>
      </div>
    </div>
  );
}
