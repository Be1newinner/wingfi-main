import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { useEffect } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

interface propTypes {
  checkoutSteps: number;
  radioSelection: number;
  setRadioSelection: (e: number) => void;
  generateOrder: () => void;
  orderApiError: string | null;
  orderApiLoading: boolean;
  generateOrderStatus: boolean;
  navigate: AppRouterInstance;
}

export default function PaymentOptions({
  checkoutSteps,
  radioSelection,
  setRadioSelection,
  generateOrder,
  orderApiError,
  orderApiLoading,
  generateOrderStatus,
  navigate,
}: propTypes) {
  useEffect(() => {
    if (generateOrderStatus) {
      navigate.replace("/review");
    }
  }, [generateOrderStatus, navigate]);

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
          onClick={() =>
            (
              document.getElementById(
                "payment_confirm_dialog"
              ) as HTMLDialogElement
            ).showModal()
          }
          className="btn btn-error mt-2 text-white text-sm font-medium px-12 py-4 rounded-none max-w-60"
        >
          {radioSelection === 0 ? "CONFIRM PAYMENT" : "CONFIRM ORDER"}
        </button>
      </div>

      <dialog id="payment_confirm_dialog" className="modal">
        <div className="modal-box rounded-sm">
          <h3 className="font-bold text-lg">Confirm Order!</h3>
          <p className="py-4">press continue to confirm this order!</p>

          <div>
            <form method="dialog" className="flex">
              {!orderApiLoading && (
                <button className="btn btn-error btn-outline mt-2 text-sm font-medium p-4 px-8 rounded-none flex-1">
                  close
                </button>
              )}
              <button
                onClick={(e) => {
                  e.preventDefault();
                  !orderApiLoading && generateOrder();
                }}
                className={`flex-1 btn btn-error mt-2 text-white text-sm font-medium py-4 px-8 rounded-none`}
              >
                {orderApiLoading ? (
                  <AiOutlineLoading3Quarters
                    color="white"
                    size={14}
                    className="animate-spin"
                  />
                ) : (
                  "Continue"
                )}
              </button>
            </form>
          </div>
        </div>
      </dialog>
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
