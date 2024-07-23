export default function CartProduct({ sku, imgUrl, title, mrp, price }) {
  return (
    <div className="flex flex-col gap-4 border-t-2 border-gray-200 py-8 px-12">
      <div className="flex justify-between items-center">
        <div className="flex gap-4">
          <img src={imgUrl} className="w-14 h-28" alt="product" />
          <div className="flex flex-col gap-2">
            <div className="flex flex-col">
              <span className="text-md font-medium my-0 py-0 leading-5">
                {title}
              </span>
              <span className="text-xs text-gray-500 my-0 py-0 leading-4">
                Black, Lithium Polymer, Quick Charge 4.0 for Mobile
              </span>
            </div>
            <p className="text-sm text-gray-500 ">Seller: Wingfi</p>
            <span className="text-sm text-gray-500 leading-4">SKU {sku}</span>
            <div className="flex gap-2 items-center">
              <p className="text-xs text-gray-500 line-through">₹{mrp}</p>
              <p className="font-semibold ">₹{price}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
