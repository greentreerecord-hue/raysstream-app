import { notFound } from "next/navigation"

type Props = {
  params: { slug: string }
}

export default function WatchPage({ params }: Props) {
  const { slug } = params

  // simple demo video map
  const videos: Record<string, string> = {
    spaceship: "/videos/spaceship.mp4",
    demo: "/videos/demo.mp4",
  }

  const videoSrc = videos[slug]

  if (!videoSrc) {
    return notFound()
  }

  return (
    <div style={{ padding: "20px", color: "white" }}>
      <h1 style={{ fontSize: "24px", marginBottom: "10px" }}>
        {slug}
      </h1>

      <video
        src={videoSrc}
        controls
        autoPlay
        loop
        style={{
          width: "100%",
          maxWidth: "900px",
          borderRadius: "10px",
        }}
      />

      <div style={{ marginTop: "15px" }}>
        <p>Views: 1,234</p>
        <button style={{ marginRight: "10px" }}>👍 Like</button>
        <button>Subscribe</button>
      </div>
    </div>
  )
} 
