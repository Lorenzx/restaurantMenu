import { configureStore } from "@reduxjs/toolkit";

import searchReducer from "../components/search/searchSlice";
import categoriesReducer from "../components/categories/categoriesSlice";

export default configureStore({
  reducer: {
    search: searchReducer,
    categories: categoriesReducer,
  },
});
