// Utility to clear corrupted cart data from localStorage
export const clearCorruptedCartData = () => {
  try {
    const cartData = localStorage.getItem("cart");
    if (cartData) {
      const parsed = JSON.parse(cartData);
      if (parsed.cartItems && Array.isArray(parsed.cartItems)) {
        // Check if any items are null or don't have _id
        const hasCorruptedItems = parsed.cartItems.some(
          (item) => !item || !item._id
        );
        if (hasCorruptedItems) {
          console.warn("Corrupted cart data detected, clearing localStorage");
          localStorage.removeItem("cart");
          return true;
        }
      }
    }
  } catch (error) {
    console.error("Error checking cart data:", error);
    localStorage.removeItem("cart");
    return true;
  }
  return false;
};

// Call this function on app startup
export const initializeCart = () => {
  if (clearCorruptedCartData()) {
    console.log("Cart data cleared due to corruption");
  }
};
