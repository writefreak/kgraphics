"use client";
import React, { useState } from "react";
import { Button } from "./ui/button";
import BrandStory from "./brandStory";
import { ReviewDialog } from "./reviewDialog";

const CallToAction = () => {
  return (
    <div className="flex items-center justify-center md:px-14 md:pb-20 md:pt-10 py-14 md:p-0 px-4">
      <div
        data-aos="fade-up"
        className="md:w-[950px] bg-[#030142] h-[195px] w-full rounded-md flex gap-6  items-center justify-center flex-col"
      >
        <div className="md:pt-4  pt-10 pb-5 flex flex-col items-center justify-center gap-2">
          <h2 className="md:text-3xl text-2xl font-raleway text-center font-[500] text-white">
            Share Your Unique Experience
          </h2>
          <p className="font-light font-inter text-sm text-center text-white/80">
            Tell us what you love about our services and <br /> how we can
            improve them to shine even brighter.
          </p>
          <div className="pt-4">
            <ReviewDialog />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
