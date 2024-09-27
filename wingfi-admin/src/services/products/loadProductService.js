import axios from "axios";

const preURL = process.env.NODE_ENV === "development" ? "https://wingfi-admin.vercel.app" : ""

export default async function loadProductService() {
    try {

        const data = await axios.post(preURL + "/api/fetchCollection", {
            collectionPath: "p43duc"
        }, {
            headers: { 'x-api-key': 'da4T38fwe4fwDDW238' },
        });
        const response = await data.data;
        console.log("response", { response });
        return response;

    } catch (error) {
        console.log(error);
        throw Error("Unknown Error!");
    }
}