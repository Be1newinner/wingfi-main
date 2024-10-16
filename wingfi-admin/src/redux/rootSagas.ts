import { all } from "redux-saga/effects";

import { productsSagaWatcher } from "./sagas/products";
import { ordersSagaWatcher } from "./sagas/orders";
import { usersSagaWatcher } from "./sagas/users";

export default function* rootSaga() {
  yield all([productsSagaWatcher(), ordersSagaWatcher(), usersSagaWatcher()]);
}
