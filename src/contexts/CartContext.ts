import React from "react";
import { ICartContext } from "../types/cart";

export const CartContext = React.createContext<ICartContext>({
  cartItems: [],
  addToCart: () => {},
  removeFromCart: () => {},
  updateItem: () => {},
});

const CartProvider = CartContext.Provider;

export default CartProvider;
