import Link from "next/link";

type PageProps = {
  params: {
    slug: string;
  };
};

const videos: Record<string, { title: string; src: string; creator: string }> = {
  video1: {
    title: "Ray’sStream Video 1",
    src: "/videos/video1.mp4",
    creator: "Ray’sStream",
  },
  video2: {
    title: "Ray’sStream Video 2",
    src: "/videos/video2.mp4",
    creator: "Ray’sStream",
  },
  video3: {
    title: "Space Ship Video 3",
    src: "/videos/video3.mp4",
    creator: "Ray’sStream",
  },
};

export default function WatchPage({ params }: PageProps) {
  const video = videos[params.slug] ?? videos.video3;

  return (
    <main style={{ padding: "24px", color: "white", background: "#020617", minHeight: "100vh" }}>
      <Link href="/" style={{ color: "#60a5fa" }}>
        ← Back home
      </Link>

      <h1 style={{ fontSize: "32px", marginTop: "20px" }}>{video.title}</h1>
      <p style={{ color: "#94a3b8" }}>Creator: {video.creator}</p>

      <video
        src={video.src}
        controls
        autoPlay
        style={{
          width: "100%",
          maxWidth: "900px",
          marginTop: "20px",
          borderRadius: "16px",
          background: "black",
        }}
      />

      <div style={{ marginTop: "20px", display: "flex", gap: "12px", flexWrap: "wrap" }}>
        <button style={{ padding: "12px 18px", borderRadius: "999px", fontWeight: "bold" }}>
          👍 Like
        </button>

        <button
          style={{
            padding: "12px 18px",
            borderRadius: "999px",
            fontWeight: "bold",
            background: "#ef4444",
            color: "white",
            border: "none",
          }}
        >
          Subscribe
        </button>

        <button style={{ padding: "12px 18px", borderRadius: "999px", fontWeight: "bold" }}>
          Not interested
        </button>
      </div>
    </main>
  );
}