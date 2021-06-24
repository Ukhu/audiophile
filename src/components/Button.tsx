import React from "react";
import styled, { css } from "styled-components";

const StyledButton = styled.button<{ variant: string }>`
  width: 10rem;
  height: 3rem;
  font: ${({ theme }) => theme.typography.subTitle};
  letter-spacing: 1px;
  font-weight: bold;
  border: none;
  text-transform: uppercase;
  cursor: pointer;

  ${({ variant, theme }) =>
    variant === "filled" &&
    css`
      background-color: ${theme.colors.brand.peru};
      color: ${theme.colors.neutral.white};

      &:hover {
        background-color: ${theme.colors.neutral.tangelo};
      }
    `}

  ${({ variant, theme }) =>
    variant === "outline" &&
    css`
      background-color: ${theme.colors.neutral.white};
      border: 1px solid ${theme.colors.neutral.black};
      color: ${theme.colors.neutral.black};

      &:hover {
        background-color: ${theme.colors.neutral.black};
        color: ${theme.colors.neutral.white};
      }
    `}

  ${({ variant, theme }) =>
    variant === "ghost" &&
    css`
      background-color: transparent;
      color: ${theme.colors.neutral.black};
      opacity: 0.5;

      &:hover {
        color: ${theme.colors.brand.peru};
      }
    `}
`;

interface IButtonProps {
  text: string;
  variant: "filled" | "outline" | "ghost";
}

const Button = ({ text, variant }: IButtonProps) => {
  return <StyledButton variant={variant}>{text}</StyledButton>;
};

export default Button;
