import { IProduct } from "./product";

export interface ICartProps {
  hideCart: () => void;
}

export interface ICartItemProps {
  summary?: boolean;
  small?: boolean;
  item: ICartItem;
}
export interface ICartItem {
  product: IProduct;
  quantity: number;
}

export interface ICartContext {
  cartItems: ICartItem[];
  addToCart: (item: ICartItem) => void;
  removeFromCart: (id?: string) => void;
  updateItem: (id: string, quantity: number) => void;
}
