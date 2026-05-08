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
      <h1
        style={{
          fontSize: "48px",
          marginBottom: "20px",
        }}
      >
        Ray'sStream
      </h1>

      <p
        style={{
          fontSize: "20px",
          color: "#aaaaaa",
        }}
      >
        YouTube but better.
      </p>

      <div
        style={{
          marginTop: "40px",
        }}
      >
        <video
          controls
          autoPlay
          muted
          width="900"
          style={{
            width: "100%",
            maxWidth: "900px",
            borderRadius: "20px",
            background: "black",
          }}
        >
          <source src="/videos/video2.mp4" type="video/mp4" />
        </video>
      </div>
    </main>
  );
} 