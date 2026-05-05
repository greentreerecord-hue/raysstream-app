"use client";

import { useState } from "react";

export default function WatchPage() {
  const [subscribed, setSubscribed] = useState(false);

  return (
    <div style={{ padding: "20px", color: "white" }}>
      <video
        src="/videos/its-cool.mp4"
        controls
        style={{
          width: "100%",
          maxWidth: "800px",
          borderRadius: "12px",
          backgroundColor: "black",
        }}
      />

      <h2 style={{ marginTop: "16px" }}>It’s Cool</h2>

      <p style={{ color: "#aaa" }}>8 views • Just now</p>

      <button
        onClick={() => setSubscribed(!subscribed)}
        style={{
          backgroundColor: subscribed ? "#333" : "white",
          color: subscribed ? "white" : "black",
          border: "none",
          borderRadius: "20px",
          padding: "10px 18px",
          fontWeight: "bold",
          cursor: "pointer",
        }}
      >
        {subscribed ? "Subscribed" : "Subscribe"}
      </button>
    </div>
  );
} 
