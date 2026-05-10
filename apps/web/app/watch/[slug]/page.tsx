import { notFound } from "next/navigation";

type PageProps = {
  params: {
    slug: string;
  };
};

export default function WatchPage({ params }: PageProps) {
  const { slug } = params;

  if (!slug) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-black text-white p-6">
      <div className="max-w-5xl mx-auto">
        <video
          controls
          className="w-full rounded-xl mb-6"
          src="/video3.mp4"
        />

        <h1 className="text-3xl font-bold mb-2">
          Ray’sStream Video
        </h1>

        <p className="text-gray-400 mb-6">
          Watching slug: {slug}
        </p>

        <button className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-xl font-semibold">
          Subscribe
        </button>
      </div>
    </main>
  );
}  