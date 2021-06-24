import React from "react";
import styled from "styled-components";

import Header from "../components/Header";
import Hero from "../components/Hero";
import Category from "../components/Category";
import ProductBanners from "../components/ProductBanners";
import BrandSummary from "../components/BrandSummary";

const CategoryGroup = styled.section`
  display: flex;
  justify-content: space-between;
  margin: 12.5rem 10.3125rem;
  margin-bottom: 10.5rem;
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
      <ProductBanners />
      <BrandSummary />
    </div>
  );
};

export default Landing;
