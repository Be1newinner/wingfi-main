import { call, put, takeEvery } from "redux-saga/effects";
import { getDashboardOverview } from "../../service/api";
import { getDashboardOverviewRequest, getDashboardOverviewSuccess, getDashboardOverviewFailed } from "../reducers/getDashboardOverviewReducer";


function* getDashboardOverviewSaga(action) {
    try {
        const response = yield call(getDashboardOverview);

        const res = response.data.data || response.data;

        yield put(getDashboardOverviewSuccess(res));
    } catch (error) {
        yield put(getDashboardOverviewFailed(error));
    }
}

export function* getDashboardOverviewWatcher() {
    yield takeEvery(getDashboardOverviewRequest.type, getDashboardOverviewSaga);
}