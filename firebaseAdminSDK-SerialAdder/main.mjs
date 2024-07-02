import express from "express";
import BulkSerialAdder from "./BulkSerialAdder/index.mjs";

const app = express();
const PORT = 4522;

app.use(express.json());

app.post("/sign-up-verify-otp", async (req, res) => {
  const { key, data } = req?.body;
  if (!data) {
    res.send("Please Pass Data!");
    res.end();
    return;
  }

  const response = await BulkSerialAdder({ data });
  res.send(response);
  res.end();
});

app.listen(PORT, () => {
  console.log("App is listening on Port", PORT);
});
