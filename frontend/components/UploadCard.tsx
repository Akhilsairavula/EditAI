"use client";

import { useRef, useState } from "react";

export default function UploadCard() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [videoURL, setVideoURL] = useState("");
  const [isDragging, setIsDragging] = useState(false);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const processFile = (file: File) => {
    if (!file.type.startsWith("video/")) {
      alert("Please upload a valid video file.");
      return;
    }

    setSelectedFile(file);
    setVideoURL(URL.createObjectURL(file));
  };

  const handleFileChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];

    if (file) {
      processFile(file);
    }
  };

  const openFilePicker = () => {
    fileInputRef.current?.click();
  };

  const removeVideo = () => {
    setSelectedFile(null);
    setVideoURL("");

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragging(false);

    const file = event.dataTransfer.files[0];

    if (file) {
      processFile(file);
    }
  };

  return (
    <div
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      className={`mt-10 rounded-3xl border-2 border-dashed p-10 shadow-2xl transition-all duration-300 ${
        isDragging
          ? "border-blue-500 bg-blue-900/20 scale-[1.01]"
          : "border-gray-700 bg-[#111827] hover:border-blue-500 hover:bg-[#151d2d]"
      }`}
    >
      <div className="flex flex-col items-center justify-center text-center">
        <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-blue-600/20 text-4xl">
          📁
        </div>

        <h2 className="text-2xl font-bold">
          {isDragging ? "Drop your video here" : "Drag & Drop your video"}
        </h2>

        <p className="mt-2 text-gray-400">
          Upload MP4, MOV or AVI files
        </p>

        <button
          onClick={openFilePicker}
          className="mt-8 rounded-xl bg-blue-600 px-8 py-3 font-semibold transition hover:bg-blue-700"
        >
          Upload Video
        </button>

        <input
          ref={fileInputRef}
          type="file"
          accept="video/*"
          className="hidden"
          onChange={handleFileChange}
        />

        {videoURL && (
          <div className="mt-8 w-full">
            <video
              src={videoURL}
              controls
              className="w-full rounded-2xl border border-gray-700"
            />
          </div>
        )}

        {selectedFile && (
          <div className="mt-8 w-full rounded-xl bg-gray-900 p-5 text-left">
            <h3 className="font-semibold text-green-400">
              ✅ Video Selected
            </h3>

            <p className="mt-3">
              <strong>Name:</strong> {selectedFile.name}
            </p>

            <p>
              <strong>Size:</strong>{" "}
              {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
            </p>

            <p>
              <strong>Type:</strong> {selectedFile.type}
            </p>

            <button
              onClick={removeVideo}
              className="mt-5 rounded-lg bg-red-600 px-5 py-2 font-medium transition hover:bg-red-700"
            >
              🗑 Remove Video
            </button>
          </div>
        )}
      </div>
    </div>
  );
}