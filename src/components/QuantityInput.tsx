import React from "react";
import styled from "styled-components";

const ProductQty = styled.div`
  background-color: ${({ theme }) => theme.colors.brand.white};
  display: flex;
  align-items: center;
  width: 7.5rem;
  height: 3rem;
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
`;

const QuantityInput = () => {
  return (
    <ProductQty>
      <ProductControl>-</ProductControl>
      <ProductInput type="text" value={1} />
      <ProductControl>+</ProductControl>
    </ProductQty>
  );
};

export default QuantityInput;
