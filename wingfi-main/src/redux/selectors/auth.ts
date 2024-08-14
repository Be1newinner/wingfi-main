import { RootState } from "../rootReducer";

export const selectAuthState = (state: RootState) => state.auth;

export const selectUser = (state: RootState) => state.auth.user;
export const selectAuthErrors = (state: RootState) => state.auth.authErrors;
export const selectUserPhone = (state: RootState) => state.auth.userPhone;
export const selectIsUserLoading = (state: RootState) =>
  state.auth.isUserLoading;
