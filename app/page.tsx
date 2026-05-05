export default function Home() {
  return (
    <main
      style={{
        padding: "20px",
        color: "white",
        background: "black",
        minHeight: "100vh",
      }}
    >
      <h1>Ray'sStream 🔥</h1>
      <p>It's Cool</p>

      <video
        width="800"
        controls
        preload="metadata"
        style={{
          marginTop: "20px",
          borderRadius: "10px",
          background: "black",
        }}
      >
        <source src="/videos/itscool.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </main>
  );
}
