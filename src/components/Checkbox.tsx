import React from "react";
import styled from "styled-components";

const StyledCheckbox = styled.div`
  width: 19.3125rem;
  height: 3.5rem;
  border-radius: 8px;
  border: 1px solid #cfcfcf;
  color: ${({ theme }) => theme.colors.neutral.black};

  &:active,
  &:hover {
    border-color: ${({ theme }) => theme.colors.brand.peru};
  }
`;

const CheckInput = styled.input`
  display: flex;
  align-items: center;
  justify-content: center;
  appearance: none;
  height: 20px;
  width: 20px;
  margin-right: 1rem;
  border: 1px solid #cfcfcf;
  padding: 0.3125rem;
  border-radius: 50%;
  outline: none;
  cursor: pointer;

  &:checked::before {
    width: 0.625rem;
    height: 0.625rem;
    background-color: ${({ theme }) => theme.colors.brand.peru};
  }
`;

const CheckboxLabel = styled.label`
  font: ${({ theme }) => theme.typography.body};
  font-weight: 700;
`;

const Checkbox = () => {
  return (
    <StyledCheckbox>
      <CheckInput type="radio" name="cash" id="payment-method" />
      <CheckboxLabel htmlFor="payment-method">Cash on delivery</CheckboxLabel>
    </StyledCheckbox>
  );
};

export default Checkbox;
