"use client";

import { useEffect, useState } from "react";

export default function WatchPage() {
  const [subscribed, setSubscribed] = useState(false);
  const [subs, setSubs] = useState(129);

  useEffect(() => {
    fetch("/api/subscribe")
      .then((res) => res.json())
      .then((data) => {
        if (data.subscribers) {
          setSubs(data.subscribers);
        }
      });
  }, []);

  async function handleSubscribe() {
    const res = await fetch("/api/subscribe", {
      method: "POST",
    });

    const data = await res.json();

    if (data.subscribers) {
      setSubs(data.subscribers);
    }

    setSubscribed(true);
  }

  return (
    <main
      style={{
        background: "#0f0f0f",
        minHeight: "100vh",
        padding: "20px",
      }}
    >
      <video
        controls
        autoPlay
        width="100%"
        style={{
          maxWidth: "1000px",
          display: "block",
          margin: "0 auto",
          background: "#000",
          borderRadius: "12px",
        }}
      >
        <source src="/videos/its-cool.mp4" type="video/mp4" />
      </video>

      <section
        style={{
          maxWidth: "1000px",
          margin: "20px auto",
          color: "white",
        }}
      >
        <h1 style={{ fontSize: "28px" }}>Ray’sStream Video</h1>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            marginTop: "16px",
          }}
        >
          <div>
            <strong>Ray’sStream Creator</strong>

            <p
              style={{
                margin: 0,
                color: "#aaa",
              }}
            >
              {subs} subscribers
            </p>
          </div>

          <button
            onClick={handleSubscribe}
            style={{
              marginLeft: "auto",
              padding: "10px 18px",
              borderRadius: "999px",
              border: "none",
              cursor: "pointer",
              fontWeight: "bold",
              background: subscribed ? "#333" : "white",
              color: subscribed ? "white" : "black",
            }}
          >
            {subscribed ? "Subscribed" : "Subscribe"}
          </button>
        </div>
      </section>
    </main>
  );
} 
