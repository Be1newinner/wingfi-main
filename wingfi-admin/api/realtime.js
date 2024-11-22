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

const realtimeDb = admin.database(app);

const API_TYPES = {
  ADD_REALTIME: "ADD_REALTIME",
  DELETE_REALTIME: "DELETE_REALTIME",
  FETCH_REALTIME: "FETCH_REALTIME",
  UPDATE_REALTIME: "UPDATE_REALTIME"
}


export default async function handler(req, res) {
  try {
    if (req.method !== "POST") {
      return res.status(405).json({ error: "Method Not Allowed" });
    }

    const { api_type } = req.body;

    switch (api_type) {
      case API_TYPES.ADD_REALTIME: return addRealtime(req.body, res);
      case API_TYPES.DELETE_REALTIME: return deleteRealtime(req.body, res);
      case API_TYPES.FETCH_REALTIME: return readRealtime(req.body, res);
      case API_TYPES.UPDATE_REALTIME: return updateRealtime(req.body, res);
      default: throw Error("INVALID API TYPE");
    }

  } catch (error) {
    console.error("Error Handling document API :", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}


async function addRealtime(body, res) {
  const { path, data } = body;

  if (!path || !data) {
    return res.status(400).json({ error: "Path and data are required" });
  }

  const ref = realtimeDb.ref(path);
  const newRef = ref.push();
  await newRef.set(data);

  return res
    .status(201)
    .json({ message: "Data added successfully", id: newRef.key });
}

async function updateRealtime(body, res) {
  const { path, data } = body;

  if (!path || !data) {
    return res.status(400).json({ error: "Path and data are required" });
  }

  const ref = realtimeDb.ref(path);

  const snapshot = await ref.once("value");
  if (!snapshot.exists()) {
    return res.status(404).json({ message: "Data not found" });
  }

  await ref.update(data);

  return res.status(200).json({ message: "Data updated successfully" });
}

async function readRealtime(body, res) {
  const { path } = body;

  if (!path) {
    return res.status(400).json({ error: "Path is required" });
  }

  const ref = realtimeDb.ref(path);
  const snapshot = await ref.once("value");

  if (!snapshot.exists()) {
    return res.status(404).json({ message: "Data not found" });
  }

  return res.status(200).json({ data: snapshot.val() });
}

async function deleteRealtime(body, res) {
  const { path } = body;

  if (!path) {
    return res.status(400).json({ error: "Path is required" });
  }

  const ref = realtimeDb.ref(path);

  const snapshot = await ref.once("value");
  if (!snapshot.exists()) {
    return res.status(404).json({ message: "Data not found" });
  }

  await ref.remove();
  return res.status(200).json({ message: "Data deleted successfully" });
}