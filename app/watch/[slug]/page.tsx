<video
  src="/videos/its-cool.mp4"
  autoPlay
  muted
  playsInline
  controls
  onEnded={() => {
    window.location.href = "/watch/video2";
  }}
  style={{
    width: "100%",
    maxHeight: "500px",
    background: "black",
    borderRadius: "12px",
  }}
/>
