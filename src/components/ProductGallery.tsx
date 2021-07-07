import React from "react";
import styled, { css } from "styled-components";

import { IProductGallery } from "../types/product";

const StyledProductGallery = styled.div`
  margin: 0 1.5rem;
  height: 47.25rem;
  display: grid;
  grid-template-rows: repeat(2, 1fr) 2fr;
  grid-template-columns: 100%;
  grid-template-areas: ${css`
    "image1"
    "image2"
    "image3"
  `};
  grid-gap: 1.5rem;
  margin-bottom: 7.5rem;

  ${({ theme }) => theme.screens.tablet} {
    height: 23rem;
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 2fr 3fr;
    grid-template-areas: ${css`
    "image1 image3"
    "image2 image3"
  `};
    grid-gap: 2rem;
    margin: 0 2.5rem;
    margin-bottom: 10rem;
  }

  ${({ theme }) => theme.screens.laptop} {
    height: 37rem;
    margin: 0 10.3125rem;
    margin-bottom: 10rem;
  }
`;

const GalleryImage = styled.div<{ name: string; url?: string }>`
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  border-radius: 8px;

  ${({ name, url }) =>
    name === "image1" &&
    css`
      background-image: url(${url});
      grid-area: image1;
    `}

  ${({ name, url }) =>
    name === "image2" &&
    css`
      background-image: url(${url});
      grid-area: image2;
    `}

  ${({ name, url }) =>
    name === "image3" &&
    css`
      background-image: url(${url});
      grid-area: image3;
      width: 100%;
      height: 100%;
    `}
`;

const ProductGallery = ({ gallery }: IProductGallery) => {
  return (
    <StyledProductGallery>
      <GalleryImage name="image1" url={gallery?.first.desktop} />
      <GalleryImage name="image2" url={gallery?.second.desktop} />
      <GalleryImage name="image3" url={gallery?.third.desktop} />
    </StyledProductGallery>
  );
};

export default ProductGallery;
