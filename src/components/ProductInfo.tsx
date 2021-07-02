import React from "react";
import styled from "styled-components";

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

const ProductInfo = () => {
  return (
    <StyledProductInfo>
      <ProductFeatures>
        <ProductInfoHeading>Features</ProductInfoHeading>
        <ProductInfoBody>
          Featuring a genuine leather head strap and premium earcups, these
          headphones deliver superior comfort for those who like to enjoy
          endless listening. It includes intuitive controls designed for any
          situation. Whether you’re taking a business call or just in your own
          personal space, the auto on/off and pause features ensure that you’ll
          never miss a beat.
        </ProductInfoBody>

        <ProductInfoBody>
          The advanced Active Noise Cancellation with built-in equalizer allow
          you to experience your audio world on your terms. It lets you enjoy
          your audio in peace, but quickly interact with your surroundings when
          you need to. Combined with Bluetooth 5. 0 compliant connectivity and
          17 hour battery life, the XX99 Mark II headphones gives you superior
          sound, cutting-edge technology, and a modern design aesthetic.
        </ProductInfoBody>
      </ProductFeatures>
      <ProductParts>
        <ProductInfoHeading>In the box</ProductInfoHeading>
        <ProductPartsList>
          <ProductPartsItem>
            <ProductInfoBody opaque>
              <ProductPartsQuantity>1x</ProductPartsQuantity>
              <ProductInfoBody as="span">Headphone Unit</ProductInfoBody>
            </ProductInfoBody>
          </ProductPartsItem>
          <ProductPartsItem>
            <ProductInfoBody opaque>
              <ProductPartsQuantity>2x</ProductPartsQuantity>
              <ProductInfoBody as="span">Replacement Earcups</ProductInfoBody>
            </ProductInfoBody>
          </ProductPartsItem>
          <ProductPartsItem>
            <ProductInfoBody opaque>
              <ProductPartsQuantity>1x</ProductPartsQuantity>
              <ProductInfoBody as="span">User Manual</ProductInfoBody>
            </ProductInfoBody>
          </ProductPartsItem>
          <ProductPartsItem>
            <ProductInfoBody opaque>
              <ProductPartsQuantity>1x</ProductPartsQuantity>
              <ProductInfoBody as="span">3.5mm 5m Audio Cable</ProductInfoBody>
            </ProductInfoBody>
          </ProductPartsItem>
          <ProductPartsItem>
            <ProductInfoBody opaque>
              <ProductPartsQuantity>1x</ProductPartsQuantity>
              <ProductInfoBody as="span">Travel Bag</ProductInfoBody>
            </ProductInfoBody>
          </ProductPartsItem>
        </ProductPartsList>
      </ProductParts>
    </StyledProductInfo>
  );
};

export default ProductInfo;
