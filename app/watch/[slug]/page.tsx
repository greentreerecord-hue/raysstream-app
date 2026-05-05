"use client";

import { useEffect, useState } from "react";

export default function WatchPage() {
  const [views, setViews] = useState(8);
  const [subscribed, setSubscribed] = useState(false);

  useEffect(() => {
    const saved = window.localStorage.getItem("raysstream-its-cool-views");
    const current = saved ? Number(saved) : 8;
    const next = current + 1;

    window.localStorage.setItem("raysstream-its-cool-views", String(next));
    setViews(next);
  }, []);

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

      <p style={{ color: "#aaa" }}>{views} views • Just now</p>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          maxWidth: "800px",
          marginTop: "12px",
        }}
      >
        <span style={{ color: "#aaa" }}>Ray’sChannel</span>

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
    </div>
  );
}
