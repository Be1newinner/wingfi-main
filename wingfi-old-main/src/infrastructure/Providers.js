"use client";

import { ProductsContextProvider } from "../services/products/ProductsContext";

export default function Providers({ children }) {
  return <ProductsContextProvider>{children}</ProductsContextProvider>;
}
