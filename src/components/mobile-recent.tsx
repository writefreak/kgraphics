"use client";
import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/Recentcarousel";

export function MobileRecent() {
  return (
    <div className="overflow-hidden">
      {/* header here */}
      <Carousel className="mx-auto px-5 pb-10">
        <CarouselContent>
          {Array.from({ length: 4 }).map((_, i) => (
            <CarouselItem
              key={i + "a"}
              className="relative flex h-[470px] w-[270px] items-center justify-center "
            >
              <img
                className="w-full h-full object-cover absolute rounded-md"
                alt=""
                src={images[i].url}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-3 z-10">
          <CarouselPrevious className="bg-[#030142] text-white" />
          <CarouselNext className="bg-[#030142] text-white" />
        </div>
      </Carousel>
    </div>
  );
}

const images = [
  {
    id: 1,
    url: `/WhatsApp Image 2025-07-05 at 18.51.28_35492685.jpg`,
  },
  {
    id: 2,
    url: `/WhatsApp Image 2025-07-05 at 18.51.29_fc6cd04b.jpg`,
  },
  {
    id: 3,
    url: `/WhatsApp Image 2025-07-05 at 18.51.41_152958d8.jpg`,
  },
  {
    id: 4,
    url: `/WhatsApp Image 2025-07-05 at 18.51.29_b27e6e1c.jpg`,
  },
];
