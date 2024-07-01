"use client";

import { ProductViewList } from "@/registry/components";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { ProductsData } from "./../../service/Products/ProductsService";
import { addProductsArray } from "../../store/Slice/AllProductsSlice";
import { useRef } from "react";

export default function ShopProductsWrapper() {
  const dispatch = useDispatch();
  const ProductsSelector = useSelector((selector) => selector.AllProducts);

  const fetching = useRef(true);

  useEffect(() => {
    (async function () {
      if (ProductsSelector?.data?.length == 0 && fetching.current) {
        const data = await ProductsData({
          lim: 15,
          order: "s",
          coll: "p43duc",
        });
        dispatch(addProductsArray(data));
        console.log("FETCH => ", fetching.current);
        fetching.current = false;
        console.log("USE EFFECT Called!", fetching.current);
      }
    })();
  }, []);
  return ProductsSelector?.data?.map((item) => (
    <ProductViewList
      key={item.slug}
      title={item.title}
      price={item.price}
      mrp={item.mrp}
      slug={item.slug}
      sku={item.sku}
      rating={item.rating}
    />
  ));
}
