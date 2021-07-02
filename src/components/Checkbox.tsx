import React from "react";
import styled from "styled-components";

const StyledCheckbox = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 3.5rem;
  margin-bottom: 1rem;
  padding: 0 1rem;
  border-radius: 8px;
  border: 1px solid #cfcfcf;
  color: ${({ theme }) => theme.colors.neutral.black};

  ${({ theme }) => theme.screens.tablet} {
    width: 19.3125rem;
  }

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
  border-radius: 50%;
  outline: none;
  cursor: pointer;

  &:checked::before {
    content: "";
    width: 0.625rem;
    height: 0.625rem;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.brand.peru};
  }
`;

const CheckboxLabel = styled.label`
  font: ${({ theme }) => theme.typography.body};
  font-weight: 700;
`;

interface ICheckBoxProps {
  name: string;
  label: string;
  id: string;
}

const Checkbox = ({ name, label, id }: ICheckBoxProps) => {
  return (
    <StyledCheckbox>
      <CheckInput type="radio" name={name} id={id} />
      <CheckboxLabel htmlFor={id}>{label}</CheckboxLabel>
    </StyledCheckbox>
  );
};

export default Checkbox;
