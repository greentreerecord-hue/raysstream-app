export default function WatchPage() {
  return (
    <main style={{ padding: "24px", fontFamily: "Arial, sans-serif" }}>
      <h1>Ray’sStream Player</h1>

      <video
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
      >
        <source src="/spaceship.mp4" type="video/mp4" />
        <source src="/videos/spaceship.mp4" type="video/mp4" />
        Your browser does not support video.
      </video>

      <h2>Watching: Spaceship</h2>
      <p>Ray’sStream test video</p>
    </main>
  );
} 
