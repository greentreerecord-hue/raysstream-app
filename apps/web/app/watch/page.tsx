export default function WatchPage() {
  return (
    <main style={{ padding: 20 }}>
      <h1>Ray’sStream Video</h1>

      <video
        src="/videos/its-cool.mp4"
        controls
        autoPlay
        style={{
          width: "100%",
          maxWidth: "900px",
          borderRadius: "12px",
        }}
      />

    </main>
  );
} 
