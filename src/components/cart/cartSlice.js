import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
  },
  reducers: {
    addProductToCart: (state, action) => {
      state.products.find((item) => item.idMeal === action.payload.idMeal)
        ? (state.products = [...state.products])
        : (state.products = [...state.products, action.payload]);
    },
    removeProductFromCart: (state, action) => {
      state.products = [
        ...state.products.filter(
          (item) => item.idMeal !== action.payload.idMeal
        ),
      ];
    },
  },
});

export const { addProductToCart, removeProductFromCart } = cartSlice.actions;

export default cartSlice.reducer;
