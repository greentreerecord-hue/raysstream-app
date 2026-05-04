"use client";

import { useState } from "react";

export default function WatchPage() {
  const [subscribed, setSubscribed] = useState(false);
  const [subscribers, setSubscribers] = useState(1280);

  function handleSubscribe() {
    if (subscribed) {
      setSubscribed(false);
      setSubscribers(subscribers - 1);
    } else {
      setSubscribed(true);
      setSubscribers(subscribers + 1);
    }
  }

  return (
    <div className="min-h-screen bg-black text-white flex justify-center">
      <div className="w-full max-w-5xl p-4">

        <h1 className="text-3xl mb-6">Ray'sStream</h1>

        {/* VIDEO */}
        <iframe
          src="https://streamable.com/e/d3yj6q"
          className="w-full h-[500px] rounded-lg"
          allow="autoplay"
          allowFullScreen
        />

        {/* TITLE */}
        <h2 className="text-xl font-semibold mt-4">Spaceship</h2>
        <p className="text-gray-400">Ray'sStream video player is live.</p>

        {/* CHANNEL + SUBSCRIBE */}
        <div className="flex justify-between items-center mt-6 bg-zinc-900 p-4 rounded-lg">
          <div>
            <h3 className="font-bold">Raymond Lee Robinson</h3>
            <p className="text-gray-400 text-sm">
              {subscribers.toLocaleString()} subscribers
            </p>
          </div>

          <button
            onClick={handleSubscribe}
            className={`px-5 py-2 rounded-full font-bold ${
              subscribed ? "bg-gray-600" : "bg-white text-black"
            }`}
          >
            {subscribed ? "Subscribed" : "Subscribe"}
          </button>
        </div>

      </div>
    </div>
  );
} 