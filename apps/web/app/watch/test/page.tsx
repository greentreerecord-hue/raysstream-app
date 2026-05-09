"use client";

export default function WatchPage() {
  return (
    <div
      style={{
        background: "#0f172a",
        minHeight: "100vh",
        color: "white",
        padding: "20px",
        fontFamily: "Arial",
      }}
    >
      <div
        style={{
          maxWidth: "1000px",
          margin: "0 auto",
        }}
      >
        <video
          controls
          width="100%"
          style={{
            borderRadius: "20px",
            background: "black",
          }}
        >
          <source src="/videos/video2.mp4" type="video/mp4" />
        </video>

        <h1
          style={{
            fontSize: "38px",
            marginTop: "20px",
            fontWeight: "800",
          }}
        >
          Test Video
        </h1>

        <p
          style={{
            color: "#cbd5e1",
            fontSize: "18px",
          }}
        >
          2,431 views
        </p>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            marginTop: "20px",
            flexWrap: "wrap",
          }}
        >
          <div>
            <h2
              style={{
                margin: 0,
                fontSize: "26px",
              }}
            >
              Ray'sStream
            </h2>

            <p
              style={{
                margin: 0,
                color: "#cbd5e1",
              }}
            >
              1 subscriber
            </p>
          </div>

          <button
            onClick={() => alert("Subscribed!")}
            style={{
              background: "#ff5c7a",
              color: "white",
              border: "0",
              borderRadius: "999px",
              padding: "12px 28px",
              fontWeight: "700",
              cursor: "pointer",
              fontSize: "16px",
            }}
          >
            Subscribe
          </button>

          <button
            onClick={() => alert("Membership feature coming soon")}
            style={{
              background: "#facc15",
              color: "#111827",
              border: "0",
              borderRadius: "999px",
              padding: "12px 28px",
              fontWeight: "700",
              cursor: "pointer",
              fontSize: "16px",
            }}
          >
            Join $4.99/mo
          </button>
        </div>

        <div
          style={{
            background: "#1e293b",
            marginTop: "30px",
            padding: "20px",
            borderRadius: "20px",
          }}
        >
          <h3>About this video</h3>

          <p
            style={{
              color: "#cbd5e1",
              lineHeight: "1.7",
            }}
          >
            Welcome to Ray'sStream. Subscribe or join monthly to support the
            creator.
          </p>
        </div>
      </div>
    </div>
  );
}