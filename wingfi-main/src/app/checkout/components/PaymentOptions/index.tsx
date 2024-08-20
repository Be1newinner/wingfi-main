import { Dispatch, SetStateAction, useEffect } from "react";
import PaymentOptions from "./PaymentOptions";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  selectCartPaymentMethod,
  selectCartState,
} from "@/redux/selectors/cart";
import { changePaymentMethod } from "@/redux/actions/cart";
import {
  generateOrderRequest,
  resetGenerateOrder,
} from "@/redux/actions/order";
import {
  selectGenerateOrderStatusState,
  selectOrderError,
  selectOrderLoading,
} from "@/redux/selectors/order";
import { useRouter } from "next/navigation";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

interface propTypes {
  checkoutSteps: number;
  setCheckoutSteps: Dispatch<SetStateAction<number>>;
}

export default function PaymentOptionsContainer({ checkoutSteps }: propTypes) {
  const radioSelection = useSelector(selectCartPaymentMethod);
  const CartState = useSelector(selectCartState);
  const orderStateLoading = useSelector(selectOrderLoading);
  const orderStateError = useSelector(selectOrderError);
  const GenerateOrderStatus = useSelector(selectGenerateOrderStatusState);
  const dispatch = useDispatch();
  const navigate: AppRouterInstance = useRouter();

  const generateOrder = () => {
    dispatch(
      generateOrderRequest({
        ...CartState,
        uid: "daudgasudi",
        id: "",
        status: {
          s0: {
            date: Date.now(),
          },
        },
        name: "VIJAY KUMAR",
        phone: "8130506284",
      })
    );
  };

  useEffect(() => {
    dispatch(resetGenerateOrder());
  }, [dispatch]);

  return (
    <PaymentOptions
      checkoutSteps={checkoutSteps}
      radioSelection={radioSelection}
      setRadioSelection={(e) => {
        dispatch(changePaymentMethod(e));
      }}
      generateOrder={generateOrder}
      orderApiError={orderStateError}
      orderApiLoading={orderStateLoading}
      generateOrderStatus={GenerateOrderStatus}
      navigate={navigate}
    />
  );
}
