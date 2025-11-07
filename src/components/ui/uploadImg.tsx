"use client";
import React, { useState, ChangeEvent } from "react";
import { supabase } from "../../../lib/supabaseClient";
interface UploadImgProps {
  onUpload?: (url: string) => void;
}

const UploadImg: React.FC<UploadImgProps> = ({ onUpload }) => {
  const [file, setFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [uploading, setUploading] = useState(false);

  const handleFileChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (!selectedFile) return;

    setFile(selectedFile);
    setPreviewUrl(URL.createObjectURL(selectedFile)); // quick preview
    setUploading(true);

    try {
      // unique filename for Supabase
      const fileName = `${Date.now()}-${selectedFile.name}`;

      // upload to "designs" bucket
      const { data, error } = await supabase.storage
        .from("design")
        .upload(fileName, selectedFile);

      if (error) throw error;

      // get public URL for the uploaded file
      const { data: publicData } = supabase.storage
        .from("design")
        .getPublicUrl(fileName);

      const publicUrl = publicData?.publicUrl;
      if (onUpload && publicUrl) onUpload(publicUrl); // send URL to parent

      console.log("✅ Uploaded:", publicUrl);
    } catch (err) {
      console.error("Upload failed:", err);
    } finally {
      setUploading(false);
    }
  };

  const handleRemove = () => {
    setFile(null);
    setPreviewUrl(null);
    if (onUpload) onUpload("");
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
          className="cursor-pointer flex flex-col items-center justify-center text-gray-500"
        >
          <span className="text-lg font-raleway">Click to upload image</span>
        </label>
      ) : (
        <div className="flex flex-col items-center gap-3">
          {previewUrl && (
            <img
              src={previewUrl}
              alt="Preview"
              className="w-40 h-40 object-cover rounded-md"
            />
          )}

          {uploading ? (
            <p className="text-sm text-gray-500">Uploading...</p>
          ) : (
            <>
              <p className="text-gray-700 text-sm">Selected: {file.name}</p>
              <button
                onClick={handleRemove}
                className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
              >
                Remove
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default UploadImg;
