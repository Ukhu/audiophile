import React from "react";
import styled from "styled-components";

import Button from "./Button";
import QuantityInput from "./QuantityInput";

const StyledProductCard = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 1.5rem;
  margin-bottom: 7.5rem;

  &:nth-of-type(3) {
    margin-bottom: 0;
  }

  ${({ theme }) => theme.screens.laptop} {
    flex-direction: row;
    justify-content: space-between;
    margin: 0 10.3125rem;
    margin-bottom: 10rem;
    height: 35rem;

    &:nth-of-type(2n) {
      flex-direction: row-reverse;
    }
  }
`;

const ProductCardContent = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  ${({ theme }) => theme.screens.tablet} {
    width: 35.75rem;
  }

  ${({ theme }) => theme.screens.laptop} {
    display: block;
    width: 27.8125rem;
  }
`;

const ProductName = styled.h2`
  font: ${({ theme }) => theme.typography.h2};
  letter-spacing: 1.5px;
  font-weight: 700;
  text-transform: uppercase;
  margin: 0;
  margin-bottom: 2rem;
  text-align: center;

  ${({ theme }) => theme.screens.laptop} {
    text-align: left;
  }
`;

const ProductDescription = styled.p`
  font: ${({ theme }) => theme.typography.body};
  margin: 0;
  margin-bottom: 2.5rem;
  opacity: 0.5;
  text-align: center;

  ${({ theme }) => theme.screens.laptop} {
    text-align: left;
  }
`;

const ProductButtons = styled.div`
  display: flex;
  justify-content: center;

  ${({ theme }) => theme.screens.laptop} {
    justify-content: space-between;
    width: 18.5rem;
  }
`;

const ProductImageHolder = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  border-radius: 8px;
  margin-bottom: 2rem;
  height: 22rem;
  background-color: #f1f1f1;

  ${({ theme }) => theme.screens.laptop} {
    margin-bottom: 0;
    width: 33.75rem;
    height: 35rem;
  }
`;

const ProductImage = styled.img`
  width: 220px;
`;

const ProductPrice = styled.p`
  font: ${({ theme }) => theme.typography.h6};
  letter-spacing: 1.3px;
  font-weight: 700;
  margin-bottom: 2.9375rem;
`;

const NewProductIndicator = styled.div`
  font: ${({ theme }) => theme.typography.overline};
  color: ${({ theme }) => theme.colors.brand.peru};
  letter-spacing: 10px;
  text-transform: uppercase;
  margin-bottom: 1rem;
`;

interface IProduct {
  name: string;
  descripton: string;
  new: boolean;
  imageUrl: string;
  price?: number;
}

interface IProductCardProps {
  product: IProduct;
}

const ProductCard = ({ product }: IProductCardProps) => {
  const { name, descripton, imageUrl, price } = product;
  return (
    <StyledProductCard>
      <ProductImageHolder>
        <ProductImage src={imageUrl} alt="Product" />
      </ProductImageHolder>

      <ProductCardContent>
        {product.new && <NewProductIndicator>New Product</NewProductIndicator>}
        <ProductName>{name}</ProductName>
        <ProductDescription>{descripton}</ProductDescription>
        {price && <ProductPrice>${price}</ProductPrice>}
        <ProductButtons>
          {price && <QuantityInput />}
          <Button text="See Product" variant="filled" />
        </ProductButtons>
      </ProductCardContent>
    </StyledProductCard>
  );
};

export default ProductCard;
