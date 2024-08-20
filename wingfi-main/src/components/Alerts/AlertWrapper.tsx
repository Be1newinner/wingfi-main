"use client";

import { useSelector } from "react-redux";
import { StyledAlert } from ".";
import { selectOrderError } from "@/redux/selectors/order";
import { useDispatch } from "react-redux";
import { resetGenerateOrderState } from "@/redux/reducers/order";

export default function AlertWrapper() {
  const OrderError = useSelector(selectOrderError);
  const dispatch = useDispatch();

  const exitAlertFunction = () => {
    dispatch(resetGenerateOrderState());
  };
  return (
    <StyledAlert type="error" text={OrderError} onClick={exitAlertFunction} />
  );
}
