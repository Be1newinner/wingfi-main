import { firebaseRealtime } from "@/infrastructure/firebase.config";
import { get, ref, set } from "firebase/database";

export async function getAddresses(User) {
  if (User?.uid) {
    const data = await JSON.parse(localStorage.getItem("savedAddresses"));
    if (!data) {
      let newData = [];
      await get(ref(firebaseRealtime, "users/" + User?.uid + "/sa")).then(
        (snapshot) => {
          if (snapshot.exists()) {
            newData = snapshot.val();
            localStorage.setItem("savedAddresses", JSON.stringify(newData));
            return newData;
          }
        }
      );
    } else return data;
  }
}

export async function deleteAddresses(User, key) {
  if (User) {
    if (!key) {
      return { status: 501, error: "No key found!", response: null };
    }

    const response = await set(
      ref(firebaseRealtime, "users/" + User?.uid + "/sa/" + key),
      null
    );
    return { status: 200, response, error: null };
  } else {
    return { status: 501, error: "No User found!", response: null };
  }
}
