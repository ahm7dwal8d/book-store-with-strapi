import { configureStore } from "@reduxjs/toolkit";
import categories from "./Reducers/getCategories";
import books from "./Reducers/getBooks";
import booksById from "./Reducers/getBooksById";
import setCartData from "./Reducers/setCartData";
import cart from "./Reducers/getCartData";
import setWatchList from "./Reducers/setWatchList";
import watchList from "./Reducers/getWathList";
import booksbySearch from "./Reducers/getBooksBySearch";
import Auth from "./Reducers/Auth";
import Theme from "./Reducers/Theme";
export const store = configureStore({
  reducer: {
    categories,
    books,
    booksById,
    setCartData,
    cart,
    setWatchList,
    watchList,
    booksbySearch,
    Auth,
    Theme,
  },
});
