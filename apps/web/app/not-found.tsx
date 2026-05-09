export default function NotFound() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#0f0f0f",
        color: "white",
        padding: "40px",
        fontFamily: "Arial",
      }}
    >
      <h1 style={{ fontSize: "48px" }}>
        404 - Page Not Found
      </h1>

      <p style={{ marginTop: "20px" }}>
        This page does not exist yet.
      </p>

      <a
        href="/"
        style={{
          color: "#ff0000",
          display: "inline-block",
          marginTop: "20px",
        }}
      >
        Go Home
      </a>
    </main>
  );
} 
