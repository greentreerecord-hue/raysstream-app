export default async function Page({ params }: { params: { slug: string } }) {
  const key = `video:${params.slug}:views`;

  const url = process.env.KV_REST_API_URL;
  const token = process.env.KV_REST_API_TOKEN;

  let views = 0;

  if (url && token) {
    const response = await fetch(`${url}/incr/${key}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      cache: "no-store",
    });

    const data = await response.json();
    views = data.result ?? 0;
  }

  return (
    <main style={{ padding: "24px" }}>
      <h1>Watching: {params.slug}</h1>

      <p style={{ fontSize: "20px", marginBottom: "12px" }}>
        👁️ {views} views
      </p>

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
