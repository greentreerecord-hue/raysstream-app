export default function Home() {
  return (
    <main style={{ padding: "24px", fontFamily: "Arial" }}>
      <h1>🎬 Ray'sStream</h1>
      <p>The future of video streaming starts here.</p>

      <input
        placeholder="Search videos..."
        style={{
          width: "100%",
          padding: "12px",
          marginTop: "20px",
          marginBottom: "20px",
          fontSize: "16px",
        }}
      />

      <h2>🔥 Trending</h2>

      <div style={{ display: "flex", gap: "16px" }}>
        <div>
          <div style={{ width: "220px", height: "130px", background: "#ccc" }} />
          <h3>First Video</h3>
          <p>Ray • 1M views</p>
        </div>

        <div>
          <div style={{ width: "220px", height: "130px", background: "#ccc" }} />
          <h3>Second Video</h3>
          <p>Ray • 500K views</p>
        </div>

        <div>
          <div style={{ width: "220px", height: "130px", background: "#ccc" }} />
          <h3>Third Video</h3>
          <p>Ray • 250K views</p>
        </div>
      </div>
    </main>
  );
} 
