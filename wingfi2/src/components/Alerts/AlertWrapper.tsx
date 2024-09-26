"use client";

import { useSelector } from "react-redux";
import { StyledAlert } from ".";
import { selectOrderError } from "@/redux/selectors/order";
import { useDispatch } from "react-redux";
import { resetGenerateOrderState } from "@/redux/reducers/order";
import { useCallback, useEffect } from "react";

export default function AlertWrapper() {
  const OrderError = useSelector(selectOrderError);
  const dispatch = useDispatch();

  const exitAlertFunction = useCallback(() => {
    dispatch(resetGenerateOrderState());
  }, [dispatch]);

  useEffect(() => {
    setTimeout(() => exitAlertFunction(), 10000);
  }, [exitAlertFunction]);

  return (
    <StyledAlert type="error" text={OrderError} onClick={exitAlertFunction} />
  );
}
