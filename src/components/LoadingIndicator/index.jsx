"use client";

import { Player, Controls } from "@lottiefiles/react-lottie-player";
import Loading from "./loading.json";

export default function LoadingIndicator() {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Player
        autoplay
        loop
        src={Loading}
        style={{ maxHeight: 350, maxWidth: 350, fill: "red", color:"red" }}
      >
        <Controls visible={false} />
      </Player>
    </div>
  );
}
