import React from "react";
import styled from "styled-components";

import Button from "./Button";

const StyledSimilarProduct = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 21.875rem;
`;

const ProductImage = styled.img`
  width: 21.875rem;
  height: 19.875rem;
  border-radius: 8px;
  margin-bottom: 2.5rem;
`;

const ProductName = styled.h4`
  font: ${({ theme }) => theme.typography.h5};
  letter-spacing: 1.7px;
  font-weight: 700;
  text-transform: uppercase;
  margin-bottom: 2rem;
`;

interface ISimilarProductProps {
  name: string;
  img: string;
}

const SimilarProduct = ({ name, img }: ISimilarProductProps) => {
  return (
    <StyledSimilarProduct>
      <ProductImage src={img} />
      <ProductName>{name}</ProductName>
      <Button text="See product" variant="filled" />
    </StyledSimilarProduct>
  );
};

export default SimilarProduct;
