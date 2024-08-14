// src/store/auth/actions.ts

import {
  SET_USER,
  SET_AUTH_ERRORS,
  SET_USER_PHONE,
  SET_IS_USER_LOADING,
  AuthActionTypes,
} from "../constants/auth";

export const setUser = (user: any): AuthActionTypes => ({
  type: SET_USER,
  payload: user,
});

export const setAuthErrors = (error: string): AuthActionTypes => ({
  type: SET_AUTH_ERRORS,
  payload: error,
});

export const setUserPhone = (phone: string): AuthActionTypes => ({
  type: SET_USER_PHONE,
  payload: phone,
});

export const setIsUserLoading = (isLoading: boolean): AuthActionTypes => ({
  type: SET_IS_USER_LOADING,
  payload: isLoading,
});
