// import { generateOrderAPI2 } from "@/services/order2";
// import { call, put, takeEvery } from "redux-saga/effects";
// import {
//   generateOrderFailure,
//   generateOrderRequest,
//   generateOrderSuccess,
// } from "../reducers/order";

// function* generateOrderSaga2() {
//   try {
//     const order = yield call(generateOrderAPI2);
//     yield put(generateOrderSuccess(order));
//   } catch (error) {
//     yield put(generateOrderFailure(console.error("error")));
//   }
// }

// export function* watchOrderSaga() {
//   yield takeEvery(generateOrderRequest, generateOrderSaga2);
// }
