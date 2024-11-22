import { put, call, takeEvery } from "redux-saga/effects";
import { getLogs } from "../../service/api";
import { getLogRequest, getLogSuccess, getLogFailure } from "../reducers/getLogReducer";

function* getLogSaga(action) {
  try {
    const { page, limit } = action.payload;
    const response = yield call(getLogs, page, limit);  
    const res = response.data.data || response.data;  // Adjust response format if needed
    yield put(getLogSuccess(res));
  } catch (error) {
    yield put(getLogFailure(error));
  }
}

export function* getLogWatcher(){
  yield takeEvery(getLogRequest.type, getLogSaga);
}
