import React, { useContext } from "react";
import styled from "styled-components";
import { IoCheckmarkSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

import { IOrderConfirmationProps } from "../types/common";
import { getCartTotal } from "../utils/helpers";

import { CartContext } from "../contexts/CartContext";

import { StyledButton } from "./Button";
import Modal from "./Modal";
import CartItem from "./CartItem";

const StyledOrderConfirmation = styled.div`
  margin: 0 auto;
  // margin-top: 8rem;
  width: 20.4375rem;
  align-self: center;
  justify-self: center;

  padding: 2rem;
  background: #ffffff;
  border-radius: 8px;

  ${({ theme }) => theme.screens.tablet} {
    margin: 0 auto;
    margin-top: 8rem;
    padding: 3rem;
    width: 33.75rem;
    height: 36.3125rem;
  }
`;

const OrderConfirmationMark = styled.div`
  width: 4rem;
  height: 4rem;
  background-color: ${({ theme }) => theme.colors.brand.peru};
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.neutral.white};
  border-radius: 50%;
  font: ${({ theme }) => theme.typography.h3};
  margin-bottom: 1.5rem;

  ${({ theme }) => theme.screens.tablet} {
    margin-bottom: 2rem;
  }
`;

const OrderConfirmationTitle = styled.h2`
  font: ${({ theme }) => theme.typography.h5};
  letter-spacing: 1.15px;
  font-weight: bold;
  text-transform: uppercase;
  margin: 0;
  margin-bottom: 1rem;

  ${({ theme }) => theme.screens.tablet} {
    font: ${({ theme }) => theme.typography.h3};
    letter-spacing: 1.7px;
    width: 17.75rem;
    margin-bottom: 1.5rem;
  }
`;

const OrderConfirmationMessage = styled.p`
  font: ${({ theme }) => theme.typography.body};
  margin: 0;
  margin-bottom: 1.5rem;
  color: ${({ theme }) => theme.colors.neutral.black};
  opacity: 0.5;

  ${({ theme }) => theme.screens.tablet} {
    margin-bottom: 2rem;
  }
`;

const OrderSummary = styled.div`
  background: ${({ theme }) => theme.colors.brand.white};
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
  margin-bottom: 1.5rem;
  border-radius: 8px;

  ${({ theme }) => theme.screens.tablet} {
    flex-direction: row;
    justify-content: space-between;
    height: 8.75rem;
    margin-bottom: 2.875rem;
  }
`;

const CartItems = styled.div`
  padding: 1.5rem;

  ${({ theme }) => theme.screens.tablet} {
    width: 60%;
  }
`;

const ExtraItems = styled.div`
  padding-top: 0.75rem;
  font: ${({ theme }) => theme.typography.subTitle};
  border-top: 2px solid rgba(0, 0, 0, 0.08);
  font-weight: 700;
  color: ${({ theme }) => theme.colors.neutral.black};
  opacity: 0.5;
  text-align: center;
`;

const GrandTotal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${({ theme }) => theme.colors.neutral.black};
  border-radius: 0 0 8px 8px;
  padding: 1.5rem;

  & > div:first-child {
    font: ${({ theme }) => theme.typography.body};
    color: ${({ theme }) => theme.colors.neutral.white};
    opacity: 0.5;
    text-transform: uppercase;
    margin-bottom: 0.5rem;
  }

  & > div:last-child {
    font: ${({ theme }) => theme.typography.h6};
    font-weight: 700;
    color: ${({ theme }) => theme.colors.neutral.white};
  }

  ${({ theme }) => theme.screens.tablet} {
    padding: 0 2rem;
    border-radius: 0 8px 8px 0;
  }
`;

const OrderConfirmationBtn = styled(StyledButton)`
  width: 100%;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const OrderConfirmation = ({ hide }: IOrderConfirmationProps) => {
  const { cartItems, removeFromCart } = useContext(CartContext);

  const remainingItems = cartItems.length - 1;

  return (
    <Modal onClose={hide}>
      <StyledOrderConfirmation>
        <OrderConfirmationMark>
          <IoCheckmarkSharp />
        </OrderConfirmationMark>
        <OrderConfirmationTitle>
          Thank you for your order
        </OrderConfirmationTitle>
        <OrderConfirmationMessage>
          You will receive an email confirmation shortly
        </OrderConfirmationMessage>
        <OrderSummary>
          <CartItems>
            <CartItem summary small item={cartItems[0]} />
            {remainingItems > 0 && (
              <ExtraItems>and {remainingItems} other item(s)</ExtraItems>
            )}
          </CartItems>
          <GrandTotal>
            <div>Grand Total</div>
            <div>${getCartTotal(cartItems).toLocaleString()}</div>
          </GrandTotal>
        </OrderSummary>

        <StyledLink to="/" onClick={() => removeFromCart()}>
          <OrderConfirmationBtn variant="filled">
            Back to home
          </OrderConfirmationBtn>
        </StyledLink>
      </StyledOrderConfirmation>
    </Modal>
  );
};

export default OrderConfirmation;
