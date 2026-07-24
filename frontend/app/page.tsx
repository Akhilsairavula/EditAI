import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import Workspace from "@/components/Workspace";
import RightPanel from "@/components/RightPanel";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0B0F19] text-white">
      <Navbar />

      <div className="flex h-[calc(100vh-64px)]">
        <Sidebar />

        <Workspace />

        <RightPanel />
      </div>
    </main>
  );
}