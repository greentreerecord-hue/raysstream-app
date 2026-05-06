"use client";

import { useState } from "react";

export default function WatchPage() {
  const [subscribers, setSubscribers] = useState(1284);
  const [subscribed, setSubscribed] = useState(false);

  function handleSubscribe() {
    if (subscribed) {
      setSubscribed(false);
      setSubscribers(subscribers - 1);
    } else {
      setSubscribed(true);
      setSubscribers(subscribers + 1);
    }
  }

  return (
    <div
      style={{
        background: "#0f0f0f",
        minHeight: "100vh",
        color: "white",
        padding: "20px",
        fontFamily: "Arial",
      }}
    >
      <video
        controls
        autoPlay
        width="100%"
        style={{
          maxWidth: "900px",
          borderRadius: "12px",
          display: "block",
          margin: "0 auto",
        }}
      >
        <source src="/videos/its-cool.mp4" type="video/mp4" />
      </video>

      <div
        style={{
          maxWidth: "900px",
          margin: "20px auto",
        }}
      >
        <h1
          style={{
            fontSize: "38px",
            marginBottom: "18px",
          }}
        >
          Ray’sStream Test Video
        </h1>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            background: "#1a1a1a",
            padding: "18px",
            borderRadius: "14px",
          }}
        >
          <div>
            <h2
              style={{
                margin: 0,
                fontSize: "24px",
              }}
            >
              Ray’sStream Creator
            </h2>

            <p
              style={{
                color: "#aaa",
                marginTop: "6px",
                fontSize: "18px",
              }}
            >
              {subscribers.toLocaleString()} subscribers
            </p>
          </div>

          <button
            onClick={handleSubscribe}
            style={{
              background: subscribed ? "#333" : "#ff0000",
              color: "white",
              border: "none",
              padding: "14px 26px",
              borderRadius: "999px",
              fontSize: "18px",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            {subscribed ? "Subscribed" : "Subscribe"}
          </button>
        </div>
      </div>
    </div>
  );
} 
