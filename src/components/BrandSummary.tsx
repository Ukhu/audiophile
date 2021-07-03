import React from "react";
import styled from "styled-components";

import BrandSummaryImg from "../assets/img/image-best-gear.jpg";

const StyledBrandSummary = styled.article`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  margin: 0 1.5rem;
  margin-bottom: 7.5rem;
  height: 43.625rem;

  ${({ theme }) => theme.screens.tablet} {
    justify-content: space-between;
    height: fit-content;
    margin: 0 2.5rem;
    margin-bottom: 6rem;
  }

  ${({ theme }) => theme.screens.laptop} {
    flex-direction: row;
    justify-content: space-between;
    margin: 0 10.3125rem;
    margin-bottom: 12.5rem;
    height: 36.75rem;
  }
`;

const BrandSummaryContent = styled.section`
  width: 100%;

  ${({ theme }) => theme.screens.laptop} {
    width: 27.8125rem;
  }
`;

const BrandSummaryTitle = styled.header`
  font: ${({ theme }) => theme.typography.h2};
  letter-spacing: 1.5px;
  font-weight: 700;
  text-transform: uppercase;
  margin: 0;
  margin-bottom: 2rem;
  text-align: center;

  ${({ theme }) => theme.screens.laptop} {
    text-align: left;
  }
`;

const BrandSummaryTitleHighlight = styled.span`
  color: ${({ theme }) => theme.colors.brand.peru};
`;

const BrandSummaryBody = styled.p`
  font: ${({ theme }) => theme.typography.body};
  margin: 0;
  opacity: 0.5;
  text-align: center;

  ${({ theme }) => theme.screens.laptop} {
    text-align: left;
  }
`;

const BrandSummaryImage = styled.div`
  background-image: url(${BrandSummaryImg});
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 8px;
  width: 100%;
  height: 18.75rem;
  margin-bottom: 2.5rem;

  ${({ theme }) => theme.screens.laptop} {
    margin-bottom: 0;
    width: 33.75rem;
    height: 36.75rem;
  }
`;

const BrandSummary = () => {
  return (
    <StyledBrandSummary>
      <BrandSummaryContent>
        <header>
          <BrandSummaryTitle>
            Bringing you the{" "}
            <BrandSummaryTitleHighlight>best</BrandSummaryTitleHighlight> audio
            gear
          </BrandSummaryTitle>
        </header>
        <BrandSummaryBody>
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </BrandSummaryBody>
      </BrandSummaryContent>
      <BrandSummaryImage />
    </StyledBrandSummary>
  );
};

export default BrandSummary;
