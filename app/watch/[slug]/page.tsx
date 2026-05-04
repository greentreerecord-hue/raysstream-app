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
        onClick={(e) => {
          e.currentTarget.muted = false
          e.currentTarget.play()
        }}
        style={{
          width: "100%",
          maxWidth: "900px",
          borderRadius: "12px"
        }}
      />

      <p>Watching: {video}</p>
    </div>
  )
} 
