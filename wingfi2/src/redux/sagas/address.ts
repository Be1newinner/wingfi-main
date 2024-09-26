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
import { EventChannel } from "redux-saga";

// Helper function to check if addresses are already fetched
function* isAddressesFetched(): Generator<
  unknown,
  boolean,
  { isFetched: boolean; addresses: AddressType[] }
> {
  const { isFetched, addresses } = yield select(
    (state: RootState) => state.address
  );
  return isFetched && addresses.length > 0;
}

// Fetch addresses saga
function* fetchAddressesSaga(
  action: PayloadAction<string | null>
): Generator<unknown, void, EventChannel<AddressType[]>> {
  const userId = action.payload;
  if (!userId) return;

  const fetched = yield call(isAddressesFetched);
  if (fetched) return;

  fetchChannel(userId);
}

function* fetchChannel(userId: string) {
  const channel: EventChannel<AddressType[]> = yield call(
    createAddressChannel,
    userId
  );

  try {
    while (true) {
      const addresses: AddressType[] = yield take(channel);
      yield put(fetchAddressesSuccess(addresses));
    }
  } catch (error: unknown) {
    if (error instanceof Error) {
      yield put(fetchAddressesFailure(error.message));
    } else {
      yield put(fetchAddressesFailure("An unknown error occurred"));
    }
  } finally {
    channel.close();
  }
}

// Add new address saga
function* addNewAddressSaga(
  action: PayloadAction<AddressType>
): Generator<unknown, void, unknown> {
  try {
    const address = action.payload;
    const uid = address.uid;
    yield call(addAddress, uid, address);
    yield put(addNewAddressSuccess(address));
  } catch (error: unknown) {
    if (error instanceof Error) {
      yield put(addNewAddressFailure(error.message));
    } else {
      yield put(addNewAddressFailure("An unknown error occurred"));
    }
  }
}

// Remove address saga
function* removeAddressSaga(
  action: PayloadAction<{ userId: string; key: number }>
): Generator<unknown, void, unknown> {
  try {
    const { userId, key } = action.payload;
    yield call(removeAddress, userId, key);
    yield put(removeAddressSuccess(key));
  } catch (error: unknown) {
    if (error instanceof Error) {
      yield put(removeAddressFailure(error.message));
    } else {
      yield put(removeAddressFailure("An unknown error occurred"));
    }
  }
}

// Update address saga
function* updateAddressSaga(
  action: PayloadAction<{ userId: string; address: AddressType }>
): Generator<unknown, void, unknown> {
  try {
    const { userId, address } = action.payload;
    yield call(updateAddress, userId, address);
    yield put(updateAddressSuccess(address));
  } catch (error: unknown) {
    if (error instanceof Error) {
      yield put(updateAddressFailure(error.message));
    } else {
      yield put(updateAddressFailure("An unknown error occurred"));
    }
  }
}

// Watcher saga
export default function* addressSaga() {
  yield takeLatest(fetchAddressesRequest.type, fetchAddressesSaga);
  yield takeLatest(addNewAddressRequest.type, addNewAddressSaga);
  yield takeLatest(removeAddressRequest.type, removeAddressSaga);
  yield takeLatest(updateAddressRequest.type, updateAddressSaga);
}
