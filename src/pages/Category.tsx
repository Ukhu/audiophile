import React from "react";
import styled from "styled-components";

import { MOCK_PRODUCTS } from "../utils/mockData";

import Header from "../components/Header";
import CategoryGroup from "../components/CategoryGroup";
import BrandSummary from "../components/BrandSummary";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";

const CategoryHead = styled.div`
  height: 12rem;
  margin-top: -6rem;
  background-color: ${({ theme }) => theme.colors.neutral.black};
  margin-bottom: 4rem;

  ${({ theme }) => theme.screens.laptop} {
    height: 21rem;
    margin-bottom: 10rem;
  }
`;

const CategoryName = styled.h1`
  font: ${({ theme }) => theme.typography.h4};
  color: ${({ theme }) => theme.colors.neutral.white};
  letter-spacing: 2px;
  font-weight: bold;
  text-transform: uppercase;
  text-align: center;
  padding-top: 7.5rem;
  margin: 0;

  ${({ theme }) => theme.screens.laptop} {
    font: ${({ theme }) => theme.typography.h2};
    letter-spacing: 1.5px;
    padding-top: 12.125rem;
  }
`;

const CategoryProducts = styled.section`
  margin-bottom: 15rem;
`;

const CategoryPage = () => {
  return (
    <div>
      <Header />
      <CategoryHead>
        <CategoryName>Headphones</CategoryName>
      </CategoryHead>
      <CategoryProducts>
        {MOCK_PRODUCTS.map((product) => (
          <ProductCard key={product.name} product={product} />
        ))}
      </CategoryProducts>
      <CategoryGroup />
      <BrandSummary />
      <Footer />
    </div>
  );
};

export default CategoryPage;
