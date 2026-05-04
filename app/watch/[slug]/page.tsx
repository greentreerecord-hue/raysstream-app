export default function WatchPage() {
  return (
    <main style={{ padding: "24px", fontFamily: "Arial, sans-serif" }}>
      <h1>Ray’sStream Player</h1>

      <video
        src="/videos/spaceship.mp4"
        controls
        autoPlay
        loop
        playsInline
        preload="auto"
        style={{
          width: "100%",
          maxWidth: "900px",
          height: "420px",
          backgroundColor: "black",
          borderRadius: "16px",
          display: "block",
        }}
      />

      <h2>Watching: Spaceship</h2>
    </main>
  );
} 
