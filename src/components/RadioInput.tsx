import React from "react";
import styled from "styled-components";
import { useField } from "formik";

import { IRadioInputProps } from "../types/common";

const StyledRadioInput = styled.div`
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

const RadioBtn = styled.input`
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

const RadioInputLabel = styled.label`
  font: ${({ theme }) => theme.typography.body};
  font-weight: 700;
`;

const RadioInput = ({ label, ...props }: IRadioInputProps) => {
  const [field] = useField(props);
  return (
    <StyledRadioInput>
      <RadioBtn
        type="radio"
        {...field}
        {...props}
        checked={field.value === props.value}
      />
      <RadioInputLabel htmlFor={props.id}>{label}</RadioInputLabel>
    </StyledRadioInput>
  );
};

export default RadioInput;
