import { firebaseRealtime } from "@/infrastructure/firebase.config";
import { getDatabase, ref, set, child, push } from "firebase/database";

export default async function addNewAddressController({
  Name,
  Contact,
  Add1,
  Add2,
  City,
  State,
  Pin,
  Type,
  uid,
}) {
  try {
    const addressRef = push(ref(firebaseRealtime, "users/" + uid + "/sa"));

    const data = await set(addressRef, {
      n: Name,
      p: Contact,
      h: Add1,
      l: Add2,
      c: City,
      s: State,
      pi: Pin,
      t: Type,
    });

    console.log("GETTING OK => ", data);

    return { status: 200 };
  } catch (error) {
    return { status: 501, error };
  }
}
