import React from "react";
import { Button } from "./ui/button";
import { ChevronRight } from "lucide-react";
import { Card } from "./ui/card";
import MobileWorks from "./mobile-works";

const RecentWorks = () => {
  return (
    <div>
      <div className="md:py-0 py-5 border-t md:border-t-0 flex flex-col gap-3 items-center ">
        <h2 className="md:text-2xl text-xl font-raleway text-center font-[500]">
          Our Recent Works
        </h2>
      </div>
      <div className="md:hidden px-7">
        <MobileWorks />
      </div>
      <div className="md:grid grid-cols-3 hidden gap-12 px-40 py-14">
        {recentWorks.map((work, index) => (
          <Card
            key={index}
            className="relative p-4 rounded-lg flex flex-col shadow-lg overflow-hidden group"
          >
            <div className="md:h-64 h-72">
              {/* <img
                src={work.imageUrl}
                alt={work.title}
                className="w-full rounded-lg h-full object-cover transition-all duration-300 group-hover:scale-105"
              /> */}
            </div>
            <div className="md:px-7 absolute inset-0 bg-white dark:bg-[#171717] bg-opacity-80 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-center  h-full">
              <h3 className="text-xl font-semibold  text-[#030142] ">
                {work.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-400 md:text-sm text-sm">
                {work.description}
              </p>
              <div className="pt-6">
                <Button className="hover:bg-white rounded-full text-sm bg-white text-[#030142] border border-[#030142] dark:bg-transparent">
                  <div className=" flex gap-2 items-center">
                    View Project
                    <ChevronRight className="group" />
                  </div>
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default RecentWorks;
const recentWorks = [
  {
    title: "HMX Luxury Brand Story",
    imageUrl: "/creative.jpeg",
    link: "#",
    description:
      "Crafted a compelling narrative for HMX Luxury, blending sophistication and exclusivity to elevate their luxury brand presence.",
  },
  {
    title: "Fuse Brand Story",
    imageUrl: "/fuse.jpeg",
    link: "#",
    description:
      "Developed a dynamic brand story for Fuse, emphasizing innovation, energy, and a bold market identity.",
  },
  {
    title: "Spicyheat Brand Story",
    imageUrl: "/spicy.jpeg",
    link: "#",
    description:
      "Created a fiery and vibrant brand story for Spicyheat, capturing the essence of bold flavors and unforgettable experiences.",
  },
];
