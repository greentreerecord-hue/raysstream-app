export default function WatchPage() {
  return (
    <main style={{ padding: "24px", fontFamily: "Arial, sans-serif" }}>
      <h1>Ray’sStream Player UPDATED</h1>

      <video
        controls
        autoPlay
        loop
        muted
        playsInline
        style={{
          width: "100%",
          maxWidth: "900px",
          height: "360px",
          backgroundColor: "black",
          borderRadius: "12px",
        }}
      >
        <source src="/videos/spaceship.mp4" type="video/mp4" />
      </video>

      <p>Watching: spaceship.mp4</p>
    </main>
  );
} 
