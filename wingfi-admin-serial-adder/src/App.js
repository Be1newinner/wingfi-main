import { useState } from "react";
import { firestore } from "./infrastructure/firebase.config";
import { writeBatch, doc } from "firebase/firestore";

function App() {
  const [inputData, setInputData] = useState("");

  async function addData() {
    let arrData = inputData.split("\n");
    arrData = arrData.filter((e) => e !== "");
    arrData = arrData.filter((e) => e !== " ");

    try {
      if (!arrData) {
        throw new Error("Invalid Array");
      }
      const batch = await writeBatch(firestore);

      await arrData.forEach(async (item) => {
        const nycRef = await doc(firestore, "ser58ls", item);
        batch.set(nycRef, {  });
      });

      await batch
        .commit()
        .then(() => {
          throw new Error("Batch write operation completed");
        })
        .catch((error) => {
          throw new Error("Batch write operation failed: ", error);
        });
    } catch (error) {
      console.error(error);
    }

    console.log(arrData);
  }

  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        width: "100vw",
        backgroundColor: "red",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 10,
          backgroundColor: "pink",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <textarea
          placeholder="The Data"
          value={inputData}
          onChange={(event) => setInputData(event.target.value)}
          cols={50}
          rows={40}
        />
        <button onClick={() => addData()}>Add the Data</button>
      </div>
    </div>
  );
}

export default App;
