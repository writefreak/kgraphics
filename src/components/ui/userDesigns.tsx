"use client";
import React, { useState, useEffect } from "react";

interface Design {
  id: string;
  title: string;
  imageUrl: string;
}

const UserDesigns: React.FC = () => {
  const [designs, setDesigns] = useState<Design[]>([]);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState<string | null>(null);
  const [openImage, setOpenImage] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    const fetchDesigns = async () => {
      try {
        const res = await fetch("/api/viewdesign");
        if (!res.ok) throw new Error("Failed to fetch designs");
        const data = await res.json();

        const designsArray = Array.isArray(data) ? data : data.design || [];

        if (isMounted) setDesigns(designsArray);
      } catch (error) {
        console.error("Failed to load designs:", error);
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    fetchDesigns();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className="w-full">
      {/* Header */}
      <div className="flex flex-col gap-3 pb-5 md:pb-10">
        <h2 className="text-xl md:text-3xl font-raleway text-gray-800">
          K-Graphics Design Portfolio
        </h2>
        <p className="text-gray-500 text-sm">
          Here’s a quick look at our latest designs. Tap any design to see it in
          full detail.
        </p>
      </div>

      {message && (
        <p className="text-sm text-center text-gray-600 mb-3">{message}</p>
      )}

      {loading ? (
        <p className="text-gray-500 text-sm">Loading designs...</p>
      ) : designs.length === 0 ? (
        <p className="text-gray-500 text-sm">No designs uploaded yet.</p>
      ) : (
        // **Flex container holding cards, centered on desktop**
        <div className="flex flex-wrap justify-center gap-y-6 gap-x-6 md:gap-x-10 md:justify-center">
          {designs.map((design) => (
            <div
              key={design.id}
              className="
                relative w-full max-w-[320px] md:w-[300px]
                border border-gray-200 rounded-xl
                flex flex-col items-center
                shadow-sm hover:shadow-md transition cursor-pointer
              "
              onClick={() => setOpenImage(design.imageUrl)}
            >
              <div className="w-full h-[420px] bg-gray-100 rounded-lg overflow-hidden flex items-center justify-center">
                <img
                  src={design.imageUrl}
                  alt={design.title}
                  className="object-cover w-full h-full"
                />
              </div>
              <p className="py-3 text-sm font-raleway font-semibold text-[#030142] text-center">
                {design.title}
              </p>
            </div>
          ))}
        </div>
      )}

      {openImage && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
          onClick={() => setOpenImage(null)}
        >
          <img
            src={openImage}
            alt="Full view"
            className="max-w-full max-h-full object-contain"
          />
        </div>
      )}
    </div>
  );
};

export default UserDesigns;
