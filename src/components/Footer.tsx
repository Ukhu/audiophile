import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import BrandLogo from "../assets/svg/audiophile-logo.svg";
import FacebookIcon from "../assets/svg/icon-facebook.svg";
import TwitterIcon from "../assets/svg/icon-twitter.svg";
import InstagramIcon from "../assets/svg/icon-instagram.svg";

const StyledFooter = styled.footer`
  background: ${({ theme }) => theme.colors.brand.black};

  ${({ theme }) => theme.screens.tablet} {
    height: 22.8125rem;
  }
`;

const FooterContent = styled.div`
  margin: 0 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  ${({ theme }) => theme.screens.tablet} {
    display: block;
    margin: 0 2.5rem;
  }

  ${({ theme }) => theme.screens.laptop} {
    margin: 0 10.3125rem;
  }
`;

const FooterHightlight = styled.div`
  width: 6.25rem;
  height: 4px;
  background: ${({ theme }) => theme.colors.brand.peru};
`;

const FooterHead = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 3rem;
  margin-bottom: 2.25rem;

  & > img {
    margin-bottom: 3rem;
  }

  ${({ theme }) => theme.screens.tablet} {
    margin-top: 4.375rem;
    flex-direction: row;
    justify-content: space-between;

    & > img {
      margin-bottom: 0;
    }
  }
`;

const FooterBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  ${({ theme }) => theme.screens.tablet} {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

const FooterNav = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  list-style: none;
  padding: 0;
  margin: 0;

  ${({ theme }) => theme.screens.tablet} {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const FooterNavItem = styled.li`
  font: ${({ theme }) => theme.typography.subTitle};
  color: ${({ theme }) => theme.colors.neutral.white};
  font-weight: bold;
  letter-spacing: 1px;
  text-transform: uppercase;
  cursor: pointer;

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.neutral.white};

    &:hover {
      color: ${({ theme }) => theme.colors.brand.peru};
    }
  }

  &:not(:last-child) {
    margin-bottom: 1rem;

    ${({ theme }) => theme.screens.tablet} {
      margin-right: 2.125rem;
      margin-bottom: 0;
    }
  }
`;

const FooterDescription = styled.p`
  font: ${({ theme }) => theme.typography.body};
  color: ${({ theme }) => theme.colors.neutral.white};
  margin-bottom: 3rem;
  opacity: 0.5;

  &:last-child {
    margin-bottom: 0;
    font-weight: bold;
  }

  ${({ theme }) => theme.screens.tablet} {
    margin-bottom: 3.5rem;
  }
`;

const FooterDescriptionWrap = styled.div`
  text-align: center;
  margin-bottom: 3rem;

  ${({ theme }) => theme.screens.tablet} {
    text-align: left;
    width: 33.75rem;
    margin-bottom: 0;
  }
`;

const FooterSocialLinks = styled(FooterNav)`
  flex-direction: row;
  align-items: center;
  margin-bottom: 2.375rem;

  ${({ theme }) => theme.screens.tablet} {
    align-self: flex-end;
    margin-bottom: 0;
  }

  ${({ theme }) => theme.screens.laptop} {
    align-items: center;
    margin-bottom: 2.375rem;
  }
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
              <FooterNavItem>
                <Link to="/">Home</Link>
              </FooterNavItem>
              <FooterNavItem>
                <Link to="/category/headphones">Headphones</Link>
              </FooterNavItem>
              <FooterNavItem>
                <Link to="/category/speakers">Speakers</Link>
              </FooterNavItem>
              <FooterNavItem>
                <Link to="/category/earphones">Earphones</Link>
              </FooterNavItem>
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
