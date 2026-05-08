export default function WatchPage() {
  return (
    <main className="min-h-screen bg-[#0f172a] text-white">
      <div className="mx-auto max-w-5xl px-4 py-6">
        <div className="aspect-video w-full overflow-hidden rounded-2xl bg-black">
          <video
            className="h-full w-full"
            controls
            autoPlay
            muted
            playsInline
            src="/videos/its-cool.mp4"
          />
        </div>

        <div className="mt-5">
          <h1 className="text-3xl font-bold">Test Video</h1>
          <p className="mt-2 text-gray-400">2,431 views</p>
        </div>

        <div className="mt-5 flex items-center gap-4 border-b border-white/10 pb-5">
          <div>
            <p className="text-xl font-bold">Ray&apos;sStream</p>
            <p className="text-sm text-gray-400">1 subscriber</p>
          </div>

          <button className="rounded-full bg-red-600 px-5 py-2 font-bold text-white hover:bg-red-500">
            Subscribe
          </button>

          <button className="rounded-full bg-yellow-500 px-5 py-2 font-bold text-black hover:bg-yellow-400">
            Join $4.99/mo
          </button>
        </div>

        <div className="mt-6 rounded-2xl bg-white/10 p-4">
          <p className="font-bold">About this video</p>
          <p className="mt-2 text-gray-300">
            Welcome to Ray&apos;sStream. Subscribe or join monthly to support the creator.
          </p>
        </div>
      </div>
    </main>
  );
} 