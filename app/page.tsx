export default function HomePage() {
  return (
    <main style={{ padding: "40px", fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ fontSize: "42px", marginBottom: "10px" }}>
        Ray’s<span style={{ fontWeight: "bold" }}>Stream</span>
      </h1>

      <p style={{ fontSize: "24px", color: "#444", marginBottom: "50px" }}>
        The future of video streaming starts here.
      </p>

      <h2 style={{ fontSize: "30px", marginBottom: "30px" }}>
        🔥 Trending
      </h2>

      <div style={{ maxWidth: "900px" }}>
        <div
          style={{
            width: "100%",
            aspectRatio: "16 / 9",
            borderRadius: "14px",
            overflow: "hidden",
            background: "black",
          }}
        >
          <video
            src="/videos/spaceship.mp4"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            onLoadedData={(e) => {
              e.currentTarget.play();
            }}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
            }}
          />
        </div>

        <h3 style={{ margin: "12px 0 4px", fontSize: "20px" }}>
          Spaceship
        </h3>

        <p style={{ margin: 0, color: "#666", fontSize: "16px" }}>
          Ray • 1M views
        </p>
      </div>
    </main>
  );
} 
