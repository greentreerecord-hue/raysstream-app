export default function WatchPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#111827",
        color: "white",
        padding: "20px",
      }}
    >
      <h1 style={{ fontSize: "26px", fontWeight: "bold", marginBottom: "20px" }}>
        Ray’sStream 🔥
      </h1>

      <video
        src="/videos/its-cool.mp4"
        controls
        playsInline
        style={{
          width: "100%",
          maxHeight: "520px",
          background: "black",
          borderRadius: "12px",
        }}
      />

      <h2 style={{ fontSize: "22px", marginTop: "18px" }}>It’s Cool</h2>

      <p style={{ color: "#d1d5db", fontSize: "16px" }}>
        19 views • Just now
      </p>
    </main>
  );
} 
