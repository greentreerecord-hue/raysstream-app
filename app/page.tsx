export default function HomePage() {
  const videos = [
    {
      title: "First Video",
      channel: "Ray",
      views: "1M",
      thumbnail: "/thumbnails/first.jpg",
    },
    {
      title: "Second Video",
      channel: "Ray",
      views: "500K",
      thumbnail: "/thumbnails/second.jpg",
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

      <input
        placeholder="Search videos..."
        style={{
          width: "100%",
          padding: "14px",
          fontSize: "18px",
          marginBottom: "35px",
          border: "1px solid #999",
        }}
      />

      <h2 style={{ fontSize: "24px", marginBottom: "20px" }}>🔥 Trending</h2>

      <section
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "24px",
        }}
      >
        {videos.map((video) => (
          <div key={video.title}>
            <div
              style={{
                width: "100%",
                aspectRatio: "16 / 9",
                overflow: "hidden",
                borderRadius: "12px",
                background: "#ddd",
              }}
            >
              <img
                src={video.thumbnail}
                alt={video.title}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                }}
              />
            </div>

            <h3 style={{ margin: "10px 0 4px", fontSize: "18px" }}>
              {video.title}
            </h3>

            <p style={{ margin: 0, color: "#666" }}>
              {video.channel} • {video.views} views
            </p>
          </div>
        ))}
      </section>
    </main>
  );
} 
