"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
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
        Ray'sStream Error
      </h1>

      <p style={{ marginTop: "20px" }}>
        {error.message}
      </p>

      <button
        onClick={() => reset()}
        style={{
          marginTop: "20px",
          padding: "12px 20px",
          background: "#ff0000",
          border: "none",
          borderRadius: "10px",
          color: "white",
          cursor: "pointer",
        }}
      >
        Try Again
      </button>
    </main>
  );
} 