import React from "react";
import styled from "styled-components";

const StyledTextInput = styled.div<{ full?: boolean }>`
  margin-bottom: 1.5rem;
  width: 19.3125rem;

  ${({ full }) => full && `width: 100%;`}
`;

const Input = styled.input<{ full?: boolean }>`
  font: ${({ theme }) => theme.typography.body};
  font-weight: 700;
  height: 3.5rem;
  width: 19.3125rem;
  padding: 0 1.5rem;
  border-radius: 8px;
  border: 1px solid #cfcfcf;
  color: rgba(0, 0, 0, 0.4);

  ${({ full }) => full && `width: 100%;`}

  &:active,
  &:hover {
    border-color: ${({ theme }) => theme.colors.brand.peru};
    color: ${({ theme }) => theme.colors.neutral.black};
  }
`;

const InputHeading = styled.div`
  font: ${({ theme }) => theme.typography.body};
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5625rem;
`;

const InputLabel = styled.label`
  font-weight: 700;
`;

interface ITextInputProps {
  name: string;
  placeholder: string;
  full?: boolean;
}

const TextInput = ({ name, placeholder, full }: ITextInputProps) => {
  return (
    <StyledTextInput full={full}>
      <InputHeading>
        <InputLabel htmlFor={name}>{name}</InputLabel>
        {/* <div>Wrong format</div> */}
      </InputHeading>
      <Input id={name} type="text" placeholder={placeholder} full={full} />
    </StyledTextInput>
  );
};

export default TextInput;
