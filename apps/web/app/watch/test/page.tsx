export default function TestPage() {
  return (
    <main
      style={{
        background: "#000",
        minHeight: "100vh",
        padding: "20px",
      }}
    >
      <video
        controls
        autoPlay
        playsInline
        muted
        width="100%"
        style={{
          maxWidth: "1000px",
          display: "block",
          margin: "0 auto",
          background: "#000",
        }}
      >
        <source src="/videos/its-cool.mp4" type="video/mp4" />
      </video>

      <h1
        style={{
          color: "white",
          textAlign: "center",
          marginTop: "20px",
        }}
      >
        Ray’sStream Test Video
      </h1>
    </main>
  );
} 
