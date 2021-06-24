import React from "react";
import styled from "styled-components";
import { IoCartOutline } from "react-icons/io5";

import AudioPhileLogo from "../assets/svg/audiophile-logo.svg";

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  background-color: transparent;
  height: 6rem;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 6rem;
  margin: 0 10.3125rem;
  border-bottom: 1px solid #97979780;
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

const Icon = styled.div`
  font: ${({ theme }) => theme.typography.h5};
  color: ${({ theme }) => theme.colors.neutral.white};
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.brand.peru};
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <img src={AudioPhileLogo} alt="Brand" />

        <nav>
          <NavList>
            <NavItem>Home</NavItem>
            <NavItem>Headphones</NavItem>
            <NavItem>Speakers</NavItem>
            <NavItem>Earphones</NavItem>
          </NavList>
        </nav>

        <Icon>
          <IoCartOutline />
        </Icon>
      </Container>
    </StyledHeader>
  );
};

export default Header;
