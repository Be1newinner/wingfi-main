import { auth } from "../config/firebaseInit.js";

export default async function readHandler(req, res) {
    try {
        if (req.method !== "POST") {
            return res.status(405).json({ error: "Method Not Allowed" });
        }

        const { nextPageToken, limit } = req.body;

        // Await the result of listAllUsers
        const users = await listAllUsers({ nextPageToken, limit });

        // Return the users in the response
        return res.status(200).json({ data: users });
    } catch (error) {
        console.error("Error fetching data:", error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
}

const listAllUsers = async ({ nextPageToken, limit }) => {
    let allUsers = []; // Array to collect all users

    // Recursive function to list all users
    const getUsers = async (pageToken) => {
        try {
            const listUsersResult = await auth.listUsers(limit, pageToken);

            // Add the current batch of users to the array
            allUsers = [...allUsers, ...listUsersResult.users.map((userRecord) => userRecord.toJSON())];

            // If there's a next page token, recursively call getUsers to fetch more users
            if (listUsersResult.pageToken) {
                await getUsers(listUsersResult.pageToken);
            }
        } catch (error) {
            console.log('Error listing users:', error);
            throw error;
        }
    };

    // Start fetching users
    await getUsers(nextPageToken);

    return allUsers;
};
