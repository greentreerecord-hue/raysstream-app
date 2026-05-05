"use client";

import { useParams } from "next/navigation";

export default function WatchPage() {
  const params = useParams();

  // Only load video when slug is "test"
  const videoSrc =
    params?.slug === "test" ? "/videos/its-cool.mp4" : "";

  return (
    <div
      style={{
        padding: "20px",
        background: "#111",
        minHeight: "100vh",
        color: "white",
      }}
    >
      {videoSrc ? (
        <>
          <video
            src={videoSrc}
            controls
            autoPlay
            muted
            playsInline
            style={{
              width: "100%",
              maxWidth: "900px",
              borderRadius: "12px",
              backgroundColor: "black",
            }}
          />

          <h2 style={{ marginTop: "16px" }}>It’s Cool</h2>
        </>
      ) : (
        <h2>Video not found</h2>
      )}
    </div>
  );
} 
