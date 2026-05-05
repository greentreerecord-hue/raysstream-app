"use client";
import { useRef } from "react";

export default function WatchPage() {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleEnd = () => {
    // go to next video
    window.location.href = "/watch/video2";
  };

  return (
    <main style={{ padding: "20px", background: "#111827", minHeight: "100vh", color: "white" }}>
      <h1>Ray’sStream 🔥</h1>

      <video
        ref={videoRef}
        src="/videos/its-cool.mp4"
        controls
        autoPlay
        muted
        playsInline
        onEnded={handleEnd}
        style={{
          width: "100%",
          maxHeight: "500px",
          background: "black",
          borderRadius: "12px",
        }}
      />

      <h2>It’s Cool</h2>
      <p>Auto plays + goes to next video</p>
    </main>
  );
}
