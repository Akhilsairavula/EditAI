export default function RightPanel() {
  return (
    <aside className="w-80 border-l border-gray-800 bg-[#0F172A] p-6">
      <h2 className="mb-6 text-xl font-bold text-white">
        🤖 AI Assistant
      </h2>

      <div className="rounded-2xl bg-[#111827] p-5">
        <p className="text-gray-400">
          Ask EditAI to edit your video.
        </p>

        <textarea
          placeholder="Example:
Remove silence...
Create Instagram Reel...
Add captions..."
          className="mt-4 h-40 w-full resize-none rounded-xl border border-gray-700 bg-[#1F2937] p-4 text-white outline-none focus:border-blue-500"
        />

        <button className="mt-5 w-full rounded-xl bg-blue-600 py-3 font-semibold transition hover:bg-blue-700">
          Generate
        </button>
      </div>
    </aside>
  );
}