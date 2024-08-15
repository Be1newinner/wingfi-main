"use client";

import { ProductViewList2 } from "@/components";
import { useSelector } from "react-redux";

export default function HomeProductsWrapper() {
  const ProductsSelector = useSelector((selector) => selector.AllProducts);

  return (
    <div className="flex flex-col sm:flex-row gap-4 flex-wrap mt-4">
      {ProductsSelector?.data?.map((item) => (
        <ProductViewList2 key={item.slug} item={item} />
      ))}
    </div>
  );
}
