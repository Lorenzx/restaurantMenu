import { createSlice } from "@reduxjs/toolkit";

export const searchSlice = createSlice({
  name: "search",
  initialState: {
    selectedIngredient: [],
    mealsByIngredientList: [],
  },
  reducers: {
    addSelectedIngredient: (state, action) => {
      state.selectedIngredient = [action.payload];
    },
    getMealsByIngredientList: (state, action) => {
      state.mealsByIngredientList = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addSelectedIngredient, getMealsByIngredientList } =
  searchSlice.actions;

export default searchSlice.reducer;
