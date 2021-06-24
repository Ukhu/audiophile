import React from "react";
import styled from "styled-components";

import BrandSummaryImg from "../assets/img/image-best-gear.jpg";

const StyledBrandSummary = styled.article`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 10.3125rem;
  margin-bottom: 12.5rem;
  height: 36.75rem;
`;

const BrandSummaryContent = styled.section`
  width: 27.8125rem;
`;

const BrandSummaryTitle = styled.header`
  font: ${({ theme }) => theme.typography.h2};
  letter-spacing: 1.5px;
  font-weight: 700;
  text-transform: uppercase;
  margin: 0;
  margin-bottom: 2rem;
`;

const BrandSummaryTitleHighlight = styled.span`
  color: ${({ theme }) => theme.colors.brand.peru};
`;

const BrandSummaryBody = styled.p`
  font: ${({ theme }) => theme.typography.body};
  margin: 0;
  opacity: 0.5;
`;

const BrandSummaryImage = styled.div`
  background-image: url(${BrandSummaryImg});
  background-size: cover;
  background-repeat: no-repeat;
  width: 33.75rem;
  border-radius: 8px;
  height: 36.75rem;
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
