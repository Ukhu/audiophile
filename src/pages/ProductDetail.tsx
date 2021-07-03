import React from "react";
import styled from "styled-components";

import MarkOneImg from "../assets/img/image-xx99-mark-one-headphones.jpg";
import XXFiveNineImg from "../assets/img/image-xx59-headphones.jpg";
import ZXNineImg from "../assets/img/image-zx9-speaker.jpg";

import { MOCK_SINGLE_PRODUCT } from "../utils/mockData";

import Header from "../components/Header";
import ProductCard from "../components/ProductCard";
import CategoryGroup from "../components/CategoryGroup";
import BrandSummary from "../components/BrandSummary";
import Footer from "../components/Footer";
import ProductInfo from "../components/ProductInfo";
import ProductGallery from "../components/ProductGallery";
import SimilarProduct from "../components/SimilarProduct";
import Button from "../components/Button";

const SimilarProductsGroup = styled.section`
  margin: 0 1.5rem;
  margin-bottom: 7.5rem;

  & > div {
    display: flex;
    flex-direction: column;
  }

  ${({ theme }) => theme.screens.tablet} {
    margin: 0 2.5rem;
    margin-bottom: 16rem;

    & > div {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }
  }

  ${({ theme }) => theme.screens.laptop} {
    margin: 0 10.3125rem;
    margin-bottom: 16rem;
  }
`;

const SimilarProductsGroupTitle = styled.h3`
  font: ${({ theme }) => theme.typography.h3};
  letter-spacing: 1.15px;
  font-weight: bold;
  text-transform: uppercase;
  margin-bottom: 4rem;
  text-align: center;
`;

const ProductDetail = () => {
  return (
    <div>
      <Header variant="filled" />
      <Button.Back />
      <ProductCard product={MOCK_SINGLE_PRODUCT} />
      <ProductInfo />
      <ProductGallery />
      <SimilarProductsGroup>
        <SimilarProductsGroupTitle>You may also like</SimilarProductsGroupTitle>
        <div>
          <SimilarProduct name="X99 Mark I" img={MarkOneImg} />
          <SimilarProduct name="XX59" img={XXFiveNineImg} />
          <SimilarProduct name="ZX9 Speaker" img={ZXNineImg} />
        </div>
      </SimilarProductsGroup>
      <CategoryGroup />
      <BrandSummary />
      <Footer />
    </div>
  );
};

export default ProductDetail;
