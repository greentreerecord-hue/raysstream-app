"use client";

export default function WatchPage() {
  return (
    <div
      style={{
        padding: "20px",
        backgroundColor: "#111",
        minHeight: "100vh",
        color: "white",
      }}
    >
      <video
        src="/videos/its-cool.mp4"
        controls
        autoPlay
        playsInline
        style={{
          width: "100%",
          maxWidth: "900px",
          borderRadius: "12px",
          backgroundColor: "black",
        }}
      />

      <h2 style={{ marginTop: "16px" }}>It’s Cool</h2>

      <p style={{ color: "#aaa" }}>Ray’sChannel</p>
    </div>
  );
}
