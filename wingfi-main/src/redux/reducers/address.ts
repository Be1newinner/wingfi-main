import { produce } from "immer";
import {
  AddressActionTypes,
  ADD_NEW_ADDRESS,
  REMOVE_ADDRESS,
  RESET_ADDRESS,
  LOAD_ALL_ADDRESSES,
  CHANGE_DEFAULT_ADDRESSES,
  AddressInitialState,
  AddressType,
} from "../constants/address";

const dummyAddresses: AddressType[] = [
  {
    houseNumber: "h550/9",
    name: "1Vijay Kumar",
    phoneNumber: 18130506284,
    pinCode: 1110062,
    landmark: "1m1, asthal mandir",
    city: "delhi",
    state: "delhi",
    key: 0,
    type: 0,
  },
  {
    houseNumber: "2h449/8",
    name: "2ajay kumar",
    phoneNumber: 29717099259,
    pinCode: 2110080,
    landmark: "2m2, asthal mandir",
    city: "delhi",
    state: "delhi",
    key: 1,
    type: 1,
  },
];

const initialState: AddressInitialState = {
  addresses: dummyAddresses,
  default: 0,
  isFetched: true,
};

export const addressReducer = (
  state = initialState,
  action: AddressActionTypes
): AddressInitialState =>
  produce(state, (draft) => {
    switch (action.type) {
      case ADD_NEW_ADDRESS: {
        draft.addresses.push(action.payload);
        break;
      }
      case REMOVE_ADDRESS: {
        draft.addresses = draft.addresses.filter(
          (item) => item.key !== action.payload.key
        );
        if (action.payload.key === draft.default) {
          draft.default = draft.addresses.length ? draft.addresses[0].key : 0;
        }
        break;
      }
      case RESET_ADDRESS: {
        draft.addresses = action.payload;
        draft.default = draft.addresses.length ? draft.addresses[0].key : 0;
        break;
      }
      case LOAD_ALL_ADDRESSES: {
        draft.addresses = action.payload;
        draft.default = draft.addresses.length ? draft.addresses[0].key : 0;
        draft.isFetched = true;
        break;
      }
      case CHANGE_DEFAULT_ADDRESSES: {
        // const addressExists = draft.addresses.some(
        //   (address) => address.key === action.payload.key
        // );
        // if (addressExists) {
        draft.default = action.payload.key;
        // }
        break;
      }
      default:
        return state;
    }
  });
