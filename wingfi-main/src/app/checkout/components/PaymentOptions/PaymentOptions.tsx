import { Dispatch, SetStateAction } from "react";

interface propTypes {
  checkoutSteps: number;
  setCheckoutSteps: Dispatch<SetStateAction<number>>;
  radioSelection: number;
  setRadioSelection: (e: number) => void;
}

export default function PaymentOptions({
  checkoutSteps,
  setCheckoutSteps,
  radioSelection,
  setRadioSelection,
}: propTypes) {
  return checkoutSteps === 3 ? (
    <div className="bg-white shadow">
      <p className="flex gap-2 text-white font-semibold text-sm py-4 px-4 sm:px-8 shadow-md bg-blue-500 ">
        <div className="flex w-5 h-5 bg-white rounded-sm items-center justify-center">
          <span className="text-blue-600 text-xs font-medium">3</span>
        </div>
        PAYMENT OPTIONS
      </p>
      <div>
        <div className="cursor-pointer flex gap-2 items-center border-b-2 px-8">
          <input
            type="radio"
            name="payment_radio"
            id="online_payment"
            className="cursor-pointer"
            checked={radioSelection === 0 ? true : false}
            onChange={() => setRadioSelection(0)}
          />
          <label
            htmlFor="online_payment"
            className="text-sm cursor-pointer py-4"
          >
            Online Payment
          </label>
        </div>
        <div className="cursor-pointer flex gap-2 items-center border-b-2 px-8">
          <input
            type="radio"
            name="payment_radio"
            id="cod"
            checked={radioSelection === 1 ? true : false}
            onChange={() => setRadioSelection(1)}
          />
          <label htmlFor="cod" className="text-sm cursor-pointer py-4">
            Cash On Delivery
          </label>
        </div>
      </div>
      <div className="px-4 sm:px-8 py-4 flex flex-wrap w-full items-center">
        <span className="text-sm flex-1">
          Order confirmation email will be sent to
          <span className="font-semibold">be1newinner@gmail.com</span>
        </span>
        <button
          onClick={() => setCheckoutSteps(3)}
          className="btn btn-error mt-2 text-white text-sm font-medium px-12 py-4 rounded-none max-w-60"
        >
          {radioSelection === 0 ? "CONFIRM PAYMENT" : "CONFIRM ORDER"}
        </button>
      </div>
    </div>
  ) : (
    <div className="bg-white shadow cursor-pointer">
      <p className="flex gap-2 text-gray-500 font-semibold text-sm p-4 px-4 sm:px-8 shadow-md bg-white">
        <div className="flex w-5 h-5 bg-gray-200 rounded-sm items-center justify-center">
          <span className="text-blue-500 text-xs font-medium">3</span>
        </div>
        PAYMENT OPTIONS
      </p>
    </div>
  );
}
