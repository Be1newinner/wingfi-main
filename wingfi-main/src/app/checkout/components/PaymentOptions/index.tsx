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
import { selectOrderLoading } from "@/redux/selectors/order";
import { Order, OrderStatus } from "@/redux/constants/order";
import { selectDefaultAddressObject } from "@/redux/selectors/address";
import { selectUserUID } from "@/redux/selectors/auth";

interface propTypes {
  checkoutSteps: number;
  setCheckoutSteps: Dispatch<SetStateAction<number>>;
}

export default function PaymentOptionsContainer({ checkoutSteps }: propTypes) {
  const radioSelection = useSelector(selectCartPaymentMethod);
  const CartState = useSelector(selectCartState);
  const orderStateLoading = useSelector(selectOrderLoading);
  const defaultAddress = useSelector(selectDefaultAddressObject);
  const AuthUID = useSelector(selectUserUID);

  const dispatch = useDispatch();

  const generateOrder = () => {
    if (defaultAddress && CartState.total && AuthUID) {
      const completeAddress =
        defaultAddress?.houseNumber +
        ", " +
        defaultAddress?.landmark +
        ", " +
        defaultAddress?.city +
        ", " +
        defaultAddress?.state;

      const OrderData: Order = {
        uid: AuthUID,
        id: "",
        statuses: [{ status: OrderStatus.Pending, date: Date.now() }],
        currentStatus: OrderStatus.Pending,
        customerName: defaultAddress.name,
        customerPhone: defaultAddress.phoneNumber,
        items: CartState.items,
        total: CartState.total,
        subtotal: CartState.subtotal,
        tax: CartState.tax,
        delivery: CartState.delivery,
        qty: CartState.qty,
        discount: CartState.discount,
        customerAddress: {
          fulladdress: completeAddress,
          pincode: defaultAddress?.pinCode,
        },
        paymentMethod: CartState.paymentMethod,
      };

      dispatch(generateOrderRequest(OrderData));
    } else {
      console.log(
        "Something went wrong => ",
        defaultAddress,
        CartState.total,
        AuthUID
      );
    }
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
      orderApiLoading={orderStateLoading}
    />
  );
}
