import { ref, get } from "firebase/database";
import { firebaseRealtime } from "../../infrastructure/firebase.config";

export default async function getAllAddresses({ uid }) {
  let response = { error: null, data: [], status: 404 };

  try {
    if (!uid) {
      response.error = "No UID Passed!";
      response.status = 401;
      return response;
    }

    const addressRef = ref(firebaseRealtime, `/users/${uid}/sa`);

    const snapshot = await get(addressRef);
    if (snapshot.exists()) {
      response.data = snapshot.val();
      response.status = 200;
    } else {
      response.error = "No data available";
      response.status = 404;
    }

    console.log("saved response", response);
    return response;
  } catch (error) {
    response.error = JSON.stringify(error);
    response.status = 500;
    return response;
  }
}
