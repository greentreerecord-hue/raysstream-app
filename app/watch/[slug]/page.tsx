export default function WatchPage({ params }: { params: { slug: string } }) {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Watching: {params.slug}</h1>

      <video
        width="100%"
        height="auto"
        controls
        autoPlay
        src="/videos/its-cool.mp4"
      />

    </div>
  );
} 
