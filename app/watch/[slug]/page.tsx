"use client";

import { useEffect, useState } from "react";

export default function WatchPage() {
  const [videoError, setVideoError] = useState(false);

  useEffect(() => {
    console.log("Watch page loaded");
  }, []);

  return (
    <main style={{ padding: "24px", fontFamily: "Arial, sans-serif" }}>
      <h1>Ray’sStream Player WORKING</h1>

      {!videoError ? (
        <video
          controls
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          onError={() => {
            console.log("VIDEO FAILED TO LOAD");
            setVideoError(true);
          }}
          style={{
            width: "100%",
            maxWidth: "900px",
            height: "360px",
            backgroundColor: "black",
            borderRadius: "12px",
          }}
        >
          <source src="/spaceship.mp4" type="video/mp4" />
        </video>
      ) : (
        <div style={{ color: "red", fontSize: "18px" }}>
          ❌ Video failed to load — check file location
        </div>
      )}

      <p>Path: /spaceship.mp4</p>
    </main>
  );
} 
