import { all } from "redux-saga/effects";

import { productsSagaWatcher } from "./sagas/products";
import { ordersSagaWatcher } from "./sagas/orders";

export default function* rootSaga() {
  yield all([productsSagaWatcher(), ordersSagaWatcher()]);
}
