import axios from "axios";
import StatusConverter from "@/utils/StatusConverter";

const preURL =
  process.env.NODE_ENV === "development"
    ? ""
    : "";

export default async function loadProductService() {
  try {
    const data = await axios.post(
      preURL + "/api/collection",
      {
        api_type: "FETCH_COLLECTION",
        collectionPath: "p43duc",
      },
      {
        headers: { "x-api-key": "da4T38fwe4fwDDW238" },
      }
    );
    const response = await data.data;
    // console.log("your res is : ", response);
    const mutatedData = response.map((item, index) => {
      return {
        id: item.id || "",
        label: item.l || "",
        mrp: item.m || 0,
        price: item.p || 0,
        rating: item.r || 0,
        status: StatusConverter(item.r),
        sku: item.sk || 0,
        index: index + 1,
      };
    });
    return mutatedData;
  } catch (error) {
    console.log(error);
    throw Error("Unknown Error!");
  }
}


export async function addProductService({

}) {
  console.log("your res is : ");
  try {
    const {data} = await axios.post(
      preURL + "/api/document",
      {
        api_type: "ADD_DOCUMENT",
        collectionPath: "p43duc",
        data: {
          i:"dasdasdasdasd",
          l:"",
          m:0,
          p:0,
          r:0,
          s:0,
          sk:1159,
          t:""
        },
        docId: "product_slug1"
      }
    );
    const response = await data;
    console.log("your res is : ", response);
    return response;
  } catch (error) {
    console.log(error);
    throw Error("Unknown Error!");
  }
}
