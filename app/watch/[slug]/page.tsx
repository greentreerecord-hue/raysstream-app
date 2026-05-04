export default function WatchPage({
  params,
}: {
  params: { slug: string };
}) {
  return (
    <main style={{ padding: "24px" }}>
      <h1>Watching: {params.slug}</h1>

      <video
        controls
        autoPlay
        loop
        muted
        style={{
          width: "100%",
          maxWidth: "900px",
          height: "360px",
          backgroundColor: "black",
        }}
      >
        <source src="/spaceship.mp4" type="video/mp4" />
      </video>
    </main>
  );
}
