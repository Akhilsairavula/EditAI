import UploadCard from "@/components/UploadCard";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0B0F19] text-white">
      <Navbar />

      <section className="mx-auto max-w-7xl px-6 py-12">
        <h2 className="text-4xl font-bold">
          Welcome back, Creator 👋
        </h2>

        <p className="mt-3 text-lg text-gray-400">
          Upload your next video and let AI handle the editing.
        </p>
        <UploadCard />
      </section>
    </main>
  );
}