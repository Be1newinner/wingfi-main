export default function CartProduct({ sku, qty, title, mrp, price }) {
  return (
    <div className="flex flex-col gap-4 border-y-2 border-gray-200 py-8 px-12">
      <div className="flex justify-between items-center">
        <div className="flex gap-4">
          <img
            src={`https://firebasestorage.googleapis.com/v0/b/wingfi-9b5b7.appspot.com/o/pro%2F${sku}%2F1.webp?alt=media`}
            className="w-28 aspect-square rounded-md shadow-md"
            alt="product"
          />
          <div className="flex flex-col gap-2">
            <div className="flex flex-col">
              <span className="text-md font-medium my-0 py-0 leading-5 capitalize">
                {title}
              </span>
              <span className="text-xs text-gray-500 my-0 py-0 leading-4">
                Black, Lithium Polymer, Quick Charge 4.0 for Mobile
              </span>
            </div>
            <p className="text-sm text-gray-500 ">Seller: Wingfi</p>
            <span className="text-sm text-gray-500 leading-4">SKU {sku}</span>
            <div className="flex gap-2 items-center justify-between">
              <p className="flex gap-2 items-center">
                <span className="text-xs text-gray-500 line-through">
                  ₹{mrp}
                </span>
                <span className="font-semibold ">₹{price}</span>
              </p>
              <p>Qty x {qty}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
