export default function WatchTestPage() {
  return (
    <main
      style={{
        background: "#0f172a",
        minHeight: "100vh",
        color: "white",
        padding: "24px",
        fontFamily: "Arial",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        <video
          controls
          preload="metadata"
          playsInline
          style={{
            width: "100%",
            maxHeight: "620px",
            backgroundColor: "black",
            borderRadius: "18px",
          }}
        >
          <source src="/videos/video2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <h1
          style={{
            fontSize: "38px",
            marginTop: "20px",
            fontWeight: "bold",
          }}
        >
          Ray&apos;sStream Test Video
        </h1>

        <p
          style={{
            color: "#94a3b8",
            fontSize: "18px",
            marginBottom: "24px",
          }}
        >
          2,431 views
        </p>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "14px",
            flexWrap: "wrap",
            marginTop: "20px",
          }}
        >
          <div>
            <div
              style={{
                fontWeight: "bold",
                fontSize: "20px",
              }}
            >
              Ray&apos;sStream
            </div>

            <div
              style={{
                color: "#94a3b8",
              }}
            >
              1 subscriber
            </div>
          </div>

          <button
            style={{
              background: "#ff004c",
              color: "white",
              border: "none",
              borderRadius: "999px",
              padding: "12px 22px",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            Subscribe
          </button>

          <button
            style={{
              background: "#facc15",
              color: "black",
              border: "none",
              borderRadius: "999px",
              padding: "12px 22px",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            Join $4.99/mo
          </button>
        </div>
      </div>
    </main>
  );
}    