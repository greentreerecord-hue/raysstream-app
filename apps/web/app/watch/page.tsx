export default function WatchPage() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Ray’sStream</h1>

      <video
        controls
        autoPlay
        width="100%"
      >
        <source src="/videos/its-cool.mp4" type="video/mp4" />
      </video>

    </div>
  );
} 
