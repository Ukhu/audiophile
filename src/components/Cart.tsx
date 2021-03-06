import React, { useEffect, useContext } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { ICartProps } from "../types/cart";
import { getCartTotal } from "../utils/helpers";

import { CartContext } from "../contexts/CartContext";

import { StyledButton } from "./Button";
import CartItem from "./CartItem";
import Modal from "./Modal";

const StyledCart = styled.div`
  margin: 0 1.5rem;
  padding: 2rem;
  width: 23.5625rem;
  background: #ffffff;
  border-radius: 8px;

  ${({ theme }) => theme.screens.tablet} {
    width: 23.5625rem;
    margin: 0 10.3125rem;
    margin-left: auto;
    margin-top: 8rem;
  }
`;

const CartHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`;

const CartTitle = styled.span`
  font: ${({ theme }) => theme.typography.h6};
  letter-spacing: 1.3px;
  font-weight: bold;
  text-transform: uppercase;
`;

const CartPriceTotal = styled(CartTitle)`
  letter-spacing: 0;
`;

const CartClearBtn = styled.button`
  font: ${({ theme }) => theme.typography.body};
  border: none;
  background: transparent;
  cursor: pointer;
  text-decoration: underline;
  color: ${({ theme }) => theme.colors.neutral.black};
  opacity: 0.5;
`;

const CartSummary = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
  margin-bottom: 1.5rem;
`;

const CartTotal = styled.span`
  font: ${({ theme }) => theme.typography.body};
  color: ${({ theme }) => theme.colors.neutral.black};
  opacity: 0.5;
  text-transform: uppercase;
`;

const CartBtn = styled(StyledButton)`
  width: 100%;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const CartItems = styled.div`
  max-height: 20rem;
  overflow: scroll;
`;

const Cart = ({ hideCart }: ICartProps) => {
  const { cartItems, removeFromCart } = useContext(CartContext);

  useEffect(() => {
    if (cartItems.length === 0) {
      hideCart();
    }
  }, [cartItems.length, hideCart]);

  return (
    <Modal onClose={hideCart}>
      <StyledCart>
        <CartHeader>
          <CartTitle>Cart (3)</CartTitle>
          {cartItems.length > 0 && (
            <CartClearBtn onClick={() => removeFromCart()}>
              Remove all
            </CartClearBtn>
          )}
        </CartHeader>
        <CartItems>
          {cartItems.map((item, idx) => (
            <CartItem key={`${item.product.slug}-${idx}`} item={item} />
          ))}
        </CartItems>
        {cartItems.length > 0 && (
          <CartSummary>
            <CartTotal>Total</CartTotal>
            <CartPriceTotal>
              ${getCartTotal(cartItems).toLocaleString()}
            </CartPriceTotal>
          </CartSummary>
        )}
        <StyledLink to="/checkout">
          <CartBtn variant="filled">Checkout</CartBtn>
        </StyledLink>
      </StyledCart>
    </Modal>
  );
};

export default Cart;
