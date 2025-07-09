"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infiniteMovingCards";

export function RecentInfinite() {
  return (
    <div className="px-14 rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        className="no-scrollbar"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    id: 1,
    img: `/WhatsApp Image 2025-07-05 at 18.51.28_81db55ed.jpg`,
  },
  {
    id: 2,
    img: `/WhatsApp Image 2025-07-05 at 18.51.28_35492685.jpg`,
  },
  {
    id: 3,
    img: `/WhatsApp Image 2025-07-05 at 18.51.29_497d36b7.jpg`,
  },
  {
    id: 4,
    img: `/WhatsApp Image 2025-07-05 at 18.51.29_b27e6e1c.jpg`,
  },
  {
    id: 5,
    img: `/WhatsApp Image 2025-07-05 at 18.51.29_fc6cd04b.jpg`,
  },
];
