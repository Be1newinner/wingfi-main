import { call, put, takeEvery } from "redux-saga/effects";

import {
        ordersLoadRequest,
        ordersLoadSuccess,
        ordersLoadFailure,
        // setCurrentPage,
        totalOrdersRequest,
        totalOrdersSuccess,
        totalOrdersFailure
} from "../reducers/order";

import loadProductService from "../../services/products/loadProductService";

function* loadAllOrdersSaga(action) {
        try {
                console.log("payload => ", action.payload)
                const Orders = yield call(loadProductService, action.payload);
                yield put(ordersLoadSuccess(Orders));
        } catch (error) {
                if (error instanceof Error) {
                        yield put(ordersLoadFailure(error.message));
                } else {
                        yield put(ordersLoadFailure("Unknown error occurred"));
                }
        }
}

export function* OrdersSagaWatcher() {
        yield takeEvery(ordersLoadRequest.type, loadAllOrdersSaga);
}