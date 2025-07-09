"use client";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  BriefcaseBusiness,
  GalleryVerticalEnd,
  House,
  Menu,
  Star,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export function MobileMenu() {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Menu className="text-[#030142]" />
      </SheetTrigger>
      <SheetContent className="bg-white">
        <SheetHeader className="bg-[#030142] h-28 rounded-bl-4xl w-full flex justify-end-safe">
          <SheetTitle className="text-xl text-center text-white pt-5 font-raleway">
            Hello, Welcome 👋
          </SheetTitle>
        </SheetHeader>

        <Link href="#" className="px-2 py-6 flex flex-col gap-10">
          {links.map((l, index) => {
            const isActive = activeIndex == index;
            return (
              <div
                onClick={() => {
                  setActiveIndex(index);
                }}
                key={index}
                className={
                  isActive
                    ? "bg-[#030142]/15 h-7 rounded-l-md flex gap-2 flex-row items-center px-8 border-r-5  py-6 border-r-[#030142]"
                    : " h-7 rounded-none flex gap-2 flex-row items-center px-6 py-6"
                }
              >
                {l.icon}
                <h3 className="text-sm text-[#030142]">{l.title}</h3>
              </div>
            );
          })}
        </Link>
      </SheetContent>
    </Sheet>
  );
}

const links = [
  {
    title: "Home",
    icon: <House className="text-[#030142]" />,
  },
  {
    title: "Services",
    icon: <BriefcaseBusiness className="text-[#030142]" />,
  },
  {
    title: "Reviews",
    icon: <Star className="text-[#030142]" />,
  },
  {
    title: "Portfolio",
    icon: <GalleryVerticalEnd className="text-[#030142]" />,
  },
];
