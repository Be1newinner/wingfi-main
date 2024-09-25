"use client";

import { createContext, useEffect, useState } from "react";
import { collection, getDocs, limit, query } from "firebase/firestore";
import { firestore } from "@/infrastructure/firebase.config";

export const ProductsContext = createContext();

export const ProductsContextProvider = ({ children }) => {
  const [Products, setProducts] = useState([]);

  // useEffect(() => {
  //   (async function () {
  //     const productsRef = collection(firestore, "p34ducts");
  //     const q = query(productsRef, limit(4));
  //     const querySnapshot = await getDocs(q);

  //     const newData = [];
  //     querySnapshot.forEach((doc) => {
  //       newData.push(doc.data());
  //     });

  //     setProducts(newData);
  //   })();
  // }, []);

  // useEffect(() => {
  //   console.log({ Products });
  // }, [Products]);

  return (
    <ProductsContext.Provider value={{ Products }}>
      {children}
    </ProductsContext.Provider>
  );
};
