export default function WatchPage() {
  return (
    <main
      style={{
        background: "#000",
        minHeight: "100vh",
        color: "white",
        padding: 20,
      }}
    >
      <h1>Ray’sStream Watch Test</h1>

      <video
        src="/videos/video3.mp4"
        controls
        preload="metadata"
        style={{
          width: "100%",
          maxWidth: "900px",
          borderRadius: "12px",
          display: "block",
          marginTop: "20px",
        }}
      />

      <p>Now playing video3.mp4</p>
    </main>
  );
} 