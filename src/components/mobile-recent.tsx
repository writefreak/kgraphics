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
  return (
    <div data-aos="fade-up" className="overflow-hidden">
      {/* header here */}
      <Carousel className="mx-auto px-5 pb-10">
        <CarouselContent className="pb-4">
          {Array.from({ length: 12 }).map((_, i) => (
            <CarouselItem
              key={i + "a"}
              className="relative flex h-[500px] w-[270px] items-center justify-center "
            >
              <Picture
                className="w-full h-full object-cover absolute rounded-md"
                alt=""
                src={images[i].img}
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
  { id: 1, img: "/WhatsApp Image 2025-07-05 at 18.51.29_fc6cd04b.jpg" },
  { id: 2, img: "/WhatsApp Image 2025-07-05 at 18.51.28_35492685.jpg" },
  { id: 3, img: "/WhatsApp Image 2025-07-05 at 18.51.41_152958d8.jpg" },
  { id: 4, img: "/WhatsApp Image 2025-07-05 at 18.51.29_b27e6e1c.jpg" },
  { id: 5, img: "/first-oracle.jpg" },
  { id: 6, img: "/WhatsApp Image 2025-07-05 at 18.51.31_46b7483a.jpg" },
  { id: 7, img: "/WhatsApp Image 2025-07-05 at 18.51.35_0866ef69.jpg" },
  { id: 8, img: "/Eatrite.jpg" },
  { id: 9, img: "/Catering.jpg" },
  { id: 10, img: "/WhatsApp Image 2025-07-05 at 18.51.28_81db55ed.jpg" },
  { id: 11, img: "/WhatsApp Image 2025-07-05 at 18.51.36_70bb0f12.jpg" },
  { id: 12, img: "/WhatsApp Image 2025-07-05 at 18.51.31_9764a71a.jpg" },
];
