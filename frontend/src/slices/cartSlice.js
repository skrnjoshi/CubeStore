import { createSlice } from "@reduxjs/toolkit";
import { updateCart } from "../utils/cartUtils.js";

const initialState = localStorage.getItem("cart")
  ? (() => {
      try {
        const cartData = JSON.parse(localStorage.getItem("cart"));
        // Clean up any null or invalid items
        if (cartData.cartItems) {
          cartData.cartItems = cartData.cartItems.filter(
            (item) => item && item._id
          );
        }
        return cartData;
      } catch (error) {
        console.error("Error parsing cart from localStorage:", error);
        return { cartItems: [], shippingAddress: {}, paymentMethod: "PayPal" };
      }
    })()
  : { cartItems: [], shippingAddress: {}, paymentMethod: "PayPal" };

const cartSlice = createSlice({
  name: "cart",
  initialState,

  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;

      // Validate that the item has required properties
      if (!item || !item._id) {
        console.error("Invalid item added to cart:", item);
        return state;
      }

      const existItem = state.cartItems.find((x) => x && x._id === item._id);
      if (existItem) {
        state.cartItems = state.cartItems.map((x) =>
          x && x._id === existItem._id ? item : x
        );
      } else {
        state.cartItems = [...state.cartItems, item];
      }
      return updateCart(state);
    },
    removeFromCart: (state, action) => {
      const itemId = action.payload;
      state.cartItems = state.cartItems.filter((x) => x && x._id !== itemId);
      return updateCart(state);
    },
    saveShippingAddress: (state, action) => {
      state.shippingAddress = action.payload;
      return updateCart(state);
    },
    savePaymentMethod: (state, action) => {
      state.paymentMethod = action.payload;
      return updateCart(state);
    },
    clearCartItems: (state, action) => {
      state.cartItems = [];
      return updateCart(state);
    },
    cleanupCart: (state) => {
      // Remove any null or invalid items
      state.cartItems = state.cartItems.filter(
        (item) => item && item._id && item.name
      );
      return updateCart(state);
    },
    resetCart: (state) => (state = initialState),
  },
});

export const {
  addToCart,
  removeFromCart,
  saveShippingAddress,
  savePaymentMethod,
  clearCartItems,
  cleanupCart,
  resetCart,
} = cartSlice.actions;

export default cartSlice.reducer;
