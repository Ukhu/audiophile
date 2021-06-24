import React from "react";
import styled from "styled-components";

import Header from "../components/Header";
import Hero from "../components/Hero";
import Category from "../components/Category";

const CategoryGroup = styled.section`
  display: flex;
  justify-content: space-between;
  margin: 12.5rem 10.3125rem;
`;

const Landing = () => {
  return (
    <div>
      <Header />
      <Hero />
      <CategoryGroup>
        <Category name="Headphones" />
        <Category name="Speakers" />
        <Category name="Earphones" />
      </CategoryGroup>
    </div>
  );
};

export default Landing;
