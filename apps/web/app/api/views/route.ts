export default function Home() {
  return (
    <main
      style={{
        padding: 20,
        background: "#111",
        color: "white",
        minHeight: "100vh",
      }}
    >
      <h1>Ray&apos;sStream 🔥</h1>
      <p>It&apos;s Cool</p>

      <video
        src="/videos/test.mp4"
        controls
        muted
        autoPlay
        style={{
          width: "100%",
          maxWidth: "650px",
          borderRadius: "12px",
          background: "black",
        }}
      />

      <h2 style={{ marginTop: 10 }}>Spaceship</h2>

      <p style={{ color: "#aaa", marginTop: 5 }}>
        1 view
      </p>
    </main>
  )
} 
