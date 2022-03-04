import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    productsQuantities: [],
    total: 0,
    orderedProducts: [],
  },
  reducers: {
    addProductToCart: (state, action) => {
      let quantity = 1;
      // Not allow to add multiple products
      state.products.map((item) =>
        item.idMeal === action.payload.idMeal
          ? { ...item, quantity: (quantity += 1) }
          : null
      );
      state.products = [
        ...state.products,
        { ...action.payload, quantity: quantity },
      ];
      state.total++;

      state.addedProduct = true;
    },
    removeProductFromCart: (state, action) => {
      if (action.payload.quantity === 1) {
        state.productsQuantities = [
          ...state.productsQuantities.filter(
            (item) => item.idMeal !== action.payload.idMeal
          ),
        ];
        state.products = state.productsQuantities;
      } else {
        state.productsQuantities.map((item) =>
          item.idMeal === action.payload.idMeal ? (item.quantity -= 1) : null
        );
        state.products = state.productsQuantities;
      }
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

        let jsonObject = productsAndQuantities.map(JSON.stringify);

        let uniqueSet = new Set(jsonObject);
        state.productsQuantities = Array.from(uniqueSet).map(JSON.parse);
      }
    },
    placeOrder: (state, action) => {
      state.orderedProducts = [...state.productsQuantities];
    },
    clearAllProducts: (state, action) => {
      state.products = [];
      state.productsQuantities = [];
      state.total = 0;
      state.orderedProducts = [];
    },
  },
});

export const {
  addProductToCart,
  removeProductFromCart,
  removeProductDuplicates,
  placeOrder,
  clearAllProducts,
} = cartSlice.actions;

export default cartSlice.reducer;
