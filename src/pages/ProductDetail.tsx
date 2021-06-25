import React from "react";
import styled from "styled-components";

import { MOCK_PRODUCTS } from "../utils/mockData";

import Header from "../components/Header";
import ProductCard from "../components/ProductCard";
import CategoryGroup from "../components/CategoryGroup";
import BrandSummary from "../components/BrandSummary";
import Footer from "../components/Footer";
import ProductInfo from "../components/ProductInfo";
import ProductGallery from "../components/ProductGallery";

const StyledButton = styled.button`
  text-align: left;
  font: ${({ theme }) => theme.typography.body};
  color: ${({ theme }) => theme.colors.neutral.black};
  opacity: 0.5;
  margin: 0 10.3125rem;
  margin-top: 4.9375rem;
  margin-bottom: 3.5rem;
  border: none;
  background: transparent;
`;

const BackBtn = () => {
  return <StyledButton>Go Back</StyledButton>;
};

const ProductDetail = () => {
  return (
    <div>
      <Header variant="filled" />
      <BackBtn />
      <ProductCard product={MOCK_PRODUCTS[0]} />
      <ProductInfo />
      <ProductGallery />
      <CategoryGroup />
      <BrandSummary />
      <Footer />
    </div>
  );
};

export default ProductDetail;
