import { put, call, takeEvery } from "redux-saga/effects";
import { getDashboardRateCardgetCabRateCard } from "../../service/api";
import { rateCardRequest, rateCardSuccess, rateCardFailure } from "../reducers/rateCardgetCab";

function* rateCardGetCabSaga(action) {
  try {
    const response = yield call(getDashboardRateCardgetCabRateCard, action.payload);
    const res = response.data.data.data;
    yield put(rateCardSuccess(res));
  } catch (error) {
    yield put(rateCardFailure(error));
  }
}

export function* rateCardSagaWatcher(){
    yield takeEvery(rateCardRequest.type, rateCardGetCabSaga);
}
