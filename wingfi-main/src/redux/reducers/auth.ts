// src/store/auth/reducer.ts

import {
  SET_USER,
  SET_AUTH_ERRORS,
  SET_USER_PHONE,
  SET_IS_USER_LOADING,
} from "../constants/auth";

import { AuthActionTypes } from "../constants/auth";

interface State {
  user: any;
  authErrors: string;
  userPhone: string;
  isUserLoading: boolean;
}

const initialState: State = {
  user: null,
  authErrors: "",
  userPhone: "",
  isUserLoading: true,
};

const authReducer = (state = initialState, action: AuthActionTypes): State => {
  switch (action.type) {
    case SET_USER:
      return { ...state, user: action.payload };
    case SET_AUTH_ERRORS:
      return { ...state, authErrors: action.payload };
    case SET_USER_PHONE:
      return { ...state, userPhone: action.payload };
    case SET_IS_USER_LOADING:
      return { ...state, isUserLoading: action.payload };
    default:
      return state;
  }
};

export default authReducer;
