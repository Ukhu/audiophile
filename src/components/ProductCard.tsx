import React, { useState, useContext } from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

import { IProductCardProps } from "../types/product";
import { CartContext } from "../contexts/CartContext";

import Button from "./Button";
import QuantityInput from "./QuantityInput";

const StyledProductCard = styled.article<{ cartBtn?: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 1.5rem;
  margin-bottom: 7.5rem;

  &:nth-of-type(3) {
    margin-bottom: 0;
  }

  ${({ theme }) => theme.screens.tablet} {
    margin: 0 2.5rem;
    margin-bottom: 7.5rem;
  }

  ${({ cartBtn, theme }) =>
    cartBtn &&
    css`
      ${theme.screens.tablet} {
        flex-direction: row;
        justify-content: space-between;
        margin-bottom: 7.5rem;
        height: 30rem;
      }
    `}

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

const ProductCardContent = styled.section<{ cartBtn?: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  ${({ cartBtn }) => cartBtn && "align-items: flex-start;"}

  ${({ theme }) => theme.screens.tablet} {
    width: 35.75rem;
  }

  ${({ cartBtn, theme }) =>
    cartBtn &&
    css`
      ${theme.screens.tablet} {
        width: 21.25rem;
      }
    `}

  ${({ theme }) => theme.screens.laptop} {
    display: block;
    width: 27.8125rem;
  }
`;

const ProductName = styled.h2<{ cartBtn?: boolean }>`
  font: ${({ theme }) => theme.typography.h2};
  letter-spacing: 1.5px;
  font-weight: 700;
  text-transform: uppercase;
  margin: 0;
  margin-bottom: 2rem;
  text-align: center;

  ${({ cartBtn }) => cartBtn && "text-align: left;"}

  ${({ theme }) => theme.screens.laptop} {
    text-align: left;
  }
`;

const ProductDescription = styled.p<{ cartBtn?: boolean }>`
  font: ${({ theme }) => theme.typography.body};
  margin: 0;
  margin-bottom: 1.5rem;
  opacity: 0.5;
  text-align: center;

  ${({ cartBtn }) => cartBtn && "text-align: left;"}

  ${({ theme }) => theme.screens.laptop} {
    margin-bottom: 2.5rem;
    text-align: left;
  }
`;

const ProductButtons = styled.div<{ cartBtn?: boolean }>`
  display: flex;
  justify-content: center;
  width: 18.5rem;

  ${({ theme }) => theme.screens.laptop} {
    justify-content: flex-start;
    ${({ cartBtn }) => cartBtn && "justify-content: space-between;"}
  }

  ${({ cartBtn }) => cartBtn && "justify-content: space-between;"}
`;

const ProductImageHolder = styled.div<{ cartBtn?: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  border-radius: 8px;
  margin-bottom: 2rem;
  height: 22rem;
  background-color: #f1f1f1;

  ${({ cartBtn, theme }) =>
    cartBtn &&
    css`
      ${theme.screens.tablet} {
        width: 17.5625rem;
        height: 100%;
        margin-right: 
        margin-bottom: 0;
      }
    `}

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
  margin: 0;
  margin-bottom: 2rem;

  ${({ theme }) => theme.screens.laptop} {
    margin-bottom: 2.9375rem;
  }
`;

const NewProductIndicator = styled.div`
  font: ${({ theme }) => theme.typography.overline};
  color: ${({ theme }) => theme.colors.brand.peru};
  letter-spacing: 10px;
  text-transform: uppercase;
  margin-bottom: 1rem;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const ProductCard = ({ product, cartBtn }: IProductCardProps) => {
  const { addToCart } = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);

  const handleChange = (quantity: number) => {
    setQuantity(quantity);
  };

  const { name, description, image, price } = product;
  return (
    <StyledProductCard cartBtn={cartBtn}>
      <ProductImageHolder cartBtn={cartBtn}>
        <ProductImage src={image.desktop} alt="Product" />
      </ProductImageHolder>

      <ProductCardContent cartBtn={cartBtn}>
        {product.new && <NewProductIndicator>New Product</NewProductIndicator>}
        <ProductName cartBtn={cartBtn}>{name}</ProductName>
        <ProductDescription cartBtn={cartBtn}>{description}</ProductDescription>
        {cartBtn && <ProductPrice>${price.toLocaleString()}</ProductPrice>}
        <ProductButtons cartBtn={cartBtn}>
          {cartBtn && (
            <QuantityInput quantity={quantity} onChange={handleChange} />
          )}
          {cartBtn ? (
            <Button
              text="Add to Cart"
              variant="filled"
              onClick={() => addToCart({ product, quantity })}
            />
          ) : (
            <StyledLink
              to={`/product/${name.split(" ").join("-").toLowerCase()}`}
            >
              <Button variant="filled" text="See Product" />
            </StyledLink>
          )}
        </ProductButtons>
      </ProductCardContent>
    </StyledProductCard>
  );
};

export default ProductCard;
