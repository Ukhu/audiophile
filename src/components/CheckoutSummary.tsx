import React, { useContext } from "react";
import styled from "styled-components";

import { CartContext } from "../contexts/CartContext";

import { StyledButton } from "./Button";
import CartItem from "./CartItem";

const StyledCheckoutSummary = styled.div`
  height: fit-content;
  background: ${({ theme }) => theme.colors.neutral.white};
  padding: 1.5rem;
  border-radius: 8px;

  ${({ theme }) => theme.screens.laptop} {
    width: 21.825rem;
    padding: 2rem;
  }
`;

const CheckoutSummaryHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`;

const CheckoutSummaryTitle = styled.span`
  font: ${({ theme }) => theme.typography.h6};
  letter-spacing: 1.3px;
  font-weight: bold;
  text-transform: uppercase;
`;

const CartPriceTotal = styled(CheckoutSummaryTitle)`
  letter-spacing: 0;
`;

const CartSummary = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
`;

const SummaryGrandTotal = styled(CartSummary)`
  margin-top: 1.5rem;
  margin-bottom: 2rem;

  & > ${CartPriceTotal} {
    color: ${({ theme }) => theme.colors.brand.peru};
  }
`;

const CartTotal = styled.span`
  font: ${({ theme }) => theme.typography.body};
  color: ${({ theme }) => theme.colors.neutral.black};
  opacity: 0.5;
  text-transform: uppercase;
`;

const CheckoutSummaryBtn = styled(StyledButton)`
  width: 100%;
`;

const CheckoutSummary = () => {
  const { cartItems } = useContext(CartContext);
  return (
    <StyledCheckoutSummary>
      <CheckoutSummaryHeader>
        <CheckoutSummaryTitle>Summary</CheckoutSummaryTitle>
      </CheckoutSummaryHeader>
      <div>
        {cartItems.map((item) => (
          <CartItem key={item.product.slug} summary item={item} />
        ))}
      </div>
      <CartSummary>
        <CartTotal>Total</CartTotal>
        <CartPriceTotal>$5,396</CartPriceTotal>
      </CartSummary>
      <CartSummary>
        <CartTotal>Shipping</CartTotal>
        <CartPriceTotal>$50</CartPriceTotal>
      </CartSummary>
      <CartSummary>
        <CartTotal>VAT (included)</CartTotal>
        <CartPriceTotal>$1,079</CartPriceTotal>
      </CartSummary>
      <SummaryGrandTotal>
        <CartTotal>Grand Total</CartTotal>
        <CartPriceTotal>$5,446</CartPriceTotal>
      </SummaryGrandTotal>
      <CheckoutSummaryBtn variant="filled" type="submit">
        Continue & Pay
      </CheckoutSummaryBtn>
    </StyledCheckoutSummary>
  );
};

export default CheckoutSummary;
