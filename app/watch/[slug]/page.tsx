export default function WatchPage({
  params,
}: {
  params: { slug: string };
}) {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Watching: {params.slug}</h1>

      <video
        width="800"
        controls
        autoPlay
        style={{ marginTop: "20px" }}
      >
        <source src="/videos/Its-cool.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
