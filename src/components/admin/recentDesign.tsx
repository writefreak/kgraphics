"use client";
import React, { useState, useEffect } from "react";

interface Design {
  id: string;
  title: string;
  imageUrl: string;
}

const RecentDesign: React.FC = () => {
  const [designs, setDesigns] = useState<Design[]>([]);
  const [activeDesign, setActiveDesign] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    const fetchDesigns = async () => {
      try {
        const res = await fetch("/api/viewdesign");
        if (!res.ok) throw new Error("Failed to fetch designs");
        const data = await res.json();

        // Handle both wrapped and direct array responses
        const designsArray = Array.isArray(data) ? data : data.design || [];

        if (isMounted) {
          setDesigns(designsArray);
        }
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

  const handleToggle = (id: string) => {
    if (window.innerWidth < 640) {
      setActiveDesign((prev) => (prev === id ? null : id));
    }
  };

  const handleFeature = async (id: string) => {
    try {
      setMessage(null);
      const res = await fetch("/api/featureDesign", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to feature design");

      setMessage("Design featured successfully.");
    } catch (error) {
      console.error("Feature design error:", error);
      setMessage("Error featuring design.");
    } finally {
      setTimeout(() => setMessage(null), 3000);
    }
  };

  return (
    <div className="w-full">
      <h2 className="text-xl font-raleway text-gray-800 mb-6">
        Recent Designs
      </h2>

      {message && (
        <p className="text-sm text-center text-gray-600 mb-3">{message}</p>
      )}

      {loading ? (
        <p className="text-gray-500 text-sm">Loading designs...</p>
      ) : designs.length === 0 ? (
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
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleFeature(design.id);
                        }}
                        className="px-4 py-2 bg-[#030142] text-white rounded-md text-sm font-medium hover:bg-blue-900 transition"
                      >
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
                    alt={design.title}
                    className="object-cover w-full h-full"
                  />
                )}
              </div>
              <p className="mt-3 text-sm font-raleway font-semibold text-gray-700 text-center">
                {design.title}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default RecentDesign;
