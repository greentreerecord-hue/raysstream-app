export default function Page() {
  return (
    <main
      style={{
        background: "#0f0f0f",
        minHeight: "100vh",
        color: "white",
        padding: "20px",
        fontFamily: "Arial",
      }}
    >
      <h1
        style={{
          fontSize: "40px",
          marginBottom: "20px",
        }}
      >
        Ray’sStream Test
      </h1>

      <video
        controls
        autoPlay
        width="100%"
        style={{
          borderRadius: "12px",
          maxWidth: "1000px",
        }}
      >
        <source src="/videos/its-cool.mp4" type="video/mp4" />
      </video>

      <h2
        style={{
          marginTop: "20px",
          fontSize: "28px",
        }}
      >
        Test Video
      </h2>

      <p
        style={{
          color: "#aaa",
          fontSize: "18px",
        }}
      >
        2,431 views
      </p>

      <div
        style={{
          marginTop: "20px",
          display: "flex",
          alignItems: "center",
          gap: "15px",
        }}
      >
        <div>
          <h3
            style={{
              margin: 0,
              fontSize: "22px",
            }}
          >
            Ray’sStream
          </h3>

          <p
            style={{
              margin: 0,
              color: "#aaa",
            }}
          >
            1 subscriber
          </p>
        </div>

        <button
          style={{
            background: "red",
            color: "white",
            border: "none",
            padding: "12px 22px",
            borderRadius: "999px",
            fontWeight: "bold",
            fontSize: "16px",
            cursor: "pointer",
          }}
        >
          Subscribe
        </button>
      </div>
    </main>
  );
}
