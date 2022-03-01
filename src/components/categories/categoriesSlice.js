import { createSlice } from "@reduxjs/toolkit";

export const categoriesSlice = createSlice({
  name: "categories",
  initialState: {
    selectedCategory: [],
    categoriesList: [{}],
  },
  reducers: {
    addSelectedCategory: (state, action) => {
      state.selectedCategory = [action.payload];
    },
    getCategoriesList: (state, action) => {
      state.categoriesList = [action.payload];
    },
  },
});

export const { addSelectedCategory, getCategoriesList } =
  categoriesSlice.actions;

export default categoriesSlice.reducer;
