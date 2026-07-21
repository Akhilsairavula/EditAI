export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6">

      <h1 className="text-6xl font-bold mb-4">
        EditAI
      </h1>

      <p className="text-xl text-gray-400 mb-10">
        AI Powered Video Editing Platform
      </p>

      <button className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-xl text-lg font-semibold transition">
        Upload Video
      </button>

    </main>
  );
}