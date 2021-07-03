import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import Button from "./Button";

const StyledSimilarProduct = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 3.5rem;

  ${({ theme }) => theme.screens.tablet} {
    width: 13.9375rem;
    margin-bottom: 0;
  }

  ${({ theme }) => theme.screens.laptop} {
    width: 21.875rem;
  }
`;

const ProductImageWrapper = styled.div`
  width: 100%;
  height: 7.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f1f1f1;
  border-radius: 8px;
  margin-bottom: 2rem;

  ${({ theme }) => theme.screens.tablet} {
    height: 19.875rem;
    margin-bottom: 2.5rem;
  }
`;

const ProductImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const ProductName = styled.h4`
  font: ${({ theme }) => theme.typography.h5};
  letter-spacing: 1.7px;
  font-weight: 700;
  text-transform: uppercase;
  margin: 0;
  margin-bottom: 2rem;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

interface ISimilarProductProps {
  name: string;
  img: string;
}

const SimilarProduct = ({ name, img }: ISimilarProductProps) => {
  return (
    <StyledSimilarProduct>
      <ProductImageWrapper>
        <ProductImage src={img} />
      </ProductImageWrapper>
      <ProductName>{name}</ProductName>
      <StyledLink to={`/product/${name.split(" ").join("-").toLowerCase()}`}>
        <Button variant="filled" text="See Product" />
      </StyledLink>
    </StyledSimilarProduct>
  );
};

export default SimilarProduct;
