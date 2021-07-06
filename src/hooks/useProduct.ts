import { useState, useEffect } from "react";
import firebase from "firebase";
import firebaseFirestore from "../firebase";
import { IProduct } from "../types/product";

let productConverter = {
  toFirestore: (data: IProduct) => data,
  fromFirestore: function (
    snapshot: firebase.firestore.QueryDocumentSnapshot
  ): IProduct {
    const data = snapshot.data() as IProduct;
    return { ...data };
  },
};

const useProduct = (productSlug: string) => {
  const [product, setProduct] = useState<IProduct | null>(null);

  useEffect(() => {
    firebaseFirestore
      .collection("products")
      .where("slug", "==", productSlug)
      .withConverter(productConverter)
      .get()
      .then((snap) => {
        const products: IProduct[] = [];
        snap.forEach((doc) => {
          products.push(doc.data());
        });
        setProduct(products[0]);
      });
  }, [productSlug]);

  return { product };
};

export default useProduct;
