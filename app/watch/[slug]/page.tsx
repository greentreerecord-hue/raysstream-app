export default function WatchPage({ params }: { params: { slug: string } }) {
  const videoUrl = "https://cdn.streamable.com/video/mp4/d3yj6q.mp4"

  return (
    <div style={{ padding: "20px" }}>
      <h1>Ray'sStream Player</h1>

      <video
        src={videoUrl}
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

      <p>Watching: {params.slug}</p>
    </div>
  )
} 
