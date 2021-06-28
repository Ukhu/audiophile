import React from "react";
import styled from "styled-components";

import { StyledButton } from "./Button";
import CartItem from "./CartItem";

const StyledModal = styled.div`
  position: fixed;
  margin-top: -6rem;
  height: 100vh;
  width: 100%;
  background: #00000080;
  z-index: 1000;
`;

const StyledCart = styled.div`
  margin: 0 10.3125rem;
  margin-left: auto;
  margin-top: 8rem;
  padding: 2rem;
  width: 23.5625rem;
  background: #ffffff;
  border-radius: 8px;
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
  cursor: none;
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

const Cart = () => {
  return (
    <StyledModal>
      <StyledCart>
        <CartHeader>
          <CartTitle>Cart (3)</CartTitle>
          <CartClearBtn>Remove all</CartClearBtn>
        </CartHeader>
        <div>
          <CartItem />
          <CartItem />
          <CartItem />
        </div>
        <CartSummary>
          <CartTotal>Total</CartTotal>
          <CartPriceTotal>$5,396</CartPriceTotal>
        </CartSummary>
        <CartBtn variant="filled">Checkout</CartBtn>
      </StyledCart>
    </StyledModal>
  );
};

export default Cart;
