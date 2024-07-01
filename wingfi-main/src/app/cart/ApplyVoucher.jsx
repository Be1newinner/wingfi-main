"use client";

import { TbDiscount2 } from "react-icons/tb";
import { useSelector } from "react-redux";

export default function ApplyVoucher() {
  const CartSelector = useSelector((selector) => selector.Cart);
  const discount = CartSelector.discount || 0;

  return CartSelector.subtotal != 0 ? (
    <div className="pl-4">
      <div className="p-4 bg-white rounded-sm shadow border tracking-wider">
        <p className="text-md font-semibold pb-4">Apply Coupon</p>

        <label className="input input-bordered rounded-sm flex items-center gap-2">
          <TbDiscount2 size={24} color="gray" />
          <input
            type="text"
            className="grow tracking-widest w-full"
            placeholder="enter your code"
            maxLength={20}
          />
        </label>
        <button className="btn btn-error w-full mt-4 text-white font-medium rounded-sm text-shadow text-sm">
          Apply Voucher
        </button>
      </div>
    </div>
  ) : null;
}
