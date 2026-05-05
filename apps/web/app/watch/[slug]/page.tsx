export default function WatchVideo({ params }: { params: { slug: string } }) {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Watching: {params.slug}</h1>

      <video
        src="/videos/its-cool.mp4"
        controls
        autoPlay
        loop
        style={{ width: "100%", maxWidth: "900px" }}
      />
    </div>
  );
} 
