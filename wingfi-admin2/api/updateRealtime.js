const { realtimeDb } = require("../config/firebaseInit");
const { authMiddleware } = require("../config/authMiddleware");

async function updateHandler(req, res) {
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

    // Check if the data exists
    const snapshot = await ref.once("value");
    if (!snapshot.exists()) {
      return res.status(404).json({ message: "Data not found" });
    }

    // Update the data
    await ref.update(data);

    return res.status(200).json({ message: "Data updated successfully" });
  } catch (error) {
    console.error("Error updating data:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}

module.exports = updateHandler;
