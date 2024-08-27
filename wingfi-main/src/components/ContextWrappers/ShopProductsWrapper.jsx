import { ProductViewList } from "@/components";
// import { useDispatch, useSelector } from "react-redux";
// import { useEffect } from "react";
import { ProductsData } from "./../../service/Products/ProductsService";
// import { addProductsArray } from "../../store/Slice/AllProductsSlice";
// import { useRef } from "react";

export async function ShopProductsWrapper() {
  // async function getProducts() {
  //   return await
  // }

  const productsArray = await ProductsData({
    lim: 15,
    order: "s",
    coll: "p43duc",
  });

  // getProducts().then((e) => {
  //   productsArray = e;
  console.log("data => ", productsArray);
  // });

  return productsArray?.map((item) => (
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
