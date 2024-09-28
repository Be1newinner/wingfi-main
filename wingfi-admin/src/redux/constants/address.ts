export const ADD_NEW_ADDRESS = "ADD_NEW_ADDRESS";
export const REMOVE_ADDRESS = "REMOVE_ADDRESS";
export const RESET_ADDRESS = "RESET_ADDRESS";
export const LOAD_ALL_ADDRESSES = "LOAD_ALL_ADDRESSES";
export const CHANGE_DEFAULT_ADDRESSES = "CHANGE_DEFAULT_ADDRESSES";

export interface BasicAddressFields {
  houseNumber: string;
  name: string;
  phoneNumber: number;
  pinCode: number;
  landmark: string;
  city: string;
  state: string;
  type: "home" | "work" | "other";
}

export interface AddressType extends BasicAddressFields {
  key: number;
  uid: string;
}

export interface RemoveAddressAction {
  type: typeof REMOVE_ADDRESS;
  payload: { key: number };
}

export interface ResetAddressAction {
  type: typeof RESET_ADDRESS;
  payload: AddressType[];
}

export interface LoadAllAddressesAction {
  type: typeof LOAD_ALL_ADDRESSES;
  payload: AddressType[];
}

export interface ChangeDefaultAddressesAction {
  type: typeof CHANGE_DEFAULT_ADDRESSES;
  payload: { key: number };
}

export interface AddressInitialState {
  addresses: AddressType[];
  default: number | null;
  isFetched: boolean;
  isLoading: boolean;
  error: string | null;
}

export type AddressActionTypes =
  // | AddNewAddressAction
  | RemoveAddressAction
  | ResetAddressAction
  | LoadAllAddressesAction
  | ChangeDefaultAddressesAction;
