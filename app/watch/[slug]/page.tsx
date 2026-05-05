"use client";

export default function WatchPage() {
  return (
    <div style={{ padding: "20px", background: "#111", minHeight: "100vh" }}>
     
      {/* VIDEO PLAYER */}
      <video
        src="/videos/its-cool.mp4"
        controls
        autoPlay
        muted
        playsInline
        style={{
          width: "100%",
          maxWidth: "900px",
          borderRadius: "12px",
          backgroundColor: "black",
          display: "block",
        }}
      />

      {/* TITLE */}
      <h2 style={{ color: "white", marginTop: "16px" }}>
        It’s Cool
      </h2>

    </div>
  );
} 
