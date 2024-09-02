const { firestore } = require("../firebaseInit");

async function handler(req, res) {
  try {
    if (req.method !== "POST") {
      return res.status(405).json({ error: "Method Not Allowed" });
    }

    const { collectionPath, where = [], limit = 10 } = req.body;

    if (!collectionPath) {
      return res.status(400).json({ error: "collectionPath is required" });
    }

    let query = firestore.collection(collectionPath);

    if (where.length > 0) {
      where.forEach((condition) => {
        query = query.where(
          condition.field,
          condition.operator,
          condition.value
        );
      });
    }

    query = query.limit(limit);

    const snapshot = await query.get();

    if (snapshot.empty) {
      return res.status(404).json({ message: "No documents found" });
    }

    const documents = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    return res.status(200).json(documents);
  } catch (error) {
    console.error("Error fetching documents:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}

module.exports = handler;

// export default async function fetchCollection(req, res) {

// }
