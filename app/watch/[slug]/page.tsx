"use client"
import { useState } from "react"

export default function WatchPage() {
  const [video, setVideo] = useState("/spaceship.mp4")

  return (
    <div style={{ padding: "20px" }}>
      <h1>Ray'sStream Player</h1>

      <video
        key={video}
        src={video}
        controls
        autoPlay
        loop
        muted
        playsInline
        style={{
          width: "100%",
          maxWidth: "900px",
          borderRadius: "12px"
        }}
      />

      <p>Watching: {video}</p>

      <h3>Up Next</h3>

      <button onClick={() => setVideo("/spaceship.mp4")}>
        Spaceship
      </button>
    </div>
  )
} 
