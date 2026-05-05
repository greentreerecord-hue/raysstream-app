import { kv } from "@vercel/kv";

export default async function Page({ params }: { params: { slug: string } }) {
  const key = `video:${params.slug}:views`;

  // get current views
  let views = await kv.get<number>(key);

  if (!views) {
    views = 0;
  }

  // increase views
  await kv.incr(key);

  return (
    <main style={{ padding: "24px" }}>
      <h1>Watching: {params.slug}</h1>

      <p style={{ fontSize: "20px", marginBottom: "12px" }}>
        👁️ {views + 1} views
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
