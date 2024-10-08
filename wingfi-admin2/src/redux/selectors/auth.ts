import { RootState } from "../rootReducer";

export const selectAuthState = (state: RootState) => state.auth;

export const selectUser = (state: RootState) => state.auth.user;
export const selectUserName = (state: RootState) => state.auth.user.displayName;
export const selectUserPhone = (state: RootState) =>
  state.auth.user.phoneNumber;
export const selectUserEmail = (state: RootState) => state.auth.user.email;
export const selectUserUID = (state: RootState) => state.auth.user.uid;
export const selectUserIsAdmin = (state: RootState) => state.auth.user.isAdmin;
export const selectUserPhoto = (state: RootState) => state.auth.user.photoURL;
export const selectAuthErrors = (state: RootState) => state.auth.error;
export const selectIsUserLoading = (state: RootState) => state.auth.loading;
