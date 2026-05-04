"use client";

import { useEffect, useState } from "react";

export default function WatchPage() {
  const [views, setViews] = useState<number>(0);

  useEffect(() => {
    async function loadViews() {
      const res = await fetch("/api/views", {
        cache: "no-store",
      });

      const data = await res.json();
      setViews(data.views);
    }

    loadViews();
  }, []);

  return (
    <main
      style={{
        background: "#111",
        color: "white",
        minHeight: "100vh",
        padding: 20,
      }}
    >
      <h1>Ray&apos;sStream</h1>

      <video
        src="/videos/spaceship.mp4"
        controls
        autoPlay
        loop
        muted
        style={{
          width: "100%",
          maxWidth: 900,
          borderRadius: 12,
          background: "black",
        }}
      />

      <h2>Spaceship Video</h2>

      <p style={{ fontSize: 18 }}>
        👁️ {views} views
      </p>
    </main>
  );
}
