import React from "react";
import styled, { css } from "styled-components";
import { useField } from "formik";

import { ITextInputProps } from "../types/common";

const StyledTextInput = styled.div<{ full?: boolean }>`
  margin-bottom: 1.5rem;
  width: 100%;

  ${({ theme }) => theme.screens.tablet} {
    width: 19.3125rem;

    ${({ full }) => full && `width: 100%;`}
  }
`;

const Input = styled.input<{ full?: boolean; error: boolean }>`
  font: ${({ theme }) => theme.typography.body};
  font-weight: 700;
  height: 3.5rem;
  width: 100%;
  padding: 0 1.5rem;
  border-radius: 8px;
  border: 1px solid #cfcfcf;
  outline: none;

  ${({ theme }) => theme.screens.tablet} {
    width: 19.3125rem;

    ${({ full }) => full && `width: 100%;`}
  }

  &:active,
  &:hover,
  &:focus {
    border-color: ${({ theme }) => theme.colors.brand.peru};
    color: ${({ theme }) => theme.colors.neutral.black};
  }

  ${({ error }) =>
    error &&
    css`
      border: 2px solid #cd2c2c;
    `}
`;

const InputHeading = styled.div<{ error: boolean }>`
  font: ${({ theme }) => theme.typography.body};
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5625rem;

  ${({ error }) => error && "color: #cd2c2c;"}
`;

const InputLabel = styled.label`
  font-weight: 700;
`;

const InputError = styled.div`
  color: #cd2c2c;
`;

const TextInput = ({ label, full, ...props }: ITextInputProps) => {
  const [field, meta] = useField(props);

  const errorOccurred = Boolean(meta.touched && meta.error);

  return (
    <StyledTextInput full={full}>
      <InputHeading error={errorOccurred}>
        <InputLabel htmlFor={props.name}>{label}</InputLabel>
        {errorOccurred && <InputError>{meta.error}</InputError>}
      </InputHeading>
      <Input {...field} {...props} full={full} error={errorOccurred} />
    </StyledTextInput>
  );
};

export default TextInput;
