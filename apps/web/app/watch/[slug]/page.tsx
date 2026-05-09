"use client";

import { useState } from "react";

export default function WatchPage() {
  const [subscribed, setSubscribed] = useState(false);

  return (
    <main className="bg-black text-white min-h-screen p-4">
      <div className="max-w-5xl mx-auto">

        <video
          className="w-full rounded-2xl mb-4 bg-black"
          controls
        >
          <source src="/videos/video2.mp4" type="video/mp4" />
        </video>

        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold">
              Scenic Album
            </h1>

            <p className="text-gray-400 mt-1">
              1,245 views • Ray'sStream
            </p>
          </div>

          <button
            onClick={() => setSubscribed(!subscribed)}
            className={`px-6 py-3 rounded-full font-bold text-lg transition-all ${
              subscribed
                ? "bg-gray-700 text-white"
                : "bg-red-600 hover:bg-red-700 text-white"
            }`}
          >
            {subscribed ? "Subscribed" : "Subscribe"}
          </button>
        </div>

        <div className="bg-zinc-900 rounded-2xl p-5">
          <h2 className="text-xl font-semibold mb-2">
            About this video
          </h2>

          <p className="text-gray-300">
            Welcome to Ray’sStream. Video playback and subscriptions are now working.
          </p>
        </div>

      </div>
    </main>
  );
} 