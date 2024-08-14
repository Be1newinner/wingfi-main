import { RootState } from "../rootReducer";

export const selectAddressState = (state: RootState) => state.address;

export const selectAddresses = (state: RootState) => state.address.addresses;
export const selectDefaultAddress = (state: RootState) => state.address.default;
export const selectIsFetched = (state: RootState) => state.address.isFetched;
