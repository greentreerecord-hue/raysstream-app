export default function WatchPage() {
  return (
    <main style={{ padding: "24px" }}>
      <h1>Ray’sStream Player</h1>

      <video controls autoPlay loop muted style={{ width: "100%", maxWidth: "900px" }}>
        <source src="/spaceship.mp4" type="video/mp4" />
      </video>

    </main>
  );
} 
