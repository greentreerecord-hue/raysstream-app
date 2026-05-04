export default function WatchPage() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Ray'sStream Player</h1>

      <video
        src="/spaceship.mp4"
        controls
        autoPlay
        loop
        muted
        playsInline
        style={{
          width: "100%",
          maxWidth: "900px",
          borderRadius: "12px"
        }}
      />

      <p>Watching: spaceship.mp4</p>
    </div>
  )
} 
