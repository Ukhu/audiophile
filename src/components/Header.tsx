import React from "react";
import styled, { css } from "styled-components";
import { IoCartOutline, IoMenu } from "react-icons/io5";
import { Link } from "react-router-dom";

import AudioPhileLogo from "../assets/svg/audiophile-logo.svg";

import { IHeaderProps } from "../types/common";

import Cart from "./Cart";
import MenuDropdown from "./MenuDropdown";
import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

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

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.neutral.white};

    &:hover {
      color: ${({ theme }) => theme.colors.brand.peru};
    }
  }

  &:not(:last-child) {
    margin-right: 2.125rem;
  }
`;

const Icon = styled.div<{ menu?: boolean }>`
  position: relative;
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

const CartItemCount = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  display: grid;
  place-items: center;
  position: absolute;
  font: ${({ theme }) => theme.typography.body};
  background-color: ${({ theme }) => theme.colors.neutral.white};
  color: ${({ theme }) => theme.colors.neutral.black};
  font-weight: bold;
  border-radius: 50%;
  top: -10px;
  right: -15px;
`;

const Header = ({ variant = "transparent" }: IHeaderProps) => {
  const { cartItems } = useContext(CartContext);

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
              <NavItem>
                <Link to="/">Home</Link>
              </NavItem>
              <NavItem>
                <Link to="/category/headphones">Headphones</Link>
              </NavItem>
              <NavItem>
                <Link to="/category/speakers">Speakers</Link>
              </NavItem>
              <NavItem>
                <Link to="/category/earphones">Earphones</Link>
              </NavItem>
            </NavList>
          </HeaderNav>

          <Icon onClick={() => setShowCart(true)}>
            {cartItems.length > 0 && (
              <CartItemCount>{cartItems.length}</CartItemCount>
            )}
            <IoCartOutline />
          </Icon>
        </Container>
      </StyledHeader>
    </div>
  );
};

export default Header;
