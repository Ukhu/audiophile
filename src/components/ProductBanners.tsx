import React from "react";
import styled, { css } from "styled-components";

import EarphoneImg from "../assets/img/image-earphones-yx1.jpg";
import SpeakerImg from "../assets/img/image-speaker-zx7.jpg";
import SpeakerPng from "../assets/img/image-speaker-zx9.png";
import PatternCirclesSvg from "../assets/svg/pattern-circles.svg";

import Button from "./Button";

const StyledBanners = styled.section`
  display: grid;
  margin: 0 10.3125rem;
  margin-bottom: 12.5rem;
  max-width: 69.375rem;
  grid-template-columns: repeat(2, minmax(50%, 33.75rem));
  grid-template-rows: 35rem repeat(2, 20rem);
  grid-template-areas: ${css`
    "speaker-1 speaker-1"
    "speaker-2 speaker-2"
    "earphone-1 earphone-2"
  `};
  grid-row-gap: 3rem;
  grid-column-gap: 1.875rem;
`;

const Banner = styled.div<{ name: string }>`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-radius: 8px;
  grid-area: ${({ name }) => name};
  background-color: ${({ theme }) => theme.colors.brand.white};
  padding: 5.9375rem;

  ${({ name, theme }) =>
    name === "speaker-1" &&
    css`
      justify-content: space-between;
      background-color: ${theme.colors.brand.peru};
      background-image: url(${PatternCirclesSvg});
      background-repeat: no-repeat;
      background-position: -150px -20px;
      overflow: hidden;
    `}

  ${({ name }) =>
    name === "speaker-2" &&
    css`
      background-image: url(${SpeakerImg});
      background-size: cover;
      background-repeat: no-repeat;
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
  width: 21.8125rem;
`;

const BannerImg = styled.img`
  margin-bottom: -6rem;
  margin-left: 1.4rem;
`;

const PrimaryBannerName = styled.h2`
  font: ${({ theme }) => theme.typography.h1};
  letter-spacing: 2px;
  text-transform: uppercase;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.neutral.white};
  margin: 0;
  margin-bottom: 1.5rem;
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
  margin-bottom: 2.5rem;
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
          <Button text="See Product" variant="filled" color="black" />
        </BannerContent>
      </Banner>

      <Banner name="speaker-2">
        <BannerContent>
          <SecondaryBannerName>ZX7 speaker</SecondaryBannerName>
          <Button text="See Product" variant="outline" />
        </BannerContent>
      </Banner>

      <Banner as="img" name="earphone-1" src="" alt="" />

      <Banner name="earphone-2">
        <BannerContent>
          <SecondaryBannerName>YX1 earphones</SecondaryBannerName>
          <Button text="See Product" variant="outline" />
        </BannerContent>
      </Banner>
    </StyledBanners>
  );
};

export default ProductBanners;
