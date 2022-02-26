import { createSlice } from "@reduxjs/toolkit";

export const searchSlice = createSlice({
  name: "search",
  initialState: {
    selectedIngredient: [],
  },
  reducers: {
    addSelectedIngredient: (state, action) => {
      state.selectedIngredient = [action.payload];
    },
  },
});

// Action creators are generated for each case reducer function
export const { addSelectedIngredient } = searchSlice.actions;

export default searchSlice.reducer;
