import axios from "axios";

const preURL = process.env.NODE_ENV === "development" ? "" : "";

export default async function loadProductService() {
  try {
    const data = await axios.post(preURL + "/api/users", {
      api_type: "GET_LIST_USERS",
    });

    const response = await data.data;
    console.log("users res is : ", response);
    return response;
  } catch (error) {
    console.log(error);
    throw Error("Unknown Error!");
  }
}
