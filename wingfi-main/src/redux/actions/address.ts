import {
  AddressType,
  ADD_NEW_ADDRESS,
  REMOVE_ADDRESS,
  RESET_ADDRESS,
  LOAD_ALL_ADDRESSES,
  CHANGE_DEFAULT_ADDRESSES,
} from "../constants/address";

export const addNewAddress = (payload: AddressType) => ({
  type: ADD_NEW_ADDRESS,
  payload,
});

export const removeAddress = (payload: { key: number }) => ({
  type: REMOVE_ADDRESS,
  payload,
});

export const resetAddress = (payload: AddressType[]) => ({
  type: RESET_ADDRESS,
  payload,
});

export const loadAllAddresses = (payload: AddressType[]) => ({
  type: LOAD_ALL_ADDRESSES,
  payload,
});

export const changeDefaultAddress = (payload: { key: number }) => ({
  type: CHANGE_DEFAULT_ADDRESSES,
  payload,
});
