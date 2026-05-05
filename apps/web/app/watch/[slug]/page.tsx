export default function WatchPage() {
  return (
    <div>
      <h1>Watching: test</h1>

      <video
        width="800"
        controls
        autoPlay
        muted
      >
        <source src="/videos/its-cool.mp4" type="video/mp4" />
      </video>
    </div>
  );
} 
