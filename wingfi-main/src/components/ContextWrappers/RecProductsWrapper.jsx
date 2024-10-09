import { ProductViewList2 } from '@/components';
import { ProductsData } from '@/service/Products/ProductsService';

export async function RecProductsWrapper() {
  const products = await ProductsData({
    lim: 15,
    order: 's',
    coll: 'p43duc',
    whereType: 2,
  });

  return (
    <div className="grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 ">
      {products?.slice(0, 4)?.map((item) => (
        <ProductViewList2 key={item.slug} item={item} rating={3 || 0} />
      ))}
    </div>
  );
}
