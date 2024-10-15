import admin from "firebase-admin";

let privateKey = "";

if (process.env.FIREBASE_PRIVATE_KEY) {
    privateKey = process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, "\n");
}

const app = admin.initializeApp({
    credential: admin.credential.cert({
        projectId: process.env.FIREBASE_PROJECT_ID,
        privateKey,
        clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
    }),
    databaseURL:
        "https://wingfi-9b5b7-default-rtdb.asia-southeast1.firebasedatabase.app",
});

const auth = admin.auth(app);

const API_TYPES = {
    GET_LIST_USERS: "GET_LIST_USERS",
}


export default async function readHandler(req, res) {
    try {
        if (req.method !== "POST") {
            return res.status(405).json({ error: "Method Not Allowed" });
        }

        const { api_type } = req.body;

        switch (api_type) {
            case API_TYPES.GET_LIST_USERS: return readUserList(req.body, res);
            default: throw Error("INVALID API TYPE");
        }

    } catch (error) {
        console.log("ERROR: ", error.message);

        if (error.message === "INVALID API TYPE") {
            return res.status(500).json({ error: error.message });
        }
        return res.status(500).json({ error: "Internal Server Error" });
    }
}


async function readUserList(body, res) {
    const { nextPageToken, limit } = body;

    const data = await auth.listUsers(limit ? Math.min(limit, 5) : 5, nextPageToken)

    return res.status(200).json({ data });
}