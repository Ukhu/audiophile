import React from "react";
import styled from "styled-components";

import HeroImg from "../assets/img/image-hero.jpg";

import Button from "./Button";

const StyledHero = styled.section`
  background-image: url(${HeroImg});
  background-size: cover;
  background-position-x: -610px;
  background-repeat: no-repeat;
  height: 37.5rem;
  margin-top: -5.5625rem;

  ${({ theme }) => theme.screens.tablet} {
    background-position-x: -400px;
    margin-top: -6rem;
  }

  ${({ theme }) => theme.screens.laptop} {
    background-position: center;
    height: 45.5625rem;
    margin-top: -6rem;
  }
`;

const Container = styled.div`
  margin: 0 1.5rem;

  ${({ theme }) => theme.screens.tablet} {
    margin: 0 2.5rem;
  }

  ${({ theme }) => theme.screens.laptop} {
    margin: 0 10.3125rem;
  }
`;

const HeroArticle = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 12.375rem;

  ${({ theme }) => theme.screens.laptop} {
    display: block;
    padding-top: 14rem;
    width: 24rem;
  }
`;

const OverlineText = styled.p`
  font: ${({ theme }) => theme.typography.overline};
  color: ${({ theme }) => theme.colors.neutral.white};
  font-weight: 400;
  letter-spacing: 10px;
  text-transform: uppercase;
  margin: 0;
  opacity: 0.5;
`;

const MainText = styled.h1`
  font: ${({ theme }) => theme.typography.h2};
  color: ${({ theme }) => theme.colors.neutral.white};
  letter-spacing: 1.5px;
  font-weight: 700;
  text-transform: uppercase;
  text-align: center;
  margin: 1.5rem 0;

  ${({ theme }) => theme.screens.tablet} {
    width: 24rem;
  }

  ${({ theme }) => theme.screens.laptop} {
    font: ${({ theme }) => theme.typography.h1};
    letter-spacing: 2px;
    text-align: left;
  }
`;

const HeroBodyText = styled.p`
  font: ${({ theme }) => theme.typography.body};
  color: ${({ theme }) => theme.colors.neutral.white};
  text-align: center;
  opacity: 0.75;

  ${({ theme }) => theme.screens.tablet} {
    width: 21.8125rem;
  }

  ${({ theme }) => theme.screens.laptop} {
    width: 21.8125rem;
    margin: 0;
    margin-bottom: 2.5rem;
    text-align: left;
  }
`;

const Hero = () => {
  return (
    <StyledHero>
      <Container>
        <HeroArticle>
          <OverlineText>New Product</OverlineText>
          <MainText>XX99 Mark II Headphones</MainText>
          <HeroBodyText>
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </HeroBodyText>

          <Button text="See product" variant="filled" />
        </HeroArticle>
      </Container>
    </StyledHero>
  );
};

export default Hero;
