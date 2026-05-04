"use client"
import { useState } from "react"

export default function WatchPage() {
  const [comments, setComments] = useState<string[]>([])
  const [input, setInput] = useState("")

  const addComment = () => {
    if (!input.trim()) return
    setComments([input, ...comments])
    setInput("")
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>Ray'sStream Player</h1>

      <video width="800" height="450" controls />

      {/* COMMENTS SECTION */}
      <h2 style={{ marginTop: "30px" }}>Comments</h2>

      <div style={{ marginBottom: "10px" }}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add a comment..."
          style={{ padding: "10px", width: "300px" }}
        />
        <button onClick={addComment} style={{ marginLeft: "10px" }}>
          Post
        </button>
      </div>

      <div>
        {comments.map((c, i) => (
          <p key={i} style={{ borderBottom: "1px solid #ccc", padding: "5px" }}>
            {c}
          </p>
        ))}
      </div>
    </div>
  )
}
} 
