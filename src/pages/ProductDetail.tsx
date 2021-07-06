import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";

import useProduct from "../hooks/useProduct";

import { IProduct, IProductDetailPathParams } from "../types/product";

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
  const { productSlug } = useParams<IProductDetailPathParams>();
  const { product } = useProduct(productSlug);

  return (
    <div>
      <Header variant="filled" />
      <Button.Back />
      {product && <ProductCard product={product as IProduct} addToCart />}

      <ProductInfo features={product?.features} includes={product?.includes} />
      <ProductGallery gallery={product?.gallery} />
      <SimilarProductsGroup>
        <SimilarProductsGroupTitle>You may also like</SimilarProductsGroupTitle>
        <div>
          {product?.others.map((similar) => (
            <SimilarProduct name={similar.name} img={similar.image.desktop} />
          ))}
        </div>
      </SimilarProductsGroup>
      <CategoryGroup />
      <BrandSummary />
      <Footer />
    </div>
  );
};

export default ProductDetail;
