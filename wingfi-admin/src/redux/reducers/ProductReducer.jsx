import {
  FETCH_PRODUCT_FAILURE,
  FETCH_PRODUCT_REQUEST,
  FETCH_PRODUCT_SUCCESS,
} from "../constants/Product";

const initalState = { data: null, loading: false, error: null };

export const productReducer = (state = initalState, action) => {
  switch (action.type) {
    case FETCH_PRODUCT_REQUEST:
      return { ...state, loading: true };
    case FETCH_PRODUCT_SUCCESS:
      return { ...state, loading: false };
    case FETCH_PRODUCT_FAILURE:
      return { ...state, loading: false, error: console.error("error") };
    default:
      return state;
  }
};
