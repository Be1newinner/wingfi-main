import { Dispatch, SetStateAction } from "react";
import PaymentOptions from "./PaymentOptions";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  selectCartPaymentMethod,
  selectCartState,
} from "@/redux/selectors/cart";
import { changePaymentMethod } from "@/redux/actions/cart";
import { generateOrderRequest } from "@/redux/actions/order";
import {
  selectGenerateOrderStatusState,
  selectOrderError,
  selectOrderLoading,
} from "@/redux/selectors/order";

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

  return (
    <>
      <PaymentOptions
        checkoutSteps={checkoutSteps}
        radioSelection={radioSelection}
        setRadioSelection={(e) => {
          dispatch(changePaymentMethod(e));
        }}
        generateOrder={generateOrder}
      />
      {orderStateLoading && <p>Loading...</p>}
      {orderStateError && <p style={{ color: "red" }}>{orderStateError}</p>}
      {GenerateOrderStatus && (
        <p style={{ color: "green" }}>Order created successfully!</p>
      )}
    </>
  );
}
