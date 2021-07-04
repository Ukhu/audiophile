import React from "react";
import styled from "styled-components";

import { ICartItem } from "../types/cart";

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

const CartItem = ({ summary, small }: ICartItem) => {
  return (
    <StyledCartItem small={small}>
      <ItemDetail>
        <ItemImage src={MarkOneImg} alt="Cart item" small={small} />
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
