"use client";
import React from "react";
import { Button } from "./ui/button";
import { saveAs } from "file-saver";

const BrandStory = () => {
  const handleDownload = async () => {
    // Trigger file download
    saveAs("/K-Graphics Brand Story .pdf", "Our-Brand-Story.pdf");

    // Log the download to your backend
    try {
      await fetch("/api/logDownload", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: "brandstory" }), // pass type for tracking
      });
      console.log("shown");
    } catch (err) {
      console.error("Failed to log download:", err);
    }
  };

  return (
    <div className="border-t border-t-black/10 border-b border-b-black/10 md:border-0">
      <div
        data-aos="fade-up"
        className="md:pt-5 md:pb-16 pt-10 pb-5 flex flex-col items-center "
      >
        <h2 className="md:text-3xl text-2xl font-raleway text-center font-[500]">
          Our Brand Story
        </h2>
        <p className="font-light font-inter text-sm text-center">
          Get to know us better—dive into our story and{" "}
          <br className="md:hidden" /> discover the passion,{" "}
          <br className="hidden md:block" />
          purpose, and vision that fuel <br className="md:hidden" /> everything
          we create.
        </p>
        <div className="pt-5 pb-3">
          <Button
            onClick={handleDownload}
            className="h-7 md:p-4 text-xs md:text-base font-raleway hover:bg-transparent hover:-translate-y-1 transition-all duration-500 text-[#030142] border-[#030142] border-2 bg-transparent rounded-full"
          >
            Download Story Here
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BrandStory;
