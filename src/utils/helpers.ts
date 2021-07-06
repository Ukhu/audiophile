import { ICartItem } from "../types/cart";

export const getCartTotal = (items: ICartItem[]) => {
  return items.reduce(
    (acc, item) => item.product.price * item.quantity + acc,
    0
  );
};
