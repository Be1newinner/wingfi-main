import { Dispatch, SetStateAction } from "react";
import PaymentOptions from "./PaymentOptions";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { selectCartPaymentMethod } from "@/redux/selectors/cart";
import { changePaymentMethod } from "@/redux/actions/cart";

interface propTypes {
  checkoutSteps: number;
  setCheckoutSteps: Dispatch<SetStateAction<number>>;
}

export default function PaymentOptionsContainer({
  checkoutSteps,
  setCheckoutSteps,
}: propTypes) {
  const radioSelection = useSelector(selectCartPaymentMethod);
  const dispatch = useDispatch();

  return (
    <PaymentOptions
      checkoutSteps={checkoutSteps}
      setCheckoutSteps={setCheckoutSteps}
      radioSelection={radioSelection}
      setRadioSelection={(e) => {
        dispatch(changePaymentMethod(e));
      }}
    />
  );
}
