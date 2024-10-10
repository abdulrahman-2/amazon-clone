import productsReducer from "./ProductsSlice";
import categoriesReducer from "./CategoriesSlice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    products: productsReducer,
    categories: categoriesReducer,
  },
});

export default store;
