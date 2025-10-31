"use client";
import React, { useState, ChangeEvent } from "react";

const UploadImg: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  const handleRemove = () => {
    setFile(null);
  };

  return (
    <div className="flex flex-col items-center justify-center w-full max-w-md mx-auto p-6 border border-dashed border-gray-400 rounded-sm">
      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="hidden"
        id="fileInput"
      />

      {!file ? (
        <label
          htmlFor="fileInput"
          className="cursor-pointer flex flex-col items-center justify-center  text-gray-500"
        >
          <span className="text-lg font-raleway">Click to upload image</span>
        </label>
      ) : (
        <div className="flex flex-col items-center gap-3">
          <p className="text-gray-700 text-sm">Selected: {file.name}</p>
          <button
            onClick={handleRemove}
            className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
          >
            Remove
          </button>
        </div>
      )}
    </div>
  );
};

export default UploadImg;
