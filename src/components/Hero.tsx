import React from "react";
import styled from "styled-components";

import HeroImg from "../assets/img/image-hero.jpg";

import Button from "./Button";

const StyledHero = styled.section`
  height: 45.5625rem;
  background-image: url(${HeroImg});
  margin-top: -6rem;
`;

const Container = styled.div`
  margin: 0 10.3125rem;
`;

const HeroArticle = styled.article`
  padding-top: 14rem;
  width: 24rem;
`;

const OverlineText = styled.p`
  font: ${({ theme }) => theme.typography.overline};
  color: ${({ theme }) => theme.colors.neutral.white};
  font-weight: 400;
  letter-spacing: 10px;
  text-transform: uppercase;
  margin: 0;
`;

const MainText = styled.h1`
  font: ${({ theme }) => theme.typography.h1};
  color: ${({ theme }) => theme.colors.neutral.white};
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin: 1.5rem 0;
`;

const HeroBodyText = styled.p`
  font: ${({ theme }) => theme.typography.body};
  color: ${({ theme }) => theme.colors.neutral.white};
  width: 21.8125rem;
  margin: 0;
  margin-bottom: 2.5rem;
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
