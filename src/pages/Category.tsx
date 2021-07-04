import React from "react";
import firebase from "firebase";
import styled from "styled-components";
import { useParams } from "react-router-dom";

import FirestoreContext from "../contexts/FirestoreContext";
import { IProduct } from "../types/product";
import { ICategoryPathParams } from "../types/category";

import Header from "../components/Header";
import CategoryGroup from "../components/CategoryGroup";
import BrandSummary from "../components/BrandSummary";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";

const CategoryHead = styled.div`
  height: 12rem;
  margin-top: -6rem;
  background-color: ${({ theme }) => theme.colors.neutral.black};
  margin-bottom: 4rem;

  ${({ theme }) => theme.screens.laptop} {
    height: 21rem;
    margin-bottom: 10rem;
  }
`;

const CategoryName = styled.h1`
  font: ${({ theme }) => theme.typography.h4};
  color: ${({ theme }) => theme.colors.neutral.white};
  letter-spacing: 2px;
  font-weight: bold;
  text-transform: uppercase;
  text-align: center;
  padding-top: 7.5rem;
  margin: 0;

  ${({ theme }) => theme.screens.laptop} {
    font: ${({ theme }) => theme.typography.h2};
    letter-spacing: 1.5px;
    padding-top: 12.125rem;
  }
`;

const CategoryProducts = styled.section`
  margin-bottom: 15rem;
`;

const CategoryPage = () => {
  const { db } = React.useContext(FirestoreContext);
  const { categoryName } = useParams<ICategoryPathParams>();
  const [products, setProducts] =
    React.useState<firebase.firestore.DocumentData>([]);

  React.useEffect(() => {
    db?.collection("products")
      .where("category", "==", categoryName)
      .get()
      .then((querySnapshot) => {
        setProducts(querySnapshot.docs.map((doc) => doc.data()));
      });
  });

  return (
    <div>
      <Header />
      <CategoryHead>
        <CategoryName>{categoryName.toUpperCase()}</CategoryName>
      </CategoryHead>
      <CategoryProducts>
        {products.map((product: IProduct) => (
          <ProductCard key={product.name} product={product} />
        ))}
      </CategoryProducts>
      <CategoryGroup />
      <BrandSummary />
      <Footer />
    </div>
  );
};

export default CategoryPage;
