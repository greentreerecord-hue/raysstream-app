export default function HomePage() {
  return (
    <main style={{
      minHeight: "100vh",
      background: "#000",
      color: "#fff",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "30px",
      padding: "40px"
    }}>
      <h1 style={{ fontSize: "40px" }}>
        Ray'sStream 🔥
      </h1>

      <section style={{ width: "80%", maxWidth: "800px" }}>
        <h2>Scenic Album</h2>
        <video
          src="/videos/test.mp4"
          controls
          loop
          muted
          style={{ width: "100%", borderRadius: "12px" }}
        />
      </section>

      <section style={{ width: "80%", maxWidth: "800px" }}>
        <h2>Like That</h2>
        <video
          src="/videos/likethat.mp4"
          controls
          loop
          muted
          style={{ width: "100%", borderRadius: "12px" }}
        />
      </section>
    </main>
  );
} 
