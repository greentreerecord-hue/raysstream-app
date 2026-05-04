export default function WatchPage() {
  return (
    <div>
      <h1>Ray'sStream Player</h1>

      <video
        width="800"
        height="450"
        controls
        autoPlay
        loop
      >
        <source src="/videos/spaceship.mp4" type="video/mp4" />
      </video>

      <p>Watching:</p>
    </div>
  )
} 
