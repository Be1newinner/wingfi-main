const { firestore } = require("../config/firebaseInit");
const { authMiddleware } = require("../config/authMiddleware");

async function handler(req, res) {
  try {
    if (req.method !== "POST") {
      return res.status(405).json({ error: "Method Not Allowed" });
    }

    const { collectionPath, data, docId } = req.body;

    if (!collectionPath || !data) {
      return res
        .status(400)
        .json({ error: "collectionPath and data are required" });
    }

    await new Promise((resolve, reject) => {
      authMiddleware(req, res, (err) => {
        if (err) return reject(err);
        resolve();
      });
    });

    let docRef;
    if (docId) {
      // If docId is provided, use set to create or overwrite the document with that ID
      docRef = firestore.collection(collectionPath).doc(docId);
      await docRef.set(data);
    } else {
      // If docId is not provided, use add to create a new document with an auto-generated ID
      docRef = await firestore.collection(collectionPath).add(data);
    }

    return res
      .status(200)
      .json({ message: "Document added successfully", id: docRef.id });
  } catch (error) {
    console.error("Error adding document:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}

module.exports = handler;
