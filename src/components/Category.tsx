import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import Button from "./Button";

import HeadphoneImg from "../assets/img/image-headphones.png";
import SpeakerImg from "../assets/img/image-speakers.png";
import EarphoneImg from "../assets/img/image-earphones.png";
import OvalBlur from "../assets/svg/oval-blur.svg";

const StyledCategory = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${({ theme }) => theme.colors.brand.white};
  border-radius: 8px;
  height: 12.75rem;
  margin-bottom: 6rem;

  ${({ theme }) => theme.screens.tablet} {
    width: 13.9375rem;
    margin-bottom: 0;
  }

  ${({ theme }) => theme.screens.laptop} {
    width: 21.875rem;
  }
`;

const CategoryImgWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: -5rem;
  position: relative;
`;

const CategoryImg = styled.img`
  width: 7.6875rem;
  height: 10rem;
  object-fit: cover;
  background: transparent;
  margin-bottom: 2.25rem;
`;

const CategoryImgBlur = styled.img`
  position: absolute;
  width: 7.6875rem;
  bottom: 0;
`;

const CategoryName = styled.h6`
  font: ${({ theme }) => theme.typography.h6};
  letter-spacing: 1.3px;
  font-weight: 700;
  margin: 0;
  text-transform: uppercase;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

interface ICategoryProps {
  name: string;
}

const Category = ({ name }: ICategoryProps) => {
  return (
    <StyledCategory>
      <CategoryImgWrapper>
        <CategoryImg src={getImage(name)} alt={name} />
        <CategoryImgBlur src={OvalBlur} alt="Blur" />
      </CategoryImgWrapper>
      <CategoryName>{name}</CategoryName>
      <StyledLink to={`/category/${name.toLowerCase()}`}>
        <Button variant="ghost" text="Shop" />
      </StyledLink>
    </StyledCategory>
  );
};

const getImage = (name: string) => {
  switch (name) {
    case "Headphones":
      return HeadphoneImg;
    case "Speakers":
      return SpeakerImg;
    case "Earphones":
      return EarphoneImg;
    default:
      return "";
  }
};

export default Category;
