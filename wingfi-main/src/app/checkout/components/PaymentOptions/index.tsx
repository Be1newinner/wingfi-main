import { Dispatch, SetStateAction, useEffect } from "react";
import PaymentOptions from "./PaymentOptions";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  selectCartPaymentMethod,
  selectCartState,
} from "@/redux/selectors/cart";
import { changePaymentMethod } from "@/redux/reducers/cart";
import {
  generateOrderRequest,
  resetGenerateOrderState,
} from "@/redux/reducers/order";
import {
  selectGenerateOrderStatusState,
  selectNewOrderIDState,
  selectOrderError,
  selectOrderLoading,
} from "@/redux/selectors/order";
import { useRouter } from "next/navigation";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { OrderStatus } from "@/redux/constants/order";

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
  const newGeneratedOrderID = useSelector(selectNewOrderIDState);
  const dispatch = useDispatch();
  const navigate: AppRouterInstance = useRouter();

  const generateOrder = () => {
    dispatch(
      generateOrderRequest({
        ...CartState,
        uid: "daudgasudi",
        id: "",
        statuses: [{ status: OrderStatus.Pending, date: Date.now() }],
        currentStatus: OrderStatus.Pending,
        customerName: "VIJAY KUMAR",
        customerPhone: "8130506284",
      })
    );
  };

  useEffect(() => {
    dispatch(resetGenerateOrderState());
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
      newOrderID={newGeneratedOrderID}
    />
  );
}
