import { createSlice } from "@reduxjs/toolkit";

export const categoriesSlice = createSlice({
  name: "categories",
  initialState: {
    selectedCategory: [],
  },
  reducers: {
    addSelectedCategory: (state, action) => {
      state.selectedCategory = [action.payload];
    },
  },
});

export const { addSelectedCategory } = categoriesSlice.actions;

export default categoriesSlice.reducer;
