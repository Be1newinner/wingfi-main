import { all } from "redux-saga/effects";
import watchAuthActions from "./sagas/auth";
import { cartSaga } from "./sagas/cart";

export default function* rootSaga() {
  yield all([watchAuthActions(), cartSaga()]);
}
