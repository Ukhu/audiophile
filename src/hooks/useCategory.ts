import { useState, useEffect } from "react";
import firebase from "firebase";
import firebaseFirestore from "../firebase";
import { IProduct } from "../types/product";

let categoryConverter = {
  toFirestore: (data: IProduct) => data,
  fromFirestore: function (
    snapshot: firebase.firestore.QueryDocumentSnapshot
  ): IProduct {
    const data = snapshot.data() as IProduct;
    return { ...data };
  },
};

const useCategory = (category: string) => {
  const [categoryProducts, setCategoryProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    firebaseFirestore
      .collection("products")
      .where("category", "==", category)
      .withConverter(categoryConverter)
      .get()
      .then((snap) => {
        const products: IProduct[] = [];
        snap.forEach((doc) => products.push({ ...doc.data() }));
        setCategoryProducts(products);
      });
  }, [category]);

  return { categoryProducts };
};

export default useCategory;
