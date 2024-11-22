import { call, put, takeEvery } from "redux-saga/effects";
import {
  getDashboardServiceTrainData,
  getDashboardServiceAirData,
  getDashboardServiceBusData,
  getDashboardServiceHotelData,
  getDashboardServiceCabData
} from "../../service/api";
import {
  serviceTrainRequest,
  serviceTrainSuccess,
  serviceTrainFailure,
  serviceAirRequest,
  serviceAirSuccess,
  serviceAirFailure,
  serviceBusRequest,
  serviceBusSuccess,
  serviceBusFailure,
  serviceHotelRequest,
  serviceHotelSuccess,
  serviceHotelFailure,
  serviceCabRequest,
  serviceCabSuccess,
  serviceCabFailure
} from "../reducers/serviceReducer";

function* serviceTrainSaga(action) {
  try {
    const { page, limit } = action.payload;
    const response = yield call(getDashboardServiceTrainData, page, limit);
    const res = response.data.data;
    yield put(serviceTrainSuccess(res));
  } catch (error) {
    yield put(serviceTrainFailure(error));
  }
}

function* serviceAirSaga(action) {
  try {
    const { page, limit } = action.payload;
    const response = yield call(getDashboardServiceAirData, page, limit);
    const res = response.data.data;
    yield put(serviceAirSuccess(res));
  } catch (error) {
    yield put(serviceAirFailure(error));
  }
}

function* serviceBusSaga(action) {
  try {
    const { page, limit } = action.payload;
    const response = yield call(getDashboardServiceBusData, page, limit);
    const res = response.data.data;
    yield put(serviceBusSuccess(res));
  } catch (error) {
    yield put(serviceBusFailure(error));
  }
}

function* serviceHotelSaga(action) {
  try {
    const { page, limit } = action.payload;
    const response = yield call(getDashboardServiceHotelData, page, limit);
    const res = response.data.data;
    yield put(serviceHotelSuccess(res));
  } catch (error) {
    yield put(serviceHotelFailure(error));
  }
}

function* serviceCabSaga(action) {
  try {
    const { page, limit } = action.payload;
    const response = yield call(getDashboardServiceCabData, page, limit);
    const res = response.data.data;
    yield put(serviceCabSuccess(res));
  } catch (error) {
    yield put(serviceCabFailure(error));
  }
}

export function* serviceWatcher() {
  yield takeEvery(serviceTrainRequest.type, serviceTrainSaga);
  yield takeEvery(serviceAirRequest.type, serviceAirSaga);
  yield takeEvery(serviceBusRequest.type, serviceBusSaga);
  yield takeEvery(serviceHotelRequest.type, serviceHotelSaga);
  yield takeEvery(serviceCabRequest.type, serviceCabSaga);
}
