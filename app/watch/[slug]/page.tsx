export default function Page({ params }: { params: { slug: string } }) {
  return (
    <main style={{ padding: "24px" }}>
      <h1>Watching: {params.slug}</h1>

      <video
        controls
        autoPlay
        loop
        muted
        src="/videos/spaceship.mp4"
        style={{ width: "100%", maxWidth: "900px" }}
      />
    </main>
  );
} 
