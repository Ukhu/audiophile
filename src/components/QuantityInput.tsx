import React from "react";
import styled, { css } from "styled-components";

import { IQuantityInput } from "../types/common";

const ProductQty = styled.div<{ small?: boolean }>`
  background-color: ${({ theme }) => theme.colors.brand.white};
  display: flex;
  align-items: center;
  width: 7.5rem;
  height: 3rem;

  ${({ small }) =>
    small &&
    css`
      width: 6rem;
      height: 2rem;
    `};
`;

const ProductControl = styled.button`
  font: ${({ theme }) => theme.typography.subTitle};
  letter-spacing: 1px;
  font-weight: bold;
  width: 2.5rem;
  opacity: 0.25;
  border: none;
  background: transparent;
  outline: none;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.brand.peru};
    opacity: 1;
  }
`;

const ProductInput = styled.input`
  width: 2.5rem;
  height: 3rem;
  text-align: center;
  background: transparent;
  border: none;

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &:disabled {
    color: #000000;
  }
`;

const QuantityInput = ({ small, quantity, onChange }: IQuantityInput) => {
  const updateQuantity = (value: number) => {
    if (value > 0) {
      onChange(value);
    }
  };

  return (
    <ProductQty small={small}>
      <ProductControl onClick={() => updateQuantity(quantity - 1)}>
        -
      </ProductControl>
      <ProductInput type="number" value={quantity} disabled />
      <ProductControl onClick={() => updateQuantity(quantity + 1)}>
        +
      </ProductControl>
    </ProductQty>
  );
};

export default QuantityInput;
