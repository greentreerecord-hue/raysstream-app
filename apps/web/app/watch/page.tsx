export default function WatchPage() {
  return (
    <main style={{ padding: "20px", background: "#f4f4f4", minHeight: "100vh" }}>
      <h1>Ray’sStream Video Test</h1>

      <video
        controls
        autoPlay
        muted
        playsInline
        style={{
          width: "100%",
          maxWidth: "900px",
          background: "black",
          borderRadius: "12px",
        }}
      >
        <source src="/videos/its-cool.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <h2>Its Cool</h2>
      <p>Testing video path: /videos/its-cool.mp4</p>
    </main>
  );
} 
