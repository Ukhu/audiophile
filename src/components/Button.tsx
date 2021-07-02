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

const StyledBackBtn = styled.button`
  text-align: left;
  font: ${({ theme }) => theme.typography.body};
  color: ${({ theme }) => theme.colors.neutral.black};
  opacity: 0.5;
  margin: 0 1.5rem;
  margin-top: 1rem;
  margin-bottom: 1.5rem;
  border: none;
  background: transparent;
  cursor: pointer;

  ${({ theme }) => theme.screens.tablet} {
    margin: 0 2.5rem;
    margin-top: 2rem;
    margin-bottom: 1.5rem;
  }

  ${({ theme }) => theme.screens.laptop} {
    margin: 0 10.3125rem;
    margin-top: 4.9375rem;
    margin-bottom: 3.5rem;
  }
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

Button.Back = () => {
  return <StyledBackBtn>Go Back</StyledBackBtn>;
};

export default Button;
