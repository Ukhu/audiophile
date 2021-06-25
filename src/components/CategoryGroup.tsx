import React from "react";
import styled from "styled-components";

import Category from "./Category";

const StyledCategoryGroup = styled.section`
  display: flex;
  justify-content: space-between;
  margin: 12.5rem 10.3125rem;
  margin-bottom: 10.5rem;
`;

const CategoryGroup = () => {
  return (
    <StyledCategoryGroup>
      <Category name="Headphones" />
      <Category name="Speakers" />
      <Category name="Earphones" />
    </StyledCategoryGroup>
  );
};

export default CategoryGroup;
