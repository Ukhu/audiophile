import React, { useContext } from "react";
import styled from "styled-components";

import { CartContext } from "../contexts/CartContext";
import { getCartTotal } from "../utils/helpers";

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

const CartItems = styled.div`
  max-height: 20rem;
  overflow: scroll;
`;

const SHIPPING_FEE = 50;

const CheckoutSummary = () => {
  const { cartItems } = useContext(CartContext);

  const total = getCartTotal(cartItems);
  const vat = total * 0.2;
  const grandTotal = total + vat + SHIPPING_FEE;

  return (
    <StyledCheckoutSummary>
      <CheckoutSummaryHeader>
        <CheckoutSummaryTitle>Summary</CheckoutSummaryTitle>
      </CheckoutSummaryHeader>
      <CartItems>
        {cartItems.map((item, idx) => (
          <CartItem key={`${item.product.slug}-${idx}`} summary item={item} />
        ))}
      </CartItems>
      <CartSummary>
        <CartTotal>Total</CartTotal>
        <CartPriceTotal>${total.toLocaleString()}</CartPriceTotal>
      </CartSummary>
      <CartSummary>
        <CartTotal>Shipping</CartTotal>
        <CartPriceTotal>$50</CartPriceTotal>
      </CartSummary>
      <CartSummary>
        <CartTotal>VAT (included)</CartTotal>
        <CartPriceTotal>${vat.toLocaleString()}</CartPriceTotal>
      </CartSummary>
      <SummaryGrandTotal>
        <CartTotal>Grand Total</CartTotal>
        <CartPriceTotal>${grandTotal.toLocaleString()}</CartPriceTotal>
      </SummaryGrandTotal>
      <CheckoutSummaryBtn variant="filled" type="submit">
        Continue & Pay
      </CheckoutSummaryBtn>
    </StyledCheckoutSummary>
  );
};

export default CheckoutSummary;
