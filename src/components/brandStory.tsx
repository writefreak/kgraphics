"use client";
import React from "react";
import { Button } from "./ui/button";
import { saveAs } from "file-saver";

const BrandStory = () => {
  const handleDownload = () => {
    saveAs("/K-Graphics Brand Story .pdf", "Our-Brand-Story.pdf");
  };
  return (
    <div className="border-t border-t-black/10 border-b border-b-black/10 md:border-0">
      <div className="md:pt-7 md:pb-16 pt-10 pb-5 flex flex-col items-center ">
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
            className="hover:bg-[#030142] hover:text-white h-7 text-xs font-raleway hover:-translate-y-1 transition-all duration-500 border-2   bg-transparent text-[#030142] border-[#030142] rounded-full "
          >
            Download Story Here
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BrandStory;
