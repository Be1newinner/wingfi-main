import { ref, set, remove, update, onValue } from "firebase/database";
import { firebaseRealtime } from "@/infrastructure/firebase.config";
import { AddressType } from "@/redux/constants/address";
import { EventChannel, eventChannel } from "redux-saga";

const toAddressType = (
  firebaseAddress: any,
  key: number,
  uid: string
): AddressType => ({
  houseNumber: firebaseAddress.h,
  name: firebaseAddress.n,
  phoneNumber: firebaseAddress.p,
  pinCode: firebaseAddress.pi,
  landmark: firebaseAddress.l,
  city: firebaseAddress.c,
  state: firebaseAddress.s,
  key,
  type: firebaseAddress.t,
  uid,
});

const toFirebaseAddress = (address: AddressType): any => ({
  h: address.houseNumber,
  n: address.name,
  p: address.phoneNumber,
  pi: address.pinCode,
  l: address.landmark,
  c: address.city,
  s: address.state,
  t: address.type,
});

const addressRef = (userId: string, key?: number) => {
  if (key) return ref(firebaseRealtime, `users/${userId}/sa/${key}`);
  else return ref(firebaseRealtime, `users/${userId}/sa`);
};

// Fetch addresses from Firebase
export const fetchAddresses = async (
  userId: string
): Promise<AddressType[]> => {
  return new Promise((resolve, reject) => {
    onValue(
      addressRef(userId),
      (snapshot) => {
        const data = snapshot.val();
        if (data) {
          const addresses = Object.entries(data).map(([key, value]) =>
            toAddressType(value, Number(key), userId)
          );
          resolve(addresses);
        } else {
          resolve([]);
        }
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

export const addAddress = async (uid: string, address: AddressType) => {
  await set(addressRef(uid, address.key), toFirebaseAddress(address));
};

export const removeAddress = async (userId: string, key: number) => {
  await remove(addressRef(userId, key));
};

export const updateAddress = async (userId: string, address: AddressType) => {
  await update(addressRef(userId, address.key), toFirebaseAddress(address));
};

export function createAddressChannel(
  userId: string
): EventChannel<AddressType[]> {
  return eventChannel((emit) => {
    const fetchAddressesRealTime = async () => {
      try {
        const addresses = await fetchAddresses(userId);
        emit(addresses);

        const unsubscribe = onValue(addressRef(userId), (snapshot) => {
          const data = snapshot.val();
          if (data) {
            const addresses = Object.entries(data).map(([key, value]) =>
              toAddressType(value, Number(key), userId)
            );
            emit(addresses);
          } else {
            emit([]);
          }
        });

        return () => unsubscribe();
      } catch (error) {
        emit([]);
        console.error("Error creating address channel:", error);
      }
    };

    fetchAddressesRealTime();

    return () => {};
  });
}
