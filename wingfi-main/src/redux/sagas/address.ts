import { call, put, takeLatest, take, select } from "redux-saga/effects";
import {
  fetchAddressesRequest,
  fetchAddressesSuccess,
  fetchAddressesFailure,
  addNewAddressRequest,
  addNewAddressSuccess,
  addNewAddressFailure,
  removeAddressRequest,
  removeAddressSuccess,
  removeAddressFailure,
  updateAddressRequest,
  updateAddressSuccess,
  updateAddressFailure,
} from "../reducers/address";
import { AddressType } from "../constants/address";
import { PayloadAction } from "@reduxjs/toolkit";
import {
  addAddress,
  removeAddress,
  updateAddress,
  createAddressChannel,
} from "@/service/Address/addressService";
import { RootState } from "../rootReducer";

function* isAddressesFetched(): Generator<any, boolean, any> {
  const { isFetched, addresses } = yield select(
    (state: RootState) => state.address
  );
  return isFetched && addresses.length > 0;
}

function* fetchAddressesSaga(
  action: PayloadAction<string | null>
): Generator<any, void, any> {
  const userId = action.payload;

  if (!userId) return;

  const fetched = yield call(isAddressesFetched);
  if (fetched) return;

  const channel = yield call(createAddressChannel, userId);

  try {
    while (true) {
      const addresses = yield take(channel);
      yield put(fetchAddressesSuccess(addresses));
    }
  } catch (error: any) {
    yield put(fetchAddressesFailure(error.message));
  } finally {
    channel.close();
  }
}

function* addNewAddressSaga(action: PayloadAction<AddressType>) {
  try {
    const address = action.payload;
    const uid = action.payload.uid;
    yield call(addAddress, uid, address);
    yield put(addNewAddressSuccess(address));
  } catch (error: any) {
    yield put(addNewAddressFailure(error.message));
  }
}

function* removeAddressSaga(
  action: PayloadAction<{ userId: string; key: number }>
) {
  try {
    const { userId, key } = action.payload;
    yield call(removeAddress, userId, key);
    yield put(removeAddressSuccess({ key }));
  } catch (error: any) {
    yield put(removeAddressFailure(error.message));
  }
}

function* updateAddressSaga(
  action: PayloadAction<{ userId: string; address: AddressType }>
) {
  try {
    const { userId, address } = action.payload;
    yield call(updateAddress, userId, address);
    yield put(updateAddressSuccess(address));
  } catch (error: any) {
    yield put(updateAddressFailure(error.message));
  }
}

export default function* addressSaga() {
  yield takeLatest(fetchAddressesRequest.type, fetchAddressesSaga);
  yield takeLatest(addNewAddressRequest.type, addNewAddressSaga);
  yield takeLatest(removeAddressRequest.type, removeAddressSaga);
  yield takeLatest(updateAddressRequest.type, updateAddressSaga);
}
