export default function WatchPage() {
  const videoPath = "/its-cool.mp4";

  return (
    <main style={{ padding: 20 }}>
      <h1>Ray’sStream Video Test</h1>

      <video
        controls
        autoPlay
        muted
        playsInline
        src={videoPath}
        style={{
          width: "100%",
          maxWidth: "900px",
          background: "black",
        }}
      />

      <h2>Testing path:</h2>
      <p>{videoPath}</p>

      <p>
        Direct file test:{" "}
        <a href="/its-cool.mp4" target="_blank">
          /its-cool.mp4
        </a>
      </p>
    </main>
  );
} 
