export default function Page() {
  return (
    <div style={{ padding: "20px", background: "black", color: "white" }}>
      <h1>Ray'sStream 🔥</h1>

      {/* Video */}
      <h2>It's Cool</h2>
      <video
        src="/videos/itscool.mp4"
        controls
        autoPlay
        loop
        muted
        style={{
          width: "100%",
          borderRadius: "12px",
          marginBottom: "20px",
        }}
      />
    </div>
  );
} 
