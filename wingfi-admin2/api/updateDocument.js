const { firestore } = require("../config/firebaseInit");
const { authMiddleware } = require("../config/authMiddleware");

async function handler(req, res) {
  try {
    if (req.method !== "POST") {
      return res.status(405).json({ error: "Method Not Allowed" });
    }

    const { collectionPath, docId, data } = req.body;

    if (!collectionPath || !docId || !data) {
      return res
        .status(400)
        .json({ error: "collectionPath, docId, and data are required" });
    }

    await new Promise((resolve, reject) => {
      authMiddleware(req, res, (err) => {
        if (err) return reject(err);
        resolve();
      });
    });

    const docRef = firestore.collection(collectionPath).doc(docId);

    // Check if the document exists
    const doc = await docRef.get();
    if (!doc.exists) {
      return res.status(404).json({ error: "Document not found" });
    }

    // Update the document with the provided data
    await docRef.update(data);

    return res.status(200).json({ message: "Document updated successfully" });
  } catch (error) {
    console.error("Error updating document:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}

module.exports = handler;
