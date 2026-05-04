export default function HomePage() {
  const videos = [
    {
      title: "Spaceship",
      channel: "Ray",
      views: "1M",
      video: "/videos/spaceship.mp4",
    },
  ];

  return (
    <main style={{ padding: "40px", fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ fontSize: "32px", marginBottom: "5px" }}>
        Ray’s<span style={{ fontWeight: "bold" }}>Stream</span>
      </h1>

      <p style={{ fontSize: "20px", color: "#555", marginBottom: "30px" }}>
        The future of video streaming starts here.
      </p>

      <h2 style={{ fontSize: "24px", marginBottom: "20px" }}>🔥 Trending</h2>

      <div
        style={{
          width: "100%",
          maxWidth: "700px",
          aspectRatio: "16 / 9",
          borderRadius: "12px",
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
          controls
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </div>

      <h3 style={{ marginTop: "10px" }}>Spaceship</h3>
      <p style={{ color: "#666" }}>Ray • 1M views</p>
    </main>
  );
} 
