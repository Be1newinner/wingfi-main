import axios from "axios";
import StatusConverter from "@/utils/StatusConverter";

const preURL =
  process.env.NODE_ENV === "development"
    ? "https://wingfi-admin.vercel.app"
    : "";

export default async function loadOrdersService() {
  try {
    const data = await axios.post(
      preURL + "/api/fetchCollection",
      {
        collectionPath: "or73r",
      },
      {
        headers: { "x-api-key": "da4T38fwe4fwDDW238" },
      }
    );
    const response = await data.data;
    console.log("order data is :",response)
    const mutatedData = response.map((item, index) => {
      return {
        index: index + 1,
        date: item.d,
        status: StatusConverter(item.s),
        total: item.t,
        UID: item.u,
      };
    });
    return mutatedData;
  } catch (error) {
    console.log(error);
    throw Error("Unknown Error!");
  }
}
