import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AddressType } from "../constants/address";

interface AddressState {
  addresses: AddressType[];
  default: number | null;
  isFetched: boolean;
  isLoading: boolean;
  error: string | null;
  adding: boolean;
  removing: boolean;
  updating: boolean;
}

const initialState: AddressState = {
  addresses: [],
  default: null,
  isFetched: false,
  isLoading: false,
  error: null,
  adding: false,
  removing: false,
  updating: false,
};

const addressSlice = createSlice({
  name: "address",
  initialState,
  reducers: {
    fetchAddressesRequest(state, action: PayloadAction<string>) {
      console.log(action.payload);
      state.isLoading = true;
      state.error = null;
    },
    fetchAddressesSuccess(state, action: PayloadAction<AddressType[]>) {
      state.addresses = action.payload;
      state.default = action.payload.length ? action.payload[0].key : null;
      state.isFetched = true;
      state.isLoading = false;
    },
    fetchAddressesFailure(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
    addNewAddressRequest(state, action: PayloadAction<AddressType>) {
      console.log(action.payload);
      state.adding = true;
      state.error = null;
    },
    addNewAddressSuccess(state, action: PayloadAction<AddressType>) {
      const index = state.addresses.findIndex(
        (address) => address.key === action.payload.key
      );

      if (index === -1) state.addresses.push(action.payload);

      state.default = action.payload.key;
      state.adding = false;
    },
    addNewAddressFailure(state, action: PayloadAction<string>) {
      state.adding = false;
      state.error = action.payload;
    },
    removeAddressRequest(
      state,
      action: PayloadAction<{ key: number; userId: string }>
    ) {
      console.log(action.payload);
      state.removing = true;
      state.error = null;
    },
    removeAddressSuccess(state, action: PayloadAction<number>) {
      state.addresses = state.addresses.filter(
        (item) => item.key !== action.payload
      );
      if (state.default === action.payload) {
        state.default = state.addresses.length ? state.addresses[0].key : null;
      }
      state.removing = false;
    },
    removeAddressFailure(state, action: PayloadAction<string>) {
      state.removing = false;
      state.error = action.payload;
    },
    updateAddressRequest(state, action: PayloadAction<string>) {
      console.log(action.payload);
      state.updating = true;
      state.error = null;
    },
    updateAddressSuccess(state, action: PayloadAction<AddressType>) {
      const index = state.addresses.findIndex(
        (address) => address.key === action.payload.key
      );
      if (index !== -1) {
        state.addresses[index] = action.payload;
      }
      state.updating = false;
    },
    updateAddressFailure(state, action: PayloadAction<string>) {
      state.updating = false;
      state.error = action.payload;
    },
    changeDefaultAddress(state, action: PayloadAction<number>) {
      state.default = action.payload;
    },
  },
});

export const {
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
  changeDefaultAddress,
} = addressSlice.actions;

export default addressSlice.reducer;
