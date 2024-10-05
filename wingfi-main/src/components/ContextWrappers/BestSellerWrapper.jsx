import { ProductViewList3 } from "@/components";
import { ProductsData } from "./../../service/Products/ProductsService";

export async function BestSellerWrapper() {
  const products = await ProductsData({
    lim: 4,
    order: "s",
    coll: "p43duc",
    whereType: 1,
  });

  return (
    <div className="grid lg:grid-cols-4 sm:grid-cols-2  grid-cols-1 gap-4 mt-3">
      {products?.slice(0, 4)?.map((item) => (
        <ProductViewList3 key={item.slug} item={item} rating={3 || 0} />
      ))}
    </div>
  );
}
