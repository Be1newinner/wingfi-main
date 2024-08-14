// src/store/auth/constants.ts

export const SET_USER = "SET_USER";
export const SET_AUTH_ERRORS = "SET_AUTH_ERRORS";
export const SET_USER_PHONE = "SET_USER_PHONE";
export const SET_IS_USER_LOADING = "SET_IS_USER_LOADING";

export const SIGN_IN_WITH_EMAIL = "SIGN_IN_WITH_EMAIL";
export const SIGN_UP_WITH_EMAIL = "SIGN_UP_WITH_EMAIL";
export const SIGN_IN_WITH_GOOGLE = "SIGN_IN_WITH_GOOGLE";
export const SIGN_OUT_USER = "SIGN_OUT_USER";
export const CHANGE_USER_DETAILS = "CHANGE_USER_DETAILS";

interface SetUserAction {
  type: typeof SET_USER;
  payload: any;
}

interface SetAuthErrorsAction {
  type: typeof SET_AUTH_ERRORS;
  payload: string;
}

interface SetUserPhoneAction {
  type: typeof SET_USER_PHONE;
  payload: string;
}

interface SetIsUserLoadingAction {
  type: typeof SET_IS_USER_LOADING;
  payload: boolean;
}

export type AuthActionTypes =
  | SetUserAction
  | SetAuthErrorsAction
  | SetUserPhoneAction
  | SetIsUserLoadingAction;
