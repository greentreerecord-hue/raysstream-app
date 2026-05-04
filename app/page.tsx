export default function Home() {
  const videos = [
    {
      title: "First Video",
      views: "1M views",
      thumbnail: "https://i.imgur.com/8Km9tLL.jpg",
      slug: "first-video"
    },
    {
      title: "Second Video",
      views: "500K views",
      thumbnail: "https://i.imgur.com/5tj6S7Ol.jpg",
      slug: "second-video"
    },
    {
      title: "Third Video",
      views: "250K views",
      thumbnail: "https://i.imgur.com/3ZQ3Z4Yl.jpg",
      slug: "third-video"
    }
  ];

  return (
    <main className="p-6">
      {/* Header */}
      <h1 className="text-2xl font-bold">Ray’sStream</h1>
      <p className="text-gray-500 mb-4">
        The future of video streaming starts here.
      </p>

      {/* Search */}
      <input
        type="text"
        placeholder="Search videos..."
        className="border p-2 w-full mb-6"
      />

      {/* Trending */}
      <h2 className="text-lg font-semibold mb-4">🔥 Trending</h2>

      {/* Video Grid */}
      <div className="grid grid-cols-3 gap-4">
        {videos.map((video) => (
          <a key={video.slug} href={`/watch/${video.slug}`}>
            <div>
              <img
                src={video.thumbnail}
                alt={video.title}
                className="w-full h-40 object-cover rounded-lg"
              />

              <h3 className="mt-2 font-semibold">
                {video.title}
              </h3>

              <p className="text-sm text-gray-500">
                Ray • {video.views}
              </p>
            </div>
          </a>
        ))}
      </div>
    </main>
  );
} 
