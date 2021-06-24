import React from "react";
import styled from "styled-components";

import BrandLogo from "../assets/svg/audiophile-logo.svg";
import FacebookIcon from "../assets/svg/icon-facebook.svg";
import TwitterIcon from "../assets/svg/icon-twitter.svg";
import InstagramIcon from "../assets/svg/icon-instagram.svg";

const StyledFooter = styled.footer`
  height: 22.8125rem;
  background: ${({ theme }) => theme.colors.brand.black};
`;

const FooterContent = styled.div`
  margin: 0 10.3125rem;
`;

const FooterHightlight = styled.div`
  width: 6.25rem;
  height: 4px;
  background: ${({ theme }) => theme.colors.brand.peru};
`;

const FooterHead = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 4.375rem;
  margin-bottom: 2.25rem;
`;

const FooterBody = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const FooterNav = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
`;

const FooterNavItem = styled.li`
  font: ${({ theme }) => theme.typography.subTitle};
  color: ${({ theme }) => theme.colors.neutral.white};
  font-weight: bold;
  letter-spacing: 1px;
  text-transform: uppercase;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.brand.peru};
  }

  &:not(:last-child) {
    margin-right: 2.125rem;
  }
`;

const FooterDescription = styled.p`
  font: ${({ theme }) => theme.typography.body};
  color: ${({ theme }) => theme.colors.neutral.white};
  margin-bottom: 3.5rem;
  opacity: 0.5;

  &:last-child {
    margin-bottom: 0;
    font-weight: bold;
  }
`;

const FooterDescriptionWrap = styled.div`
  width: 33.75rem;
`;

const FooterSocialLinks = styled(FooterNav)`
  align-items: center;
`;

const FooterSocialItem = styled.li`
  &:not(:last-child) {
    margin-right: 1rem;
  }
`;

const FooterIcon = styled.a`
  text-decoration: none;
`;

const FooterImage = styled.img`
  &:hover {
    filter: invert(57%) sepia(52%) saturate(574%) hue-rotate(336deg)
      brightness(89%) contrast(88%);
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <FooterContent>
        <FooterHightlight />
        <FooterHead>
          <img src={BrandLogo} alt="Audiophile" />

          <nav>
            <FooterNav>
              <FooterNavItem>Home</FooterNavItem>
              <FooterNavItem>Headphones</FooterNavItem>
              <FooterNavItem>Speakers</FooterNavItem>
              <FooterNavItem>Earphones</FooterNavItem>
            </FooterNav>
          </nav>
        </FooterHead>
        <FooterBody>
          <FooterDescriptionWrap>
            <FooterDescription>
              Audiophile is an all in one stop to fulfill your audio needs.
              We're a small team of music lovers and sound specialists who are
              devoted to helping you get the most out of personal audio. Come
              and visit our demo facility - we’re open 7 days a week.
            </FooterDescription>

            <FooterDescription>
              Copyright 2021. All Rights Reserved
            </FooterDescription>
          </FooterDescriptionWrap>
          <FooterSocialLinks>
            <FooterSocialItem>
              <FooterIcon href="/#">
                <FooterImage src={FacebookIcon} alt="Facebook" />
              </FooterIcon>
            </FooterSocialItem>
            <FooterSocialItem>
              <FooterIcon href="/#">
                <FooterImage src={TwitterIcon} alt="Twitter" />
              </FooterIcon>
            </FooterSocialItem>
            <FooterSocialItem>
              <FooterIcon href="/#">
                <FooterImage src={InstagramIcon} alt="Instagram" />
              </FooterIcon>
            </FooterSocialItem>
          </FooterSocialLinks>
        </FooterBody>
      </FooterContent>
    </StyledFooter>
  );
};

export default Footer;
