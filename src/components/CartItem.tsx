import React from "react";
import styled from "styled-components";

import MarkOneImg from "../assets/img/image-xx99-mark-one-headphones.jpg";

import QuantityInput from "./QuantityInput";

const StyledCartItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
`;

const ItemDetail = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ItemImage = styled.img`
  width: 4rem;
  height: 4rem;
  margin-right: 1rem;
  border-radius: 8px;
  object-fit: cover;
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

interface ICartItem {
  summary?: boolean;
}

const CartItem = ({ summary }: ICartItem) => {
  return (
    <StyledCartItem>
      <ItemDetail>
        <ItemImage src={MarkOneImg} alt="Cart item" />
        <div>
          <ItemText>XX99 MK II</ItemText>
          <ItemText>$ 2,999</ItemText>
        </div>
      </ItemDetail>
      {summary ? <ItemQuantity>1x</ItemQuantity> : <QuantityInput small />}
    </StyledCartItem>
  );
};

export default CartItem;
