import { ProductViewList3 } from "@/components";
import { ProductsData } from "./../../service/Products/ProductsService";

export default async function BestSellerWrapper() {
  const products = await ProductsData({
    lim: 15,
    order: "s",
    coll: "p43duc",
    whereType: 1,
  });

  return (
    <div className="flex flex-col sm:flex-row gap-4 flex-wrap mt-4">
      {products?.slice(0, 3)?.map((item) => (
        <ProductViewList3 key={item.slug} item={item} />
      ))}
    </div>
  );
}
