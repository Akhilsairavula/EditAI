export default function Navbar() {
  return (
    <header className="w-full border-b border-gray-800 bg-black/50 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <span className="text-2xl">🎬</span>
          <h1 className="text-xl font-bold text-white">EditAI</h1>
        </div>

        {/* Search */}
        <div className="hidden md:block">
          <input
            type="text"
            placeholder="Search projects..."
            className="w-72 rounded-lg border border-gray-700 bg-gray-900 px-4 py-2 text-sm text-white placeholder-gray-400 outline-none focus:border-blue-500"
          />
        </div>

        {/* Profile */}
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 font-semibold text-white">
            A
          </div>
        </div>
      </div>
    </header>
  );
}