import { configureStore } from "@reduxjs/toolkit";

import searchReducer from "../components/search/searchSlice";
import categoriesReducer from "../components/categories/categoriesSlice";
import cartReducer from "../components/cart/cartSlice";

export default configureStore({
  reducer: {
    search: searchReducer,
    categories: categoriesReducer,
    cart: cartReducer,
  },
});
