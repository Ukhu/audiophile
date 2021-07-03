import React from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

import EarphoneImg from "../assets/img/image-earphones-yx1.jpg";
import SpeakerImg from "../assets/img/image-speaker-zx7.jpg";
import SpeakerPng from "../assets/img/image-speaker-zx9.png";
import PatternCirclesSvg from "../assets/svg/pattern-circles.svg";

import Button from "./Button";

const StyledBanners = styled.section`
  display: grid;
  margin: 0 1.5rem;
  margin-bottom: 7.5rem;
  max-width: 100%;
  grid-template-columns: 100%;
  grid-template-rows: 37.5rem 20rem repeat(2, 12.5rem);
  grid-template-areas: ${css`
    "speaker-1"
    "speaker-2"
    "earphone-1"
    "earphone-2"
  `};
  grid-row-gap: 3rem;

  ${({ theme }) => theme.screens.tablet} {
    margin: 0 2.5rem;
    margin-bottom: 6rem;
    grid-template-columns: repeat(2, minmax(45%, 33.75rem));
    grid-template-rows: 35rem repeat(2, 20rem);
    grid-template-areas: ${css`
    "speaker-1 speaker-1"
    "speaker-2 speaker-2"
    "earphone-1 earphone-2"
  `};
    grid-row-gap: 2rem;
    // grid-column-gap: 1.875rem;
  }

  ${({ theme }) => theme.screens.laptop} {
    margin: 0 10.3125rem;
    margin-bottom: 12.5rem;
    max-width: 69.375rem;
    grid-column-gap: 1.875rem;
  }
`;

const Banner = styled.div<{ name: string }>`
  padding: 2.625rem 1.5rem;
  display: flex;
  border-radius: 8px;
  grid-area: ${({ name }) => name};
  background-color: ${({ theme }) => theme.colors.brand.white};

  ${({ theme }) => theme.screens.tablet} {
    justify-content: flex-start;
    align-items: center;
    padding: 5.9375rem;
  }

  ${({ name, theme }) =>
    name === "speaker-1" &&
    css`
      padding: 3.4375rem 1.5rem;
      background-image: url(${PatternCirclesSvg});
      background-repeat: no-repeat;
      overflow: hidden;
      background-color: ${theme.colors.brand.peru};
      background-position: top;
      background-size: contain;
      flex-direction: column;
      align-items: center;

      & > ${BannerContent} {
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      ${({ theme }) => theme.screens.tablet} {
        padding: 3.25rem 1.5rem;
      }

      ${({ theme }) => theme.screens.laptop} {
        flex-direction: row;
        justify-content: space-between;
        background-size: cover;
        background-position: -150px -20px;

        & > ${BannerContent} {
          align-items: flex-start;
        }
      }
    `}

  ${({ name }) =>
    name === "speaker-2" &&
    css`
      flex-direction: column;
      justify-content: center;
      background-image: url(${SpeakerImg});
      background-size: cover;
      background-repeat: no-repeat;
      background-position-x: -400px;

      ${({ theme }) => theme.screens.tablet} {
        flex-direction: row;
        justify-content: flex-start;
        background-position-x: center;
      }
    `}

  ${({ name }) =>
    name === "earphone-1" &&
    css`
      background-image: url(${EarphoneImg});
      background-size: cover;
      background-repeat: no-repeat;
    `}
`;

const BannerContent = styled.div`
  width: 100%;

  ${({ theme }) => theme.screens.tablet} {
    width: 21.8125rem;
  }
`;

const BannerImg = styled.img`
  width: 10.8125rem;
  margin-bottom: 2rem;

  ${({ theme }) => theme.screens.laptop} {
    width: 410px;
    margin-bottom: -6rem;
    margin-left: 1.4rem;
  }
`;

const PrimaryBannerName = styled.h2`
  font: ${({ theme }) => theme.typography.h2};
  letter-spacing: 1.5px;
  text-transform: uppercase;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.neutral.white};
  margin: 0;
  margin-bottom: 1.5rem;
  text-align: center;

  ${({ theme }) => theme.screens.laptop} {
    font: ${({ theme }) => theme.typography.h1};
    letter-spacing: 2px;
    text-align: left;
  }
`;

const SecondaryBannerName = styled.h3`
  font: ${({ theme }) => theme.typography.h4};
  letter-spacing: 2px;
  text-transform: uppercase;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.neutral.black};
  margin: 0;
  margin-bottom: 2rem;
`;

const BannerBody = styled.p`
  font: ${({ theme }) => theme.typography.body};
  color: ${({ theme }) => theme.colors.neutral.white};
  margin: 0;
  margin-bottom: 1.5rem;
  text-align: center;

  ${({ theme }) => theme.screens.laptop} {
    margin-bottom: 2.5rem;
    text-align: left;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const ProductBanners = () => {
  return (
    <StyledBanners>
      <Banner name="speaker-1">
        <BannerImg src={SpeakerPng} alt="Speaker" width={410} />

        <BannerContent>
          <PrimaryBannerName>ZX9 speaker</PrimaryBannerName>

          <BannerBody>
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </BannerBody>

          <StyledLink to="/product/zx9-speaker">
            <Button variant="filled" color="black" text="See Product" />
          </StyledLink>
        </BannerContent>
      </Banner>

      <Banner name="speaker-2">
        <BannerContent>
          <SecondaryBannerName>ZX7 speaker</SecondaryBannerName>

          <StyledLink to="/product/zx7-speaker">
            <Button variant="outline" text="See Product" />
          </StyledLink>
        </BannerContent>
      </Banner>

      <Banner as="img" name="earphone-1" src="" alt="" />

      <Banner name="earphone-2">
        <BannerContent>
          <SecondaryBannerName>YX1 earphones</SecondaryBannerName>

          <StyledLink to="/product/yx1-earphones">
            <Button variant="outline" text="See Product" />
          </StyledLink>
        </BannerContent>
      </Banner>
    </StyledBanners>
  );
};

export default ProductBanners;
