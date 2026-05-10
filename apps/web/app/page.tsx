export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-white p-8">
      <h1 className="text-5xl font-bold mb-6 text-red-500">
        🎬 Ray’sStream
      </h1>

      <p className="text-gray-300 mb-10">
        Watch trending videos from creators around the world.
      </p>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <div className="bg-zinc-900 rounded-2xl overflow-hidden shadow-lg">
          <video
            controls
            className="w-full"
            src="https://www.w3schools.com/html/mov_bbb.mp4"
          />

          <div className="p-4">
            <h2 className="text-xl font-semibold">
              Space Adventure
            </h2>

            <p className="text-gray-400 text-sm mt-2">
              1.2M views • 2 days ago
            </p>

            <button className="mt-4 bg-red-600 hover:bg-red-700 px-4 py-2 rounded-xl font-semibold">
              Subscribe
            </button>
          </div>
        </div>

        <div className="bg-zinc-900 rounded-2xl overflow-hidden shadow-lg">
          <video
            controls
            className="w-full"
            src="https://www.w3schools.com/html/movie.mp4"
          />

          <div className="p-4">
            <h2 className="text-xl font-semibold">
              Ocean Documentary
            </h2>

            <p className="text-gray-400 text-sm mt-2">
              845K views • 5 days ago
            </p>

            <button className="mt-4 bg-red-600 hover:bg-red-700 px-4 py-2 rounded-xl font-semibold">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </main>
  );
} 