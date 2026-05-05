const videos = {
  "its-cool": {
    title: "It's Cool",
    file: "/videos/its-cool.mp4",
    views: "1 views",
  },
  video2: {
    title: "Video 2",
    file: "/videos/video2.mp4",
    views: "0 views",
  },
  video3: {
    title: "Video 3",
    file: "/videos/video3.mp4",
    views: "0 views",
  },
};

export default function WatchPage({ params }: { params: { slug: string } }) {
  const video = videos[params.slug as keyof typeof videos] || videos["its-cool"];

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#111827",
        color: "white",
        padding: "20px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1 style={{ fontSize: "24px", marginBottom: "16px" }}>Ray'sStream 🔥</h1>

      <video
        src={video.file}
        controls
        playsInline
        preload="metadata"
        style={{
          width: "100%",
          maxWidth: "900px",
          background: "black",
          borderRadius: "12px",
        }}
      />

      <h2 style={{ marginTop: "16px", fontSize: "22px" }}>{video.title}</h2>
      <p style={{ color: "#cbd5e1" }}>{video.views} • Just now</p>

      <div style={{ marginTop: "24px" }}>
        <a href="/watch/its-cool" style={{ color: "white", marginRight: "16px" }}>
          It's Cool
        </a>
        <a href="/watch/video2" style={{ color: "white", marginRight: "16px" }}>
          Video 2
        </a>
        <a href="/watch/video3" style={{ color: "white" }}>
          Video 3
        </a>
      </div>
    </main>
  );
} 
