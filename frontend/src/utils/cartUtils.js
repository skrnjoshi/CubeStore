const addDecimal = (num) => {
  return (Math.round(num * 100) / 100).toFixed(2);
};

export const updateCart = (state) => {
  // Calculate items price
  const itemsPrice = addDecimal(
    state.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0)
  );

  // Calculate shipping price (free if itemsPrice > 100)
  const shippingPrice = addDecimal(itemsPrice > 100 ? 0 : 10);

  // Calculate tax price
  const taxPrice = addDecimal(Number((0.15 * itemsPrice).toFixed(2)));

  // Calculate total price
  const totalPrice = addDecimal(
    Number(itemsPrice) + Number(shippingPrice) + Number(taxPrice)
  );

  // Update the state with calculated prices
  state.itemsPrice = itemsPrice;
  state.shippingPrice = shippingPrice;
  state.taxPrice = taxPrice;
  state.totalPrice = totalPrice;

  // Save the updated state to localStorage
  localStorage.setItem("cart", JSON.stringify(state));

  // Return the updated state
  return state;
};
