import React from "react";
import styled, { css } from "styled-components";

import ProductImg1 from "../assets/img/image-gallery-1.jpg";
import ProductImg2 from "../assets/img/image-gallery-2.jpg";
import ProductImg3 from "../assets/img/image-gallery-3.jpg";

const StyledProductGallery = styled.div`
  display: grid;
  grid-template-rows: 17.5rem 17.5rem;
  grid-template-columns: 27.8125rem 39.6875rem;
  grid-template-areas: ${css`
    "image1 image3"
    "image2 image3"
  `};
  grid-gap: 2rem;
  margin: 0 10.3125rem;
  margin-bottom: 10rem;
`;

const GalleryImage = styled.div<{ name: string }>`
  background-size: cover;
  background-repeat: no-repeat;
  width: 27.8125rem;
  height: 17.5rem;
  border-radius: 8px;

  ${({ name }) =>
    name === "image1" &&
    css`
      background-image: url(${ProductImg1});
      grid-area: image1;
    `}

  ${({ name }) =>
    name === "image2" &&
    css`
      background-image: url(${ProductImg2});
      grid-area: image2;
    `}

  ${({ name }) =>
    name === "image3" &&
    css`
      background-image: url(${ProductImg3});
      grid-area: image3;
      width: 39.6875rem;
      height: 37rem;
    `}
`;

const ProductGallery = () => {
  return (
    <StyledProductGallery>
      <GalleryImage name="image1" />
      <GalleryImage name="image2" />
      <GalleryImage name="image3" />
    </StyledProductGallery>
  );
};

export default ProductGallery;
