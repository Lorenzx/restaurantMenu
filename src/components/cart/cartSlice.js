import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    total: 0,
  },
  reducers: {
    addProductToCart: (state, action) => {
      state.products = [...state.products, action.payload];
      state.total++;
      // Not allow to add multiple products
      // state.products.find((item) => item.idMeal === action.payload.idMeal)
      //   ? (state.products = [...state.products])
      //   : (state.products = [...state.products, action.payload]);
    },
    removeProductFromCart: (state, action) => {
      state.products = [
        ...state.products.filter(
          (item) => item.idMeal !== action.payload.idMeal
        ),
      ];
      state.total > 0 ? state.total-- : (state.total = 0);
    },
    removeProductDuplicates: (state, action) => {
      let productsAndQuantities = [];
      for (let i = 0; i < state.products.length; i++) {
        let duplicates = state.products.filter(
          (item) => item.idMeal === state.products[i].idMeal
        );
        let quantity = duplicates.length;
        duplicates.splice(1, duplicates.length);

        duplicates = { ...duplicates[0], quantity };
        productsAndQuantities.push(duplicates);
      }

      let jsonObject = productsAndQuantities.map(JSON.stringify);

      let uniqueSet = new Set(jsonObject);
      state.products = Array.from(uniqueSet).map(JSON.parse);
    },
  },
});

export const {
  addProductToCart,
  removeProductFromCart,
  removeProductDuplicates,
} = cartSlice.actions;

export default cartSlice.reducer;
