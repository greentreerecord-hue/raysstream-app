export default function HomePage() {
  return (
    <main style={{
      minHeight: "100vh",
      background: "#000",
      color: "#fff",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "40px",
      padding: "40px"
    }}>
     
      <h1 style={{ fontSize: "40px" }}>
        Ray'sStream 🔥
      </h1>

      {/* Video 1 */}
      <video
        src="/videos/test.mp4"
        controls
        autoPlay
        loop
        muted
        style={{
          width: "80%",
          maxWidth: "800px",
          borderRadius: "12px"
        }}
      />

      {/* Video 2 */}
      <video
        src="/videos/likethat.mp4"
        controls
        autoPlay
        loop
        muted
        style={{
          width: "80%",
          maxWidth: "800px",
          borderRadius: "12px"
        }}
      />

    </main>
  );
} 
