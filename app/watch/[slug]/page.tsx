"use client";

import { useParams } from "next/navigation";

const videos: Record<string, { src: string; title: string }> = {
  test: {
    src: "/videos/its-cool.mp4",
    title: "It’s Cool",
  },
  video2: {
    src: "/videos/video2.mp4",
    title: "Video 2",
  },
  video3: {
    src: "/videos/video3.mp4",
    title: "Video 3",
  },
};

export default function WatchPage() {
  const params = useParams();
  const slug = params.slug as string;

  const video = videos[slug] || videos["test"];

  const handleEnd = () => {
    if (slug === "test") window.location.href = "/watch/video2";
    else if (slug === "video2") window.location.href = "/watch/video3";
    else window.location.href = "/watch/test"; // loop back
  };

  return (
    <main style={{ padding: "20px", background: "#111827", minHeight: "100vh", color: "white" }}>
      <h1>Ray’sStream 🔥</h1>

      <video
        src={video.src}
        controls
        autoPlay
        muted
        playsInline
        onEnded={handleEnd}
        style={{
          width: "100%",
          maxHeight: "500px",
          background: "black",
          borderRadius: "12px",
        }}
      />

      <h2 style={{ marginTop: "15px" }}>{video.title}</h2>

      <p>Auto plays next video 🔥</p>
    </main>
  );
} 
