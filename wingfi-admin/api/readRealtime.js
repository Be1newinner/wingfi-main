const { realtimeDb } = require("../config/firebaseInit");
const authMiddleware = require("../config/authMiddleware");

async function readHandler(req, res) {
  try {
    if (req.method !== "POST") {
      return res.status(405).json({ error: "Method Not Allowed" });
    }

    const { path } = req.body;

    if (!path) {
      return res.status(400).json({ error: "Path is required" });
    }

    await new Promise((resolve, reject) => {
      authMiddleware(req, res, (err) => {
        if (err) return reject(err);
        resolve();
      });
    });

    const ref = realtimeDb.ref(path);
    const snapshot = await ref.once("value");

    if (!snapshot.exists()) {
      return res.status(404).json({ message: "Data not found" });
    }

    return res.status(200).json({ data: snapshot.val() });
  } catch (error) {
    console.error("Error fetching data:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}

module.exports = readHandler;
