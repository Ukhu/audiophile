import React, { useContext } from "react";
import styled from "styled-components";

import { ICartItemProps } from "../types/cart";

import { CartContext } from "../contexts/CartContext";

import MarkOneImg from "../assets/img/image-xx99-mark-one-headphones.jpg";

import QuantityInput from "./QuantityInput";

const StyledCartItem = styled.div<{ small?: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;

  ${({ small }) => small && `margin-bottom: 0;`}
`;

const ItemDetail = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ItemImage = styled.img<{ small?: boolean }>`
  width: 4rem;
  height: 4rem;
  margin-right: 1rem;
  border-radius: 8px;
  object-fit: cover;

  ${({ small }) => small && `margin-right: 0;`}
`;

const ItemText = styled.div`
  font: ${({ theme }) => theme.typography.body};
  font-weight: bold;

  &:last-child {
    color: ${({ theme }) => theme.colors.neutral.black};
    opacity: 0.5;
  }
`;

const ItemQuantity = styled(ItemText)`
  align-self: start;
  padding-top: 0.5rem;
`;

const CartItem = ({ item, summary, small }: ICartItemProps) => {
  const { removeFromCart, updateItem } = useContext(CartContext);

  const { product, quantity } = item;
  const { name, price } = product;

  const handleChange = (quantity: number) => {
    if (!quantity) {
      removeFromCart(product.slug);
    } else {
      updateItem(product.slug, quantity);
    }
  };

  return (
    <StyledCartItem small={small}>
      <ItemDetail>
        <ItemImage src={MarkOneImg} alt="Cart item" small={small} />
        <div>
          <ItemText>{name}</ItemText>
          <ItemText>${price.toLocaleString()}</ItemText>
        </div>
      </ItemDetail>
      {summary ? (
        <ItemQuantity>{quantity}x</ItemQuantity>
      ) : (
        <QuantityInput small quantity={quantity} onChange={handleChange} />
      )}
    </StyledCartItem>
  );
};

export default CartItem;
