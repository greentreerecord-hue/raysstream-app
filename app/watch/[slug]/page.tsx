export default function WatchPage() {
  return (
    <main style={{ padding: "24px", fontFamily: "Arial, sans-serif" }}>
      <h1>Ray’sStream Player FIXED</h1>

      <video
        controls
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        style={{
          width: "100%",
          maxWidth: "900px",
          height: "360px",
          backgroundColor: "black",
          borderRadius: "12px",
          display: "block",
        }}
      >
        <source src="/spaceship.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <p>Watching: spaceship.mp4</p>
    </main>
  );
} 
