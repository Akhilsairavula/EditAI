"use client";

import { useRef, useState } from "react";

type UploadCardProps = {
  onUpload: (file: File) => void;
};

export default function UploadCard({ onUpload }: UploadCardProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const [dragging, setDragging] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const processFile = (file: File) => {
    if (!file.type.startsWith("video/")) {
      alert("Please upload a video file.");
      return;
    }

    setSelectedFile(file);
    onUpload(file);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      processFile(e.target.files[0]);
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragging(false);

    if (e.dataTransfer.files?.[0]) {
      processFile(e.dataTransfer.files[0]);
    }
  };

  return (
    <div
      onDragOver={(e) => {
        e.preventDefault();
        setDragging(true);
      }}
      onDragLeave={() => setDragging(false)}
      onDrop={handleDrop}
      className={`rounded-2xl border-2 border-dashed p-10 text-center transition-all ${
        dragging
          ? "border-blue-500 bg-slate-800"
          : "border-slate-700 bg-slate-900"
      }`}
    >
      <h2 className="mb-3 text-2xl font-semibold text-white">
        Upload Your Video
      </h2>

      <p className="mb-6 text-slate-400">
        Drag & drop a video here or click the button below.
      </p>

      <input
        ref={inputRef}
        type="file"
        accept="video/*"
        className="hidden"
        onChange={handleFileChange}
      />

      <button
        onClick={() => inputRef.current?.click()}
        className="rounded-xl bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700"
      >
        Choose Video
      </button>

      {selectedFile && (
        <div className="mt-6 rounded-xl bg-slate-800 p-4 text-left">
          <p className="font-medium text-white">{selectedFile.name}</p>
          <p className="mt-1 text-sm text-slate-400">
            {(selectedFile.size / (1024 * 1024)).toFixed(2)} MB
          </p>
        </div>
      )}
    </div>
  );
}