import admin from "firebase-admin";

let privateKey = "";

if (process.env.FIREBASE_PRIVATE_KEY) {
  privateKey = process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, "\n");
}

const app = admin.initializeApp({
  credential: admin.credential.cert({
    projectId: process.env.FIREBASE_PROJECT_ID,
    privateKey,
    clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
  }),
  databaseURL:
    "https://wingfi-9b5b7-default-rtdb.asia-southeast1.firebasedatabase.app",
});

const firestore = admin.firestore(app);

const API_TYPES = {
  FETCH_COLLECTION: "FETCH_COLLECTION",
}

async function getCollection(body, res) {

  const { collectionPath, where = [], limit = 10 } = body;

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
}

export default async function handler(req, res) {
  try {

    // await runMiddleware(req, res);

    if (req.method !== "POST") {
      return res.status(405).json({ error: "Method Not Allowed" });
    }

    // await new Promise((resolve, reject) => {
    //   authMiddleware(req, res, (err) => {
    //     if (err) return reject(err);
    //     resolve();
    //   });
    // });

    const { api_type } = req.body;

    switch (api_type) {
      case API_TYPES.FETCH_COLLECTION: return getCollection(req.body, res);
      default: throw Error("INVALID API TYPE");
    }


  } catch (error) {
    console.error("Error fetching documents:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}