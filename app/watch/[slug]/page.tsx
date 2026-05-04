"use client"

import { useState } from "react"

type Comment = {
  name: string
  text: string
}

export default function WatchPage() {
  const [commentText, setCommentText] = useState("")
  const [comments, setComments] = useState<Comment[]>([
    { name: "Ray", text: "Welcome to Ray'sStream 🚀" },
  ])

  function addComment() {
    if (!commentText.trim()) return

    setComments([
      { name: "Guest", text: commentText },
      ...comments,
    ])

    setCommentText("")
  }

  return (
    <main style={{ padding: 24, fontFamily: "Arial, sans-serif" }}>
      <h1>Ray&apos;sStream Watch Page</h1>

      <div
        style={{
          background: "#111",
          color: "white",
          height: 260,
          borderRadius: 16,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 24,
          marginBottom: 20,
        }}
      >
        Video box paused for now
      </div>

      <h2>Spaceship Demo</h2>
      <p>Views: 1,234</p>

      <button style={{ marginRight: 10 }}>👍 Like</button>
      <button>Subscribe</button>

      <hr style={{ margin: "24px 0" }} />

      <h2>Comments</h2>

      <textarea
        value={commentText}
        onChange={(e) => setCommentText(e.target.value)}
        placeholder="Add a comment..."
        style={{
          width: "100%",
          minHeight: 80,
          padding: 12,
          fontSize: 16,
          borderRadius: 10,
        }}
      />

      <br />

      <button
        onClick={addComment}
        style={{
          marginTop: 10,
          padding: "10px 16px",
          borderRadius: 8,
          cursor: "pointer",
        }}
      >
        Comment
      </button>

      <div style={{ marginTop: 24 }}>
        {comments.map((comment, index) => (
          <div
            key={index}
            style={{
              padding: 12,
              borderBottom: "1px solid #ddd",
            }}
          >
            <strong>{comment.name}</strong>
            <p>{comment.text}</p>
          </div>
        ))}
      </div>
    </main>
  )
} 
