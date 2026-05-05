export default function WatchPage({ params }: { params: { slug: string } }) {
  const videoMap: Record<string, string> = {
    test: "/videos/test.mp4",
    video2: "/videos/video2.mp4",
    video3: "/videos/video3.mp4",
  };

  const videoSrc = videoMap[params.slug] || "/videos/test.mp4";

  return (
    <div style={{ padding: "20px" }}>
      <h1>Watching: {params.slug}</h1>

      <video
        width="800"
        controls
        autoPlay
        style={{ marginTop: "20px" }}
      >
        <source src={videoSrc} type="video/mp4" />
      </video>
    </div>
  );
} 
