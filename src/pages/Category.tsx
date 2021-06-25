import React from "react";
import styled from "styled-components";

import Header from "../components/Header";
import CategoryGroup from "../components/CategoryGroup";
import BrandSummary from "../components/BrandSummary";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";

import MarkTwoImg from "../assets/img/image-xx99-mark-two.jpg";
import MarkOneImg from "../assets/img/image-xx99-mark-one.jpg";
import XHeadphoneImg from "../assets/img/image-xx59.jpg";

const MOCK_DATA = [
  {
    name: "XX99 Mark II Headphones",
    descripton:
      "The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.",
    new: true,
    imageUrl: MarkTwoImg,
  },
  {
    name: "XX99 Mark I Headphones",
    descripton:
      "As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.",
    new: false,
    imageUrl: MarkOneImg,
  },
  {
    name: "XX59 Headphones",
    descripton:
      "Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.",
    new: false,
    imageUrl: XHeadphoneImg,
  },
];

const CategoryHead = styled.div`
  height: 21rem;
  margin-top: -6rem;
  background-color: ${({ theme }) => theme.colors.neutral.black};
  margin-bottom: 10rem;
`;

const CategoryName = styled.h1`
  font: ${({ theme }) => theme.typography.h2};
  color: ${({ theme }) => theme.colors.neutral.white};
  letter-spacing: 1.5px;
  font-weight: bold;
  text-transform: uppercase;
  text-align: center;
  padding-top: 12.125rem;
  margin: 0;
`;

const CategoryProducts = styled.section`
  margin-bottom: 15rem;
`;

const CategoryPage = () => {
  return (
    <div>
      <Header />
      <CategoryHead>
        <CategoryName>Headphones</CategoryName>
      </CategoryHead>
      <CategoryProducts>
        {MOCK_DATA.map((product) => (
          <ProductCard product={product} />
        ))}
      </CategoryProducts>
      <CategoryGroup />
      <BrandSummary />
      <Footer />
    </div>
  );
};

export default CategoryPage;
