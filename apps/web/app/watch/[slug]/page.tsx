<div className="max-w-6xl mx-auto px-4 py-6">
  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
   
    {/* VIDEO AREA */}
    <div className="lg:col-span-2">
      <video
        controls
        className="w-full rounded-2xl bg-black"
      >
        <source src={video.url} type="video/mp4" />
      </video>

      <h1 className="text-2xl font-bold mt-4">
        {video.title}
      </h1>

      <div className="flex items-center justify-between mt-4">
        <div>
          <p className="font-semibold text-lg">
            Ray'sStream Creator
          </p>

          <p className="text-sm text-gray-400">
            {video.views || 0} views
          </p>
        </div>

        <button className="bg-red-600 hover:bg-red-700 px-5 py-2 rounded-full font-semibold transition">
          Subscribe
        </button>
      </div>
    </div>

    {/* SIDEBAR */}
    <div className="space-y-4">
      <div className="bg-zinc-900 rounded-xl p-4">
        Up Next videos
      </div>
    </div>

  </div>
</div> 