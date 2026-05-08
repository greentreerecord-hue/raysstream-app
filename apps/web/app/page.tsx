export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "black",
        color: "white",
        padding: "20px",
      }}
    >
      <h1 style={{ fontSize: "40px", marginBottom: "20px" }}>Ray’sStream</h1>

      <video
        src="/videos/video2.mp4"
        controls
        autoPlay
        playsInline
        style={{
          width: "100%",
          maxWidth: "900px",
          borderRadius: "18px",
          display: "block",
          margin: "0 auto",
        }}
      />

      <h2 style={{ marginTop: "20px", fontSize: "24px" }}>
        Now playing video2.mp4
      </h2>
    </main>
  );
}