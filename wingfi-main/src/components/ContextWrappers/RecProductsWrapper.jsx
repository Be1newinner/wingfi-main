import { ProductViewList2 } from "@/components";
import { ProductsData } from "@/service/Products/ProductsService";

export default async function RecProductsWrapper() {
  const products = await ProductsData({
    lim: 15,
    order: "s",
    coll: "p43duc",
    whereType: 2,
  });

  return (
    <div className="flex flex-row sm:flex-row flex-wrap mt-4">
      {products?.slice(0, 4)?.map((item) => (
        <ProductViewList2 key={item.slug} item={item} />
      ))}
    </div>
  );
}
