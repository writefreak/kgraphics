"use client";

import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "./ui/dialog";
import { useState, useEffect } from "react";
import Picture from "./ui/picture";

export function Recent() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [works, setWorks] = useState<{ id: string; img: string }[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFeatured = async () => {
      try {
        const res = await fetch("/api/seeFeatured", { cache: "no-store" });
        if (!res.ok) throw new Error("Failed to fetch featured designs");

        const data = await res.json();
        if (data.success && Array.isArray(data.designs)) {
          setWorks(
            data.designs.map((design: any) => ({
              id: design.id,
              img: design.imageUrl,
            })),
          );
        }
      } catch (error) {
        console.error("Error loading featured designs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchFeatured();
  }, []);

  if (loading) return <p className="text-center py-10">Loading designs...</p>;
  if (works.length === 0)
    return (
      <p className="text-center py-10 text-gray-400 font-raleway text-xs">
        No featured designs yet.
      </p>
    );

  const repeated = [...works, ...works, ...works];

  return (
    <div className="mx-auto w-full pb-0 max-w-[1100px] overflow-hidden">
      <Dialog
        open={selectedImage !== null}
        onOpenChange={(open) => {
          if (!open) setSelectedImage(null);
        }}
      >
        <DialogTitle></DialogTitle>

        {/* INFINITE SCROLL TRACK */}
        <div className="relative w-full h-[450px] mb-4 overflow-hidden">
          <div
            className="flex gap-4 absolute top-0 left-0 h-full"
            style={{
              animation: `scroll-cards ${works.length * 8}s linear infinite`,
              width: `max-content`,
            }}
          >
            {repeated.map((w, i) => (
              <DialogTrigger asChild key={`${w.id}-${i}`}>
                <div
                  className="w-[360px] h-[450px] flex-shrink-0 cursor-pointer hover:card-hover-effect"
                  onClick={() => setSelectedImage(w.img)}
                >
                  <Picture
                    src={w.img}
                    alt=""
                    className="w-full h-full object-cover rounded-md"
                  />
                </div>
              </DialogTrigger>
            ))}
          </div>
        </div>

        {/* IMAGE MODAL */}
        {selectedImage && (
          <DialogContent className="bg-none flex flex-col items-center border-none shadow-none">
            <div className="md:h-[510px] md:w-[440px]">
              <img
                src={selectedImage}
                alt=""
                className="h-full w-full object-cover rounded-md"
              />
            </div>
          </DialogContent>
        )}
      </Dialog>

      <style>{`
        @keyframes scroll-cards {
          0%   { transform: translateX(0); }
          100% { transform: translateX(calc(-${works.length} * (380px + 1.5rem))); }
        }
      `}</style>
    </div>
  );
}
