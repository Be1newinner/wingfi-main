const { firestore } = require("../config/firebaseInit");
const { authMiddleware } = require("../config/authMiddleware");

async function deleteDocumentHandler(req, res) {
  try {
    if (req.method !== "POST") {
      return res.status(405).json({ error: "Method Not Allowed" });
    }

    const { documentPath } = req.body;

    if (!documentPath) {
      return res.status(400).json({ error: "Document path is required" });
    }

    await new Promise((resolve, reject) => {
      authMiddleware(req, res, (err) => {
        if (err) return reject(err);
        resolve();
      });
    });

    // Get a reference to the document
    const docRef = firestore.doc(documentPath);

    // Check if the document exists
    const docSnapshot = await docRef.get();

    if (!docSnapshot.exists) {
      return res.status(404).json({ error: "Document not found" });
    }

    // Delete the document
    await docRef.delete();

    return res.status(200).json({ message: "Document deleted successfully" });
  } catch (error) {
    console.error("Error deleting document:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}

module.exports = deleteDocumentHandler;
