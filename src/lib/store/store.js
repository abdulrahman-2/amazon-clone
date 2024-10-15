import productsReducer from "./features/ProductsSlice";
import categoriesReducer from "./features/CategoriesSlice";
import CartReducer from "./features/CartSlice";
import { configureStore } from "@reduxjs/toolkit";

export const makeStore = () => {
  return configureStore({
    reducer: {
      products: productsReducer,
      categories: categoriesReducer,
      cart: CartReducer,
    },
  });
};
