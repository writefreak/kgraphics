"use client";

import * as React from "react";
import Picture from "./ui/picture";

export function MobileRecent() {
  const [images, setImages] = React.useState<{ id: string; img: string }[]>([]);
  const [loading, setLoading] = React.useState(true);
  const scrollRef = React.useRef<HTMLDivElement>(null);
  const intervalRef = React.useRef<NodeJS.Timeout | null>(null);
  const repeated = [...images, ...images, ...images];

  React.useEffect(() => {
    const fetchFeatured = async () => {
      try {
        const res = await fetch("/api/seeFeatured", { cache: "no-store" });
        if (!res.ok) throw new Error("Failed to fetch featured designs");

        const data = await res.json();
        if (data.success && Array.isArray(data.designs)) {
          setImages(
            data.designs.map((design: any) => ({
              id: design.id,
              img: design.imageUrl,
            })),
          );
        } else {
          console.warn("Unexpected API response format:", data);
        }
      } catch (err) {
        console.error("Error fetching featured designs:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchFeatured();
  }, []);

  React.useEffect(() => {
    const el = scrollRef.current;
    if (!el || images.length === 0) return;

    intervalRef.current = setInterval(() => {
      el.scrollLeft += 0.5;
      if (el.scrollLeft >= el.scrollWidth / 3) {
        el.scrollLeft = 0;
      }
    }, 16);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [images]);

  const pause = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };
  const resume = () => {
    const el = scrollRef.current;
    if (!el) return;
    intervalRef.current = setInterval(() => {
      el.scrollLeft += 0.5;
      if (el.scrollLeft >= el.scrollWidth / 3) el.scrollLeft = 0;
    }, 16);
  };

  if (loading) return <p className="text-center py-10">Loading...</p>;

  return (
    <div data-aos="fade-up" className="overflow-hidden pb-10 pt-8">
      <div
        ref={scrollRef}
        onTouchStart={pause}
        onTouchEnd={resume}
        className="flex gap-4 overflow-x-auto scrollbar-hide px-5"
      >
        {images.length > 0 ? (
          repeated.map((image, i) => (
            <div
              key={`${image.id}-${i}`}
              data-card
              className="relative flex-shrink-0 w-[270px] h-[400px]"
            >
              <Picture
                className="w-full h-full object-cover rounded-md"
                alt=""
                src={image.img}
              />
            </div>
          ))
        ) : (
          <p className="text-center w-full text-gray-400 font-raleway text-sm py-6">
            No featured designs yet.
          </p>
        )}
      </div>
    </div>
  );
}
