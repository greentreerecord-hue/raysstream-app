export default function WatchPage() {
  return (
    <main style={{ padding: "20px", minHeight: "100vh", background: "#111", color: "white" }}>
      <h1>Ray’sStream Watch Test</h1>

      <video
        src="/its-cool.mp4"
        controls
        autoPlay
        muted
        playsInline
        preload="auto"
        style={{
          width: "100%",
          maxWidth: "900px",
          background: "black",
          display: "block",
        }}
      />

      <p>Video path: /its-cool.mp4</p>
    </main>
  );
}
