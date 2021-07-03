import React from "react";
import styled, { css } from "styled-components";
import { IoCartOutline, IoMenu } from "react-icons/io5";

import AudioPhileLogo from "../assets/svg/audiophile-logo.svg";

import Cart from "./Cart";
import MenuDropdown from "./MenuDropdown";

const StyledHeader = styled.header<{ variant: string }>`
  height: 5.5625rem;
  display: flex;
  align-items: center;
  background-color: ${({ variant, theme }) =>
    variant === "filled" ? theme.colors.neutral.black : "transparent"};

  ${({ theme }) => theme.screens.tablet} {
    height: 6rem;
  }
`;

const Container = styled.div`
  height: 5.5625rem;
  margin: 0 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  border-bottom: 1px solid #97979780;

  ${({ theme }) => theme.screens.tablet} {
    height: 6rem;
    margin: 0 2.5rem;
  }

  ${({ theme }) => theme.screens.laptop} {
    height: 6rem;
    margin: 0 10.3125rem;
  }
`;

const HeaderNav = styled.nav`
  display: none;

  ${({ theme }) => theme.screens.tablet} {
    display: inline-block;
  }
`;

const NavList = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
`;

const NavItem = styled.li`
  font: ${({ theme }) => theme.typography.subTitle};
  color: ${({ theme }) => theme.colors.neutral.white};
  font-weight: bold;
  letter-spacing: 1px;
  text-transform: uppercase;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.brand.peru};
  }

  &:not(:last-child) {
    margin-right: 2.125rem;
  }
`;

const Icon = styled.div<{ menu?: boolean }>`
  font: ${({ theme }) => theme.typography.h5};
  color: ${({ theme }) => theme.colors.neutral.white};
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.brand.peru};
  }

  ${({ menu, theme }) =>
    menu &&
    css`
      ${theme.screens.tablet} {
        display: none;
      }
    `}
`;

interface IHeaderProps {
  variant?: "filled" | "transparent";
}

const Header = ({ variant = "transparent" }: IHeaderProps) => {
  const [showCart, setShowCart] = React.useState(false);
  const [openMenu, setOpenMenu] = React.useState(false);

  return (
    <div>
      {showCart && <Cart hideCart={() => setShowCart(false)} />}
      {openMenu && <MenuDropdown hideMenu={() => setOpenMenu(false)} />}

      <StyledHeader variant={variant}>
        <Container>
          <Icon menu onClick={() => setOpenMenu(true)}>
            <IoMenu />
          </Icon>

          <img src={AudioPhileLogo} alt="Brand" />

          <HeaderNav>
            <NavList>
              <NavItem>Home</NavItem>
              <NavItem>Headphones</NavItem>
              <NavItem>Speakers</NavItem>
              <NavItem>Earphones</NavItem>
            </NavList>
          </HeaderNav>

          <Icon onClick={() => setShowCart(true)}>
            <IoCartOutline />
          </Icon>
        </Container>
      </StyledHeader>
    </div>
  );
};

export default Header;
