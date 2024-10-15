"use client";
import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

// Lazily initialize the cart state to avoid SSR issues
const getInitialCartState = () => {
  if (typeof window !== "undefined") {
    // Only access localStorage in the browser
    return JSON.parse(localStorage.getItem("cart")) ?? [];
  }
  return []; // Return an empty cart during SSR
};

const initialState = {
  cart: getInitialCartState(),
};

const updateLocalStorage = (cart) => {
  try {
    if (typeof window !== "undefined") {
      // Only update localStorage in the browser
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  } catch (error) {
    console.error("Failed to update localStorage:", error);
  }
};

const getShortTitle = (title) => `${title?.substring(0, 10)}...` || "Item";

const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const itemIndex = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        if (state.cart[itemIndex].quantity < 10) {
          state.cart[itemIndex].quantity += 1;
          toast.success(
            `${getShortTitle(state.cart[itemIndex].title)} quantity increased`
          );
        }
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
        toast.success(`${getShortTitle(action.payload.title)} added to cart`);
      }
      updateLocalStorage(state.cart);
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload.id);
      toast.success(`${getShortTitle(action.payload.title)} removed from cart`);
      updateLocalStorage(state.cart);
    },
    increaseQuantity: (state, action) => {
      const itemIndex = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0 && state.cart[itemIndex].quantity < 10) {
        state.cart[itemIndex].quantity += 1;
        toast.success(
          `${getShortTitle(state.cart[itemIndex].title)} quantity increased`
        );
        updateLocalStorage(state.cart);
      }
    },
    decreaseQuantity: (state, action) => {
      const itemIndex = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0 && state.cart[itemIndex].quantity > 1) {
        state.cart[itemIndex].quantity -= 1;
        toast.success(
          `${getShortTitle(state.cart[itemIndex].title)} quantity decreased`
        );
      } else if (itemIndex >= 0) {
        toast.success(
          `${getShortTitle(state.cart[itemIndex].title)} removed from cart`
        );
        state.cart.splice(itemIndex, 1);
      }
      updateLocalStorage(state.cart);
    },
  },
});

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity } =
  CartSlice.actions;
export default CartSlice.reducer;
