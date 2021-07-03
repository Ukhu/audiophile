import React from "react";

import Header from "../components/Header";
import Hero from "../components/Hero";
import CategoryGroup from "../components/CategoryGroup";
import ProductBanners from "../components/ProductBanners";
import BrandSummary from "../components/BrandSummary";
import Footer from "../components/Footer";

const Landing = () => {
  return (
    <div>
      <Header />
      <Hero />
      <CategoryGroup />
      <ProductBanners />
      <BrandSummary />
      <Footer />
    </div>
  );
};

export default Landing;
