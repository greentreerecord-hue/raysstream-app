export default function WatchPage({ params }: { params: { slug: string } }) {
  const videoMap: Record<string, string> = {
    test: "/videos/its-cool.mp4",
    video1: "/videos/its-cool.mp4",
  };

  const videoSrc = videoMap[params.slug] || "/videos/its-cool.mp4";

  return (
    <div>
      <h1>Watching: {params.slug}</h1>

      <video width="900" controls autoPlay muted>
        <source src={videoSrc} type="video/mp4" />
      </video>
    </div>
  );
