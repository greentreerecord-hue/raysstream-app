export default function WatchPage() {
  return (
    <div style={{ padding: "20px", maxWidth: "1000px", margin: "auto" }}>
      <h1>Ray'sStream Player</h1>

      <div
        style={{
          width: "100%",
          aspectRatio: "16 / 9",
          backgroundColor: "black",
          borderRadius: "12px",
          overflow: "hidden"
        }}
      >
        <video
          src="/videos/spaceship.mp4"
          controls
          autoPlay
          loop
          muted
          playsInline
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain"
          }}
        />
      </div>

      <h3 style={{ marginTop: "20px" }}>Watching:</h3>
    </div>
  );
} 
