import React from "react";
import styled from "styled-components";

import Button from "./Button";

const StyledProductCard = styled.article`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 10.3125rem;
  margin-bottom: 10rem;
  height: 35rem;

  &:nth-of-type(3) {
    margin-bottom: 0;
  }

  &:nth-of-type(2n) {
    flex-direction: row-reverse;
  }
`;

const ProductCardContent = styled.section`
  width: 27.8125rem;
`;

const ProductName = styled.h2`
  font: ${({ theme }) => theme.typography.h2};
  letter-spacing: 1.5px;
  font-weight: 700;
  text-transform: uppercase;
  margin: 0;
  margin-bottom: 2rem;
`;

const ProductDescription = styled.p`
  font: ${({ theme }) => theme.typography.body};
  margin: 0;
  margin-bottom: 2.5rem;
  opacity: 0.5;
`;

const ProductImage = styled.img`
  width: 33.75rem;
  border-radius: 8px;
  height: 35rem;
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
}

interface IProductCardProps {
  product: IProduct;
}

const ProductCard = ({ product }: IProductCardProps) => {
  const { name, descripton, imageUrl } = product;
  return (
    <StyledProductCard>
      <ProductImage src={imageUrl} alt="Product" />

      <ProductCardContent>
        {product.new && <NewProductIndicator>New Product</NewProductIndicator>}
        <ProductName>{name}</ProductName>
        <ProductDescription>{descripton}</ProductDescription>
        <Button text="See Product" variant="filled" />
      </ProductCardContent>
    </StyledProductCard>
  );
};

export default ProductCard;
