import { realtimeDb } from "../config/firebaseInit";
import authMiddleware from "../config/authMiddleware";

async function createHandler(req, res) {
  try {
    if (req.method !== "POST") {
      return res.status(405).json({ error: "Method Not Allowed" });
    }

    const { path, data } = req.body;

    if (!path || !data) {
      return res.status(400).json({ error: "Path and data are required" });
    }
    await new Promise((resolve, reject) => {
      authMiddleware(req, res, (err) => {
        if (err) return reject(err);
        resolve();
      });
    });

    const ref = realtimeDb.ref(path);
    const newRef = ref.push();
    await newRef.set(data);

    return res
      .status(201)
      .json({ message: "Data added successfully", id: newRef.key });
  } catch (error) {
    console.error("Error adding data:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}

module.exports = createHandler;
