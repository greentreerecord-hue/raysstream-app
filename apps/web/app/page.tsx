export default function HomePage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#0f0f0f",
        color: "white",
        padding: "40px",
        fontFamily: "Arial",
      }}
    >
      <h1 style={{ fontSize: "48px", marginBottom: "20px" }}>
        Ray'sStream
      </h1>

      <p style={{ marginBottom: "30px" }}>
        YouTube but better.
      </p>

      <video
        controls
        width="800"
        style={{
          borderRadius: "16px",
          maxWidth: "100%",
        }}
      >
        <source src="/videos/video2.mp4" type="video/mp4" />
      </video>
    </main>
  );
} 