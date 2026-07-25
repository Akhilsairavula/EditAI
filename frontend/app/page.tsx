import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import Workspace from "@/components/Workspace";
import RightPanel from "@/components/RightPanel";

export default function Home() {
  return (
    <main className="flex h-screen flex-col bg-[#0b1120]">
      <Navbar />

      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <Workspace />
        <RightPanel />
      </div>
    </main>
  );
}