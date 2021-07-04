import firebase from "firebase";

export interface IProduct extends firebase.firestore.DocumentData {
  name: string;
  slug: string;
  category: string;
  description: string;
  features: string;
  new: boolean;
  image: {
    desktop: string;
  };
  price: number;
}

export interface IProductCardProps {
  product: IProduct;
  addToCart?: boolean;
}

export interface IProductDetailPathParams {
  productSlug: string;
}

export interface ISimilarProductProps {
  name: string;
  img: string;
}
