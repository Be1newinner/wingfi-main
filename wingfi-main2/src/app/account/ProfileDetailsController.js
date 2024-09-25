import { firebaseRealtime } from "@/infrastructure/firebase.config";
import { get, ref, set } from "firebase/database";

export async function getPhoneNumber(User) {
  if (User?.uid) {
    const data = await localStorage.getItem("wi-phone");
    if (!data) {
      let newData = [];
      await get(ref(firebaseRealtime, "users/" + User?.uid + "/p")).then(
        (snapshot) => {
          if (snapshot.exists()) {
            newData = snapshot.val();
            localStorage.setItem("wi-phone", newData);
            return newData;
          }
        }
      );
    } else return data;
  }
}

export async function changePhoneNumber({ User, phone }) {
  if (User) {
    if (!phone) {
      return { status: 500, error: "No phone found!", response: null };
    }

    try {
      const response = await set(
        ref(firebaseRealtime, "users/" + User?.uid + "/p"),
        phone
      );
      localStorage.setItem("wi-phone", phone);
      return { status: 200, response, error: null };
    } catch (error) {
      return { status: 502, error: "Unknown Error!", response: null };
    }
  } else {
    return { status: 501, error: "No User found!", response: null };
  }
}
