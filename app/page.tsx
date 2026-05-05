"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [views, setViews] = useState(0);

  useEffect(() => {
    const savedViews = localStorage.getItem("raysstream_views_itscool");
    const currentViews = savedViews ? Number(savedViews) : 0;
    const newViews = currentViews + 1;

    localStorage.setItem("raysstream_views_itscool", String(newViews));
    setViews(newViews);
  }, []);

  return (
    <main
      style={{
        padding: "20px",
        color: "white",
        background: "#0f0f0f",
        minHeight: "100vh",
        fontFamily: "Arial",
      }}
    >
      <h1 style={{ marginBottom: "10px" }}>Ray'sStream 🔥</h1>

      <video
        width="100%"
        controls
        style={{
          maxWidth: "900px",
          borderRadius: "12px",
          background: "black",
        }}
      >
        <source src="/videos/itscool.mp4" type="video/mp4" />
      </video>

      <h2 style={{ marginTop: "15px" }}>It's Cool</h2>

      <p style={{ color: "#aaa", fontSize: "18px" }}>
        {views} views • Just now
      </p>
    </main>
  );
} 
