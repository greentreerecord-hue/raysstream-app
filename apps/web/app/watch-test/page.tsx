"use client";

import { useState } from "react";

export default function WatchTestPage() {
  const [subscribed, setSubscribed] = useState(false);

  return (
    <main className="min-h-screen bg-black text-white p-6">
      <h1 className="text-3xl font-bold mb-6">
        Ray'sStream Watch Test
      </h1>

      <video
        controls
        className="w-full max-w-4xl rounded-2xl mb-6"
        src="/videos/its-cool.mp4"
      />

      <button
        onClick={() => setSubscribed(!subscribed)}
        className="rounded-full bg-red-600 px-5 py-2 font-bold text-white"
      >
        {subscribed ? "Subscribed" : "Subscribe"}
      </button>
    </main>
  );
} 