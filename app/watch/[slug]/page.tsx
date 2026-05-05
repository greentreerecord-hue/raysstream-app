"use client";

import { useState } from "react";

export default function WatchPage() {
  const [subscribed, setSubscribed] = useState(false);

  return (
    <div style={{ padding: "20px", color: "white" }}>
     
      {/* 🎬 VIDEO */}
      <video
        src="/videos/test.mp4"
        controls
        style={{ width: "100%", maxWidth: "800px", borderRadius: "10px" }}
      />

      {/* 📝 TITLE */}
      <h2 style={{ marginTop: "15px" }}>It’s Cool</h2>

      {/* 👤 CHANNEL + SUBSCRIBE */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          maxWidth: "800px",
        }}
      >
        <span style={{ fontSize: "14px", color: "#aaa" }}>
          Ray’sChannel
        </span>

        {/* 🔔 SUBSCRIBE BUTTON */}
        <button
          onClick={() => setSubscribed(!subscribed)}
          style={{
            backgroundColor: subscribed ? "#333" : "white",
            color: subscribed ? "white" : "black",
            border: "none",
            borderRadius: "20px",
            padding: "10px 18px",
            fontWeight: "bold",
            fontSize: "14px",
            cursor: "pointer",
          }}
        >
          {subscribed ? "Subscribed" : "Subscribe"}
        </button>
      </div>

    </div>
  );
} 
