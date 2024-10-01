import { auth } from "../config/firebaseInit";
import authMiddleware from "../config/authMiddleware";

async function readHandler(req, res) {
    try {
        if (req.method !== "POST") {
            return res.status(405).json({ error: "Method Not Allowed" });
        }

        await new Promise((resolve, reject) => {
            authMiddleware(req, res, (err) => {
                if (err) return reject(err);
                resolve();
            });
        });

        const { nextPageToken, limit } = req.body;
        listAllUsers({ nextPageToken, limit });

        return res.status(200).json({ data: snapshot.val() });
    } catch (error) {
        console.error("Error fetching data:", error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
}

module.exports = readHandler;

const listAllUsers = ({ nextPageToken, limit }) => {
    getAuth(auth)
        .listUsers(limit, nextPageToken)
        .then((listUsersResult) => {
            listUsersResult.users.forEach((userRecord) => {
                console.log('user', userRecord.toJSON());
            });
            if (listUsersResult.pageToken) {
                // List next batch of users.
                listAllUsers(listUsersResult.pageToken);
            }
        })
        .catch((error) => {
            console.log('Error listing users:', error);
        });
};