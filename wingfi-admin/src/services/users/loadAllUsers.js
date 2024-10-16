import axios from "axios";

const preURL = process.env.NODE_ENV === "development" ? "" : "";

export default async function loadProductService() {
  try {
    const data = await axios.post(preURL + "/api/users", {
      api_type: "GET_LIST_USERS",
    });

    const response = await data.data.data.users;
    // console.log("users res is : ", response);

    const mutatedData = response.map((item, index) => {
      return {
        index: index + 1,
        name: item.displayName,
        UID: item.uid,
        email: item.email,
        emailVerified: item.emailVerified,
      };
    });


    return mutatedData;
  } catch (error) {
    console.log(error);
    throw Error("Unknown Error!");
  }
}
