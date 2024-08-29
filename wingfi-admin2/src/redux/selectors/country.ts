import { RootState } from "../rootReducer";

export const selectCountry = (state: RootState) => state.country.data;