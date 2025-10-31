"use client";
import React, { useState } from "react";

interface Design {
  id: number;
  name: string;
  imageUrl: string;
}

const RecentDesign: React.FC = () => {
  const [designs] = useState<Design[]>([
    {
      id: 1,
      name: "Galaxy Tee",
      imageUrl: "/Catering.jpg",
    },
    {
      id: 2,
      name: "Evoluxn Hoodie",
      imageUrl: "/Eatrite.jpg",
    },
    {
      id: 3,
      name: "Abstract Sock",
      imageUrl: "/WhatsApp Image 2025-07-05 at 18.51.31_46b7483a.jpg",
    },
    {
      id: 4,
      name: "Space Cap",
      imageUrl: "/Eatrite.jpg",
    },
    {
      id: 5,
      name: "Lunar Tee",
      imageUrl: "/Catering.jpg",
    },
  ]);

  const [activeDesign, setActiveDesign] = useState<number | null>(null);

  const handleToggle = (id: number) => {
    // On mobile (click), toggle visibility
    if (window.innerWidth < 640) {
      setActiveDesign(activeDesign === id ? null : id);
    }
  };

  return (
    <div className="w-full">
      <h2 className="text-xl font-raleway text-gray-800 mb-6">
        Recent Designs
      </h2>

      {designs.length === 0 ? (
        <p className="text-gray-500 text-sm">No designs uploaded yet.</p>
      ) : (
        <div
          className="
            flex gap-4 overflow-x-auto no-scrollbar sm:overflow-x-visible
            sm:grid sm:grid-cols-3 sm:gap-6
          "
        >
          {designs.map((design) => (
            <div
              key={design.id}
              className="relative flex-shrink-0 sm:flex-shrink-0 w-64 sm:w-auto border border-gray-200 rounded-xl p-2 md:p-3 flex flex-col items-center shadow-sm hover:shadow-md transition"
              onClick={() => handleToggle(design.id)}
              onMouseEnter={() =>
                window.innerWidth >= 640 && setActiveDesign(design.id)
              }
              onMouseLeave={() =>
                window.innerWidth >= 640 && setActiveDesign(null)
              }
            >
              <div className="w-full h-80 bg-gray-100 rounded-lg overflow-hidden flex items-center justify-center relative">
                {activeDesign === design.id ? (
                  <div className="absolute inset-0 bg-white flex flex-col justify-center items-center">
                    <div className="flex flex-row gap-3">
                      <button className="px-4 py-2 bg-[#030142] text-white rounded-md text-sm font-medium hover:bg-blue-900 transition">
                        Feature
                      </button>
                      <button className="px-4 py-2 bg-red-900 text-white rounded-md text-sm font-medium hover:bg-red-700 transition">
                        Delete
                      </button>
                    </div>
                  </div>
                ) : (
                  <img
                    src={design.imageUrl}
                    alt={design.name}
                    className="object-cover w-full h-full"
                  />
                )}
              </div>
              <p className="mt-3 text-sm font-raleway font-semibold text-gray-700 text-center">
                {design.name}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default RecentDesign;
