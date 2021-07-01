import React from "react";
import styled from "styled-components";
import { IoCheckmarkSharp } from "react-icons/io5";

import { StyledButton } from "./Button";
import Modal from "./Modal";
import CartItem from "./CartItem";

const StyledOrderConfirmation = styled.div`
  margin: 0 auto;
  margin-top: 8rem;
  padding: 3rem;
  width: 33.75rem;
  height: 36.3125rem;
  background: #ffffff;
  border-radius: 8px;
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
  margin-bottom: 2rem;
`;

const OrderConfirmationTitle = styled.h2`
  font: ${({ theme }) => theme.typography.h3};
  letter-spacing: 1.15px;
  font-weight: bold;
  text-transform: uppercase;
  width: 17.75rem;
  margin-bottom: 1.5rem;
`;

const OrderConfirmationMessage = styled.p`
  font: ${({ theme }) => theme.typography.body};
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.colors.neutral.black};
  opacity: 0.5;
`;

const OrderSummary = styled.div`
  background: ${({ theme }) => theme.colors.brand.white};
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
  margin-bottom: 2.875rem;
  height: 8.75rem;
  border-radius: 8px;
`;

const CartItems = styled.div`
  padding: 1.5rem;
  width: 60%;
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
  border-radius: 0 8px 8px 0;
  padding: 0 2rem;

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
`;

const OrderConfirmationBtn = styled(StyledButton)`
  width: 100%;
`;

interface IOrderConfirmationProps {
  hide: () => void;
}

const OrderConfirmation = ({ hide }: IOrderConfirmationProps) => {
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
            <CartItem summary small />
            <ExtraItems>and 2 other item(s)</ExtraItems>
          </CartItems>
          <GrandTotal>
            <div>Grand Total</div>
            <div>$5,466</div>
          </GrandTotal>
        </OrderSummary>
        <OrderConfirmationBtn variant="filled">
          Back to home
        </OrderConfirmationBtn>
      </StyledOrderConfirmation>
    </Modal>
  );
};

export default OrderConfirmation;
