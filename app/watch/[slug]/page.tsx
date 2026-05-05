export default function WatchPage({ params }: { params: { slug: string } }) {
  return (
    <div style={{ padding: 20 }}>
      <h1>Watching: {params.slug}</h1>

      <video
        src="/videos/its-cool.mp4"
        controls
        autoPlay
        loop
        style={{ width: "100%", maxWidth: 800 }}
      />
    </div>
  );
}
