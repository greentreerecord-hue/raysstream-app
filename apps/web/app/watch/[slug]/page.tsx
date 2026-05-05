export default function WatchPage({ params }: { params: { slug: string } }) {
  return (
    <div>
      <h1>Watching: {params.slug}</h1>

      <video width="600" controls autoPlay>
        <source src="/videos/test.mp4" type="video/mp4" />
      </video>
    </div>
  );
} 
