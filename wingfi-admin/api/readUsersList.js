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

async function readHandler(req, res) {
    try {
        if (req.method !== "POST") {
            return res.status(405).json({ error: "Method Not Allowed" });
        }

        const { nextPageToken, limit = Math.min(limit, 5) } = req.body;

        const data = await auth.listUsers(limit, nextPageToken)

        return res.status(200).json({ data });
    } catch (error) {
        console.error("Error fetching data:", error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
}

export default readHandler;