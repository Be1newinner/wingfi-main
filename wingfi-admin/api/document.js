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
  ADD_DOCUMENT: "ADD_DOCUMENT",
  DELETE_DOCUMENT: "DELETE_DOCUMENT",
  FETCH_DOCUMENT: "FETCH_DOCUMENT",
  UPDATE_DOCUMENT: "UPDATE_DOCUMENT"
}

export default async function handler(req, res) {
  try {
    if (req.method !== "POST") {
      return res.status(405).json({ error: "Method Not Allowed" });
    }

    const { api_type } = req.body;

    // await new Promise((resolve, reject) => {
    //   authMiddleware(req, res, (err) => {
    //     if (err) return reject(err);
    //     resolve();
    //   });
    // });

    switch (api_type) {
      case API_TYPES.ADD_DOCUMENT: return addDocument(req.body, res);
      case API_TYPES.DELETE_DOCUMENT: return deleteDocument(req.body, res);
      case API_TYPES.FETCH_DOCUMENT: return fetchDocument(req.body, res);
      case API_TYPES.UPDATE_DOCUMENT: return updateDocument(req.body, res);
      default: throw Error("INVALID API TYPE");
    }

  } catch (error) {
    console.error("Error Handling document API :", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}

async function addDocument(body, res) {
  const { collectionPath, data, docId } = body;

  if (!collectionPath || !data) {
    return res
      .status(400)
      .json({ error: "collectionPath and data are required" });
  }

  let docRef;
  if (docId) {
    docRef = firestore.collection(collectionPath).doc(docId);
    await docRef.set(data);
  } else {
    docRef = await firestore.collection(collectionPath).add(data);
  }

  return res
    .status(200)
    .json({ message: "Document added successfully", id: docRef.id });
}


async function deleteDocument(body, res) {

  const { documentPath } = body;

  if (!documentPath) {
    return res.status(400).json({ error: "Document path is required" });
  }

  const docRef = firestore.doc(documentPath);

  const docSnapshot = await docRef.get();

  if (!docSnapshot.exists) {
    return res.status(404).json({ error: "Document not found" });
  }

  await docRef.delete();

  return res.status(200).json({ message: "Document deleted successfully" });
}


async function fetchDocument(body, res) {
  const { collectionPath, docId } = body;

  if (!collectionPath || !docId) {
    return res
      .status(400)
      .json({ error: "collectionPath and docId are required" });
  }

  const docRef = firestore.collection(collectionPath).doc(docId);

  const docSnapshot = await docRef.get();

  if (!docSnapshot.exists) {
    return res.status(404).json({ message: "Document not found" });
  }

  const document = {
    id: docSnapshot.id,
    ...docSnapshot.data(),
  };

  return res.status(200).json(document);
}

async function updateDocument(body, res) {
  const { collectionPath, docId, data } = body;

  if (!collectionPath || !docId || !data) {
    return res
      .status(400)
      .json({ error: "collectionPath, docId, and data are required" });
  }

  const docRef = firestore.collection(collectionPath).doc(docId);

  const doc = await docRef.get();
  if (!doc.exists) {
    return res.status(404).json({ error: "Document not found" });
  }

  await docRef.update(data);

  return res.status(200).json({ message: "Document updated successfully" });
}