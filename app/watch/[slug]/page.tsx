export default function WatchPage() {
  return (
    <div style={{ padding: "20px", maxWidth: "900px", margin: "auto" }}>
      <h1>Ray'sStream Player</h1>

      <video
        src="/video.mp4" // ⚠️ change this if your file name is different
        controls
        autoPlay
        loop
        muted
        playsInline
        style={{
          width: "100%",
          borderRadius: "12px",
          backgroundColor: "black"
        }}
      />

      <h3 style={{ marginTop: "20px" }}>Watching:</h3>
    </div>
  );
} 
