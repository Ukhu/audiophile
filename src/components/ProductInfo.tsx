import React from "react";
import styled from "styled-components";
import { IProductInfoProps } from "../types/product";

const StyledProductInfo = styled.section`
  display: flex;
  flex-direction: column;
  margin: 0 1.5rem;
  margin-bottom: 7.5rem;

  ${({ theme }) => theme.screens.tablet} {
    margin: 0 2.5rem;
    margin-bottom: 7.5rem;
  }

  ${({ theme }) => theme.screens.laptop} {
    flex-direction: row;
    justify-content: space-between;
    margin: 0 10.3125rem;
    margin-bottom: 10rem;
  }
`;

const ProductInfoHeading = styled.h3`
  font: ${({ theme }) => theme.typography.h3};
  letter-spacing: 1.15px;
  font-weight: bold;
  text-transform: uppercase;
  margin: 0;
  margin-bottom: 2rem;
`;

const ProductInfoBody = styled.p<{ opaque?: boolean }>`
  font: ${({ theme }) => theme.typography.body};
  opacity: ${({ opaque }) => (opaque ? "1" : "0.5")};
  margin: 0;

  ${ProductInfoHeading} + &:first-of-type {
    margin-bottom: 1rem;
  }
`;

const ProductFeatures = styled.article`
  margin-bottom: 7.5rem;

  ${({ theme }) => theme.screens.tablet} {
    width: 39.6875rem;
  }

  ${({ theme }) => theme.screens.laptop} {
    margin-bottom: 0;
  }
`;

const ProductParts = styled.div`
  width: 100%;

  ${({ theme }) => theme.screens.tablet} {
    display: flex;
    justify-content: space-between;
  }

  ${({ theme }) => theme.screens.laptop} {
    display: block;
    width: 21.875rem;
  }
`;

const ProductPartsList = styled.ul`
  list-style: none;
  width: 21.875rem;
  margin: 0;
  padding: 0;

  ${({ theme }) => theme.screens.laptop} {
    width: 100%;
  }
`;

const ProductPartsItem = styled.li`
  margin-bottom: 0.5rem;

  div {
    display: flex;
    align-items: center;
  }
`;

const ProductPartsQuantity = styled.span`
  font: ${({ theme }) => theme.typography.body};
  color: ${({ theme }) => theme.colors.brand.peru};
  font-weight: 700;
  margin-right: 1.3125rem;
`;

const ProductInfo = ({ features, includes }: IProductInfoProps) => {
  return (
    <StyledProductInfo>
      <ProductFeatures>
        <ProductInfoHeading>Features</ProductInfoHeading>
        {features &&
          features
            .split("\\n\\n")
            .map((body) => <ProductInfoBody>{body}</ProductInfoBody>)}
      </ProductFeatures>
      <ProductParts>
        <ProductInfoHeading>In the box</ProductInfoHeading>
        <ProductPartsList>
          {includes &&
            includes.map((part) => (
              <ProductPartsItem>
                <ProductInfoBody opaque>
                  <ProductPartsQuantity>{part.quantity}x</ProductPartsQuantity>
                  <ProductInfoBody as="span">{part.item}</ProductInfoBody>
                </ProductInfoBody>
              </ProductPartsItem>
            ))}
        </ProductPartsList>
      </ProductParts>
    </StyledProductInfo>
  );
};

export default ProductInfo;
