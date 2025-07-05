"use client";
import React from "react";
import { useState } from "react";
import { ChevronRight } from "lucide-react";
import { Button } from "./ui/button";

export default function MobileWorks() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-1 gap-6 ">
      {recentWorks.map((work, index) => {
        const isActive = activeIndex === index;

        return (
          <div
            key={index}
            onClick={() => setActiveIndex(isActive ? null : index)}
            className={`rounded-lg shadow-md p-4 transition-all duration-300 relative overflow-hidden bg-[#030142] ${
              isActive ? "h-72 scale-105" : "h-72"
            }`}
          >
            {/* Image Section (hidden when active) */}
            {!isActive && (
              <div className="h-72 w-full">
                {/* <img
                  src={work.imageUrl}
                  alt={work.title}
                  className="w-full h-full object-cover rounded-md transition-opacity duration-500"
                /> */}
              </div>
            )}

            {/* Description Overlay */}
            {isActive && (
              <div className="absolute h-72 inset-0 dark:bg-[#171717] bg-white px-7 flex flex-col justify-center z-10 transition-opacity duration-300">
                <h3 className="text-xl font-semibold text-[#030142]">
                  {work.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-400  text-sm mt-2">
                  {work.description}
                </p>
                <div className="flex items-center gap-2">
                  <Button className="mt-6 text-sm  bg-transparent text-[#030142] border border-[#030142] px-4 py-2 rounded-full">
                    View Project
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

const recentWorks = [
  {
    title: "HMX Luxury Brand Story",
    description:
      "A compelling narrative crafted to position HMX as a symbol of sophistication and class.",
    imageUrl: "/creative.jpeg",
    link: "#",
  },
  {
    title: "Fuse Brand Story",
    description:
      "Fuse’s story was shaped to mirror innovation, youth, and cultural edge.",
    imageUrl: "/fuse.jpeg",
    link: "#",
  },
  {
    title: "Spicyheat Brand Story",
    description:
      "We created a bold and flavorful narrative that matched Spicyheat’s fiery identity.",
    imageUrl: "/spicy.jpeg",
    link: "#",
  },
];
