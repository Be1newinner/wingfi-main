// src/store/address/actions.ts

export const ADD_NEW_ADDRESS = "ADD_NEW_ADDRESS";
export const REMOVE_ADDRESS = "REMOVE_ADDRESS";
export const RESET_ADDRESS = "RESET_ADDRESS";
export const LOAD_ALL_ADDRESSES = "LOAD_ALL_ADDRESSES";
export const CHANGE_DEFAULT_ADDRESSES = "CHANGE_DEFAULT_ADDRESSES";

interface Address {
  h: string;
  n: string;
  p: number;
  pi: number;
  l: string;
  c: string;
  s: string;
  k: number;
  t: number;
}

export interface AddNewAddressAction {
  type: typeof ADD_NEW_ADDRESS;
  payload: Address;
}

export interface RemoveAddressAction {
  type: typeof REMOVE_ADDRESS;
  payload: { k: number };
}

export interface ResetAddressAction {
  type: typeof RESET_ADDRESS;
  payload: Address[];
}

export interface LoadAllAddressesAction {
  type: typeof LOAD_ALL_ADDRESSES;
}

export interface ChangeDefaultAddressesAction {
  type: typeof CHANGE_DEFAULT_ADDRESSES;
  payload: { k: number };
}

export type AddressActionTypes =
  | AddNewAddressAction
  | RemoveAddressAction
  | ResetAddressAction
  | LoadAllAddressesAction
  | ChangeDefaultAddressesAction;
