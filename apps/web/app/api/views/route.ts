"use client"

import { useEffect, useState } from "react"

const videos = [
  {
    id: "video1",
    title: "Spaceship",
    file: "/videos/test.mp4",
  },
]

export default function Home() {
  const [viewCounts, setViewCounts] = useState<Record<string, number>>({})

  useEffect(() => {
    const loadViews = async () => {
      for (const video of videos) {
        const res = await fetch("/api/views", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ id: video.id }),
        })

        const data = await res.json()

        setViewCounts((prev) => ({
          ...prev,
          [video.id]: data.views,
        }))
      }
    }

    loadViews()
  }, [])

  return (
    <main
      style={{
        padding: 20,
        background: "#111",
        color: "white",
        minHeight: "100vh",
      }}
    >
      <h1>Ray&apos;sStream 🔥</h1>
      <p>It&apos;s Cool</p>

      <div style={{ marginTop: 30 }}>
        {videos.map((video) => (
          <div key={video.id} style={{ marginBottom: 40 }}>
            <video
              src={video.file}
              controls
              muted
              autoPlay
              style={{
                width: "100%",
                maxWidth: "650px",
                borderRadius: "12px",
                background: "black",
              }}
            />

            <h2 style={{ marginTop: 10 }}>{video.title}</h2>

            <p style={{ color: "#aaa", marginTop: 5 }}>
              {viewCounts[video.id] ?? 0} views
            </p>
          </div>
        ))}
      </div>
    </main>
  )
} 
} 
