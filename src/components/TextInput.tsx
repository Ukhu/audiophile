import React from "react";
import styled from "styled-components";

const StyledTextInput = styled.div`
  margin-bottom: 1.5rem;
`;

const Input = styled.input`
  width: 19.3125rem;
  height: 3.5rem;
  border-radius: 8px;
  border: 1px solid #cfcfcf;
  color: rgba(0, 0, 0, 0.4);

  &:active,
  &:hover {
    border-color: ${({ theme }) => theme.colors.brand.peru};
    color: ${({ theme }) => theme.colors.neutral.black};
  }
`;

const InputHeading = styled.div`
  font: ${({ theme }) => theme.typography.body};
  display: flex;
  justify-content: center;
  margin-bottom: 0.5625rem;
`;

const InputLabel = styled.label`
  font-weight: 700;
`;

const TextInput = () => {
  return (
    <StyledTextInput>
      <InputHeading>
        <InputLabel htmlFor="textinput">Name</InputLabel>
        <div>Wrong format</div>
      </InputHeading>
      <Input id="textinput" type="text" />
    </StyledTextInput>
  );
};

export default TextInput;
