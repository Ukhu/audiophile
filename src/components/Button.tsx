import React from "react";
import styled, { css } from "styled-components";

import ArrowRightIcon from "../assets/svg/icon-arrow-right.svg";

export const StyledButton = styled.button<{ variant: string; color?: string }>`
  width: 10rem;
  height: 3rem;
  font: ${({ theme }) => theme.typography.subTitle};
  letter-spacing: 1px;
  font-weight: bold;
  border: none;
  text-transform: uppercase;
  cursor: pointer;

  ${({ variant, color, theme }) =>
    variant === "filled" &&
    css`
      background-color: ${color ? color : theme.colors.brand.peru};
      color: ${theme.colors.neutral.white};

      &:hover {
        background-color: ${color ? "#4C4C4C" : theme.colors.neutral.tangelo};
      }
    `}

  ${({ variant, theme }) =>
    variant === "outline" &&
    css`
      background-color: transparent;
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
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: transparent;
      color: ${theme.colors.neutral.black};

      &:hover {
        color: ${theme.colors.brand.peru};
      }

      span {
        opacity: 0.5;
        margin-right: 0.8rem;
      }

      &:hover span {
        opacity: 1;
      }
    `}
`;

interface IButtonProps {
  text: string;
  variant: "filled" | "outline" | "ghost";
  color?: string;
}

const Button = ({ text, variant, color }: IButtonProps) => {
  return (
    <StyledButton variant={variant} color={color}>
      <span>{text}</span>
      {variant === "ghost" && <img src={ArrowRightIcon} alt="Right caret" />}
    </StyledButton>
  );
};

export default Button;
