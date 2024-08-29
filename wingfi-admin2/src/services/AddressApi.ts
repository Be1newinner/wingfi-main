import { firebaseRealtime } from "../constants/firebase.config";
import { ref, set, push, get } from "firebase/database";
import { AddressType } from "@/redux/constants/address";
// import analysisData from "../offline/analysisData.json";

interface AddressResponse extends AddressType {
  id: string;
}

interface AddNewAddressResult {
  status: number;
  error?: any;
}

interface LoadAllAddressesResponse extends AddNewAddressResult {
  addresses?: AddressResponse[];
}

interface LoadSingleAddressResponse extends AddNewAddressResult {
  address?: AddressResponse;
}

export async function analysisData() {
  try {
    return analysisData;
  } catch (error) {
    return { status: 501, error };
  }
}

export async function addNewAddressApi({
  houseNumber,
  name,
  phoneNumber,
  pinCode,
  landmark,
  city,
  state,
  key,
  type,
  uid,
}: AddressType): Promise<AddNewAddressResult> {
  try {
    // const addressRef = push(ref(firebaseRealtime, `users/${uid}/addresses`));

    // await set(addressRef, {
    //   houseNumber,
    //   name,
    //   phoneNumber,
    //   pinCode,
    //   landmark,
    //   city,
    //   state,
    //   key,
    //   type,
    // });

    return { status: 200 };
  } catch (error) {
    return { status: 501, error };
  }
}

export async function loadAllAddressesAPI(
  uid: string
): Promise<LoadAllAddressesResponse> {
  try {
    const addressesRef = ref(firebaseRealtime, `users/${uid}/addresses`);
    const snapshot = await get(addressesRef);

    if (snapshot.exists()) {
      const addressesData = snapshot.val();
      const addresses: AddressResponse[] = Object.keys(addressesData).map(
        (key) => ({
          id: key,
          ...addressesData[key],
        })
      );

      return { status: 200, addresses };
    } else {
      return { status: 404, error: "No addresses found" };
    }
  } catch (error) {
    return { status: 501, error };
  }
}

export async function loadSingleAddressAPI(
  uid: string,
  addressId: string
): Promise<LoadSingleAddressResponse> {
  try {
    const addressRef = ref(
      firebaseRealtime,
      `users/${uid}/addresses/${addressId}`
    );
    const snapshot = await get(addressRef);

    if (snapshot.exists()) {
      const addressData = snapshot.val();
      const address: AddressResponse = {
        id: addressId,
        ...addressData,
      };

      return { status: 200, address };
    } else {
      return { status: 404, error: "Address not found" };
    }
  } catch (error) {
    return { status: 501, error };
  }
}
