"use client";
import { Plus } from "lucide-react";
import React, { useState } from "react";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import UploadImg from "../ui/uploadImg";
import { supabase } from "../../../lib/supabaseClient"; // ✅ connects Supabase directly

const AddDesign = () => {
  const [title, setTitle] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{
    type: "success" | "error" | "";
    text: string;
  }>({
    type: "",
    text: "",
  });

  const handleImageUpload = (url: string) => setImageUrl(url);

  const handleSave = async () => {
    if (!title || !imageUrl) {
      setMessage({
        type: "error",
        text: "Please enter a title and upload an image before saving.",
      });
      return;
    }

    setLoading(true);
    setMessage({ type: "", text: "" });

    try {
      const { data, error } = await supabase.from("Design").insert([
        {
          title,
          imageUrl, // ⚠️ use the exact column name in your Prisma/Supabase schema
          description: "",
        },
      ]);

      if (error) throw error;

      setMessage({ type: "success", text: "Design uploaded successfully!" });
      setTitle("");
      setImageUrl("");
    } catch (err) {
      console.error("❌ Error uploading design:", err);
      setMessage({
        type: "error",
        text: "Something went wrong while uploading.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="md:pt-0 pt-4">
      <Dialog>
        <DialogTrigger asChild>
          <Button className="h-14 w-full hover:bg-gray-300 bg-gray-200 rounded-xl flex justify-center items-center gap-3">
            <Plus strokeWidth={1} className="h-6 w-6 text-black" />
            <span className="font-raleway text-black ">
              Upload a new design
            </span>
          </Button>
        </DialogTrigger>

        <DialogContent className="bg-white">
          <DialogHeader>
            <DialogTitle className="font-raleway">
              Upload a new design
            </DialogTitle>
            <DialogDescription></DialogDescription>
          </DialogHeader>

          <div>
            <UploadImg onUpload={handleImageUpload} />

            <div className="w-full md:px-2 py-8 flex flex-col gap-2">
              <span className="font-raleway text-sm">
                Enter your design name
              </span>
              <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full rounded-sm p-1 border border-gray-300 outline-0 placeholder:font-raleway placeholder:text-sm text-sm"
                type="text"
                placeholder="Please enter a name for your design"
              />
            </div>

            {message.text && (
              <p
                className={`text-sm mt-2 font-raleway ${
                  message.type === "success"
                    ? "text-green-600"
                    : message.type === "error"
                    ? "text-red-600"
                    : "text-gray-600"
                }`}
              >
                {message.text}
              </p>
            )}
          </div>

          <DialogFooter className="flex flex-row gap-3 w-full">
            <DialogClose asChild>
              <Button variant="outline" className="flex-1">
                Cancel
              </Button>
            </DialogClose>
            <Button
              type="button"
              onClick={handleSave}
              disabled={loading}
              className="flex-1"
            >
              {loading ? "Saving..." : "Save changes"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AddDesign;
