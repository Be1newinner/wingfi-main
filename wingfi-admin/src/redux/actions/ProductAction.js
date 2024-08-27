import {
  FETCH_PRODUCT_FAILURE,
  FETCH_PRODUCT_REQUEST,
  FETCH_PRODUCT_SUCCESS,
} from "../constants/Product";

export const fetchProductRequest = () => {
  type: FETCH_PRODUCT_REQUEST;
};

export const fetchProductSuccess = () => {
  type: FETCH_PRODUCT_SUCCESS;
};

export const fetchProductFailure = () => {
  type: FETCH_PRODUCT_FAILURE;
};
