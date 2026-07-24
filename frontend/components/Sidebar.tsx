export default function Sidebar() {
  const menuItems = [
    { icon: "🏠", title: "Dashboard" },
    { icon: "📁", title: "Projects" },
    { icon: "🎬", title: "Media Library" },
    { icon: "🤖", title: "AI Tools" },
    { icon: "📤", title: "Exports" },
    { icon: "⚙️", title: "Settings" },
  ];

  return (
    <aside className="w-64 border-r border-gray-800 bg-[#0F172A] p-6">
      <h2 className="mb-8 text-xl font-bold text-white">
        Navigation
      </h2>

      <nav className="space-y-3">
        {menuItems.map((item) => (
          <button
            key={item.title}
            className="flex w-full items-center gap-4 rounded-xl px-4 py-3 text-left text-gray-300 transition-all duration-200 hover:bg-blue-600 hover:text-white"
          >
            <span className="text-2xl">{item.icon}</span>

            <span className="font-medium">
              {item.title}
            </span>
          </button>
        ))}
      </nav>
    </aside>
  );
}