import React from "react";
import styled from "styled-components";

import CategoryGroup from "./CategoryGroup";

const StyledMenuDropdown = styled.section`
  position: fixed;
  height: 100%;
  width: 100%;
  background: #00000080;
  z-index: 1000;
  overflow: scroll;
`;

const CategoryGroupWrap = styled.div`
  background: #ffffff;
  padding-top: 1rem;
  margin-top: 5.5625rem;
`;

interface IMenuDropdownProps {
  hideMenu: () => void;
}

const MenuDropdown = ({ hideMenu }: IMenuDropdownProps) => {
  return (
    <StyledMenuDropdown onClick={hideMenu}>
      <CategoryGroupWrap>
        <CategoryGroup />
      </CategoryGroupWrap>
    </StyledMenuDropdown>
  );
};

export default MenuDropdown;
