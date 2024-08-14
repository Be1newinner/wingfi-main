// src/store/address/reducer.ts

import { produce } from "immer";
import {
  AddressActionTypes,
  ADD_NEW_ADDRESS,
  REMOVE_ADDRESS,
  RESET_ADDRESS,
  LOAD_ALL_ADDRESSES,
  CHANGE_DEFAULT_ADDRESSES,
} from "../constants/address";

interface Address {
  h: string;
  n: string;
  p: number;
  pi: number;
  l: string;
  c: string;
  s: string;
  k: number;
  t: number;
}

interface State {
  addresses: Address[];
  default: number;
  isFetched: boolean;
}

const initialState: State = {
  addresses: [
    {
      h: "h550/9",
      n: "1Vijay Kumar",
      p: 18130506284,
      pi: 1110062,
      l: "1m1, asthal mandir",
      c: "delhi",
      s: "delhi",
      k: 0,
      t: 0,
    },
    {
      h: "2h449/8",
      n: "2ajay kumar",
      p: 29717099259,
      pi: 2110080,
      l: "2m2, asthal mandir",
      c: "delhi",
      s: "delhi",
      k: 1,
      t: 1,
    },
  ],
  default: 0,
  isFetched: false,
};

export const addressReducer = (
  state = initialState,
  action: AddressActionTypes
): State =>
  produce(state, (draft) => {
    switch (action.type) {
      case ADD_NEW_ADDRESS: {
        draft.addresses.push(action.payload);
        break;
      }
      case REMOVE_ADDRESS: {
        draft.addresses = draft.addresses.filter(
          (item) => item.k !== action.payload.k
        );
        if (action.payload.k === draft.default) {
          draft.default = draft.addresses.length ? draft.addresses[0].k : 0;
        }
        break;
      }
      case RESET_ADDRESS: {
        draft.addresses = action.payload;
        draft.default = 0;
        break;
      }
      case LOAD_ALL_ADDRESSES: {
        draft.addresses = [];
        draft.default = 0;
        break;
      }
      case CHANGE_DEFAULT_ADDRESSES: {
        draft.default = action.payload.k;
        break;
      }
      default: {
        console.error("Invalid Action Call!");
        if (process.env.NODE_ENV === "development") {
          console.error(`Unhandled action type:`);
        }
      }
    }
  });
