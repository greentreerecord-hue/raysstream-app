export default function WatchPage() {
  return (
    <div style={{ padding: 20 }}>
      <h1>Ray’sStream Watch</h1>

      <video
        src="/videos/its-cool.mp4"
        controls
        autoPlay
        loop
        style={{ width: "100%", maxWidth: 800 }}
      />
    </div>
  );
} 
