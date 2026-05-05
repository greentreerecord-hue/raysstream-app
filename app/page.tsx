export default function Home() {
  return (
    <main style={{
      padding: "20px",
      color: "white",
      background: "black",
      minHeight: "100vh"
    }}>
      <h1>Ray'sStream 🔥</h1>
      <p>It's Cool</p>

      <video
        width="600"
        controls
        autoPlay
        loop
        muted
        style={{ marginTop: "20px", borderRadius: "10px" }}
      >
        <source src="/videos/test.mp4" type="video/mp4" />
      </video>
    </main>
  );
} 
