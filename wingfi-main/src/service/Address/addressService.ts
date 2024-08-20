import { ref, set, remove, update, onValue } from "firebase/database";
import { firebaseRealtime } from "@/infrastructure/firebase.config";
import { AddressType } from "@/redux/constants/address";
import { EventChannel, eventChannel } from "redux-saga";

export const fetchAddresses = async (
  userId: string
): Promise<AddressType[]> => {
  const addressRef = ref(firebaseRealtime, `users/${userId}/sa`);
  return new Promise((resolve, reject) => {
    onValue(
      addressRef,
      (snapshot) => {
        const data = snapshot.val();
        resolve(data ? Object.values(data) : []);
      },
      (error: any) => {
        reject(error);
      },
      {
        onlyOnce: true,
      }
    );
  });
};

export const addAddress = async (userId: string, address: AddressType) => {
  const addressRef = ref(firebaseRealtime, `users/${userId}/sa/${address.key}`);
  await set(addressRef, address);
};

export const removeAddress = async (userId: string, key: number) => {
  const addressRef = ref(firebaseRealtime, `users/${userId}/sa/${key}`);
  await remove(addressRef);
};

export const updateAddress = async (userId: string, address: AddressType) => {
  const addressRef = ref(firebaseRealtime, `users/${userId}/sa/${address.key}`);
  await update(addressRef, address);
};

export function createAddressChannel(
  userId: string
): EventChannel<AddressType[]> {
  return eventChannel((emit) => {
    const fetchAddressesRealTime = async () => {
      try {
        const addresses = await fetchAddresses(userId);
        emit(addresses);

        const addressRef = ref(firebaseRealtime, `users/${userId}/sa`);
        const unsubscribe = onValue(addressRef, (snapshot) => {
          const data = snapshot.val();
          emit(data ? Object.values(data) : []);
        });

        return () => unsubscribe();
      } catch (error) {
        emit([]);
      }
    };

    fetchAddressesRealTime();

    return () => {};
  });
}
