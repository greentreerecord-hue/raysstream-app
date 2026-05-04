export default function WatchPage() {
  return (
    <div style={{ padding: "20px", maxWidth: "900px", margin: "auto" }}>
      <h1>Ray'sStream Player</h1>

      <video
        src="/videos/spaceship.mp4"
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
      >
        Your browser does not support the video tag.
      </video>

      <h3 style={{ marginTop: "20px" }}>Watching:</h3>
    </div>
  );
} 
