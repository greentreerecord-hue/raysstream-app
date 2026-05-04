export default function WatchPage() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Ray'sStream Player</h1>

      <video
        width="100%"
        height="400"
        controls
        autoPlay
        muted
        loop
        style={{ backgroundColor: "black" }}
      >
        <source src="/videos/spaceship.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <h3>Watching:</h3>
    </div>
  );
} 
