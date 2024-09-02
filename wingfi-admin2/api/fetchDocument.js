const { firestore } = require("../firebaseInit");

async function handler(req, res) {
  try {
    if (req.method !== "POST") {
      return res.status(405).json({ error: "Method Not Allowed" });
    }

    const { collectionPath, docId } = req.body;

    if (!collectionPath || !docId) {
      return res
        .status(400)
        .json({ error: "collectionPath and docId are required" });
    }

    // Get the document reference
    const docRef = firestore.collection(collectionPath).doc(docId);

    // Fetch the document
    const docSnapshot = await docRef.get();

    if (!docSnapshot.exists) {
      return res.status(404).json({ message: "Document not found" });
    }

    // Return the document data along with the document ID
    const document = {
      id: docSnapshot.id,
      ...docSnapshot.data(),
    };

    return res.status(200).json(document);
  } catch (error) {
    console.error("Error fetching document:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}

module.exports = handler;
