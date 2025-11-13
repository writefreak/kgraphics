"use client";

import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/Recentcarousel";
import Picture from "./ui/picture";

export function MobileRecent() {
  const [images, setImages] = React.useState<{ id: string; img: string }[]>([]);
  const [loading, setLoading] = React.useState(true);

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
            }))
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

  if (loading) return <p className="text-center py-10">Loading...</p>;

  return (
    <div data-aos="fade-up" className="overflow-hidden">
      <Carousel className="mx-auto px-5 pb-10">
        <CarouselContent className="pb-4">
          {images.length > 0 ? (
            images.map((image) => (
              <CarouselItem
                key={image.id}
                className="relative flex h-[500px] w-[270px] items-center justify-center"
              >
                <Picture
                  className="w-full h-full object-cover absolute rounded-md"
                  alt=""
                  src={image.img}
                />
              </CarouselItem>
            ))
          ) : (
            <p className="text-center w-full text-gray-400 font-raleway text-sm py-6">
              No featured designs yet.
            </p>
          )}
        </CarouselContent>

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-3 z-10">
          <CarouselPrevious className="bg-[#030142] text-white" />
          <CarouselNext className="bg-[#030142] text-white" />
        </div>
      </Carousel>
    </div>
  );
}
