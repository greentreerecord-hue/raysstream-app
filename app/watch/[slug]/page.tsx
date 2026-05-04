"use client";

import { useState } from "react";

export default function WatchPage() {
  const [subscribed, setSubscribed] = useState(false);
  const [subscribers, setSubscribers] = useState(1280);
  const [comments, setComments] = useState<string[]>([]);
  const [comment, setComment] = useState("");

  function subscribe() {
    if (subscribed) return;
    setSubscribed(true);
    setSubscribers(subscribers + 1);
  }

  function postComment() {
    if (!comment.trim()) return;
    setComments([comment, ...comments]);
    setComment("");
  }

  return (
    <main className="min-h-screen bg-black px-6 py-8 text-white">
      <h1 className="mb-10 text-5xl">Ray&apos;sStream</h1>

      <section className="mx-auto max-w-3xl">
        <div className="flex justify-center bg-black">
          <iframe
            src="https://streamable.com/e/d3yj6q"
            allow="autoplay; fullscreen"
            allowFullScreen
            className="h-[760px] w-[380px] max-w-full border-0"
            title="Spaceship"
          />
        </div>

        <div className="mt-8">
          <h2 className="text-3xl font-bold">Spaceship</h2>
          <p className="mt-2 text-2xl text-gray-400">
            Ray&apos;sStream video player is live.
          </p>
        </div>

        <div className="mt-10 flex items-center justify-between rounded-xl bg-zinc-900 p-6">
          <div>
            <h3 className="text-2xl font-bold">Raymond Lee Robinson</h3>
            <p className="text-xl text-gray-400">
              {subscribers.toLocaleString()} subscribers
            </p>
          </div>

          <button
            onClick={subscribe}
            className="rounded-full bg-white px-8 py-4 text-2xl font-bold text-black"
          >
            {subscribed ? "Subscribed" : "Subscribe"}
          </button>
        </div>

        <div className="mt-10">
          <h3 className="mb-4 text-3xl font-bold">Comments</h3>

          <div className="flex gap-3">
            <input
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Add a comment..."
              className="flex-1 rounded-lg bg-zinc-900 px-4 py-3 text-white outline-none"
            />

            <button
              onClick={postComment}
              className="rounded-lg bg-blue-600 px-6 py-3 font-bold text-white"
            >
              Post
            </button>
          </div>

          <div className="mt-6 space-y-4">
            {comments.map((item, index) => (
              <div key={index} className="rounded-lg bg-zinc-900 p-4">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
} 
