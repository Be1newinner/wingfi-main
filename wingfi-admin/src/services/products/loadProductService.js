import axios from "axios";

const preURL = process.env.NODE_ENV === "development" ? "https://wingfi-admin.vercel.app" : ""

export default async function loadProductService(payload) {
    console.log("APIS 2 => ", payload);

    try {

        const data = await axios.post(preURL + "/api/fetchCollection", {
            data: {
                collectionPath: "p43duc"
            }
        });
        const response = await data.json();
        console.log("response", { response });

    } catch (error) {
        console.log(error);
    }
}