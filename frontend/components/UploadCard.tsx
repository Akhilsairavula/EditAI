"use client";

import { useRef, useState } from "react";

export default function UploadCard() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [videoURL, setVideoURL] = useState("");

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];

    if (file) {
      setSelectedFile(file);
      setVideoURL(URL.createObjectURL(file));
    }
  };

  const openFilePicker = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="mt-10 rounded-3xl border-2 border-dashed border-gray-700 bg-[#111827] p-10 shadow-2xl transition-all duration-300 hover:border-blue-500 hover:bg-[#151d2d]">
      <div className="flex flex-col items-center justify-center text-center">
        <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-blue-600/20 text-4xl">
          📁
        </div>

        <h2 className="text-2xl font-bold">
          Drag & Drop your video
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

        {/* Video Preview */}
        {videoURL && (
          <div className="mt-8 w-full">
            <video
              src={videoURL}
              controls
              className="w-full rounded-2xl border border-gray-700"
            />
          </div>
        )}

        {/* File Details */}
        {selectedFile && (
          <div className="mt-8 w-full rounded-xl bg-gray-900 p-4 text-left">
            <h3 className="font-semibold text-green-400">
              ✅ Video Selected
            </h3>

            <p className="mt-2">
              <strong>Name:</strong> {selectedFile.name}
            </p>

            <p>
              <strong>Size:</strong>{" "}
              {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
            </p>

            <p>
              <strong>Type:</strong> {selectedFile.type}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}