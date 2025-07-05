import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";

const Header = () => {
  return (
    <div className="hidden md:flex  fixed top-0 left-0 right-0 z-50 justify-center px-14 pt-7">
      <div className="flex bg-white/80 backdrop-blur-md shadow-md w-[800px] p-1 px-2 rounded-full items-center justify-between">
        <Link href={"#"} className="h-12 w-12  pb-1">
          <img
            src="/kemilogo.png"
            alt=""
            className="object-cover h-full w-full"
          />
        </Link>
        <div className="flex  gap-10">
          {links.map((l, index) => (
            <div key={index} className="group relative ">
              <Link
                href="#"
                className="font-montserrat text-sm text-neutral-800 relative after:absolute after:inset-x-0 after:-bottom-1 after:h-0.5 after:bg-[#030142] after:scale-x-0 after:opacity-0 group-hover:after:opacity-100 group-hover:after:scale-x-100 after:transition-all after:duration-300"
              >
                {l.desc}
              </Link>
            </div>
          ))}
          <span className="absolute left-1/2 -translate-x-1/2 bottom-1 w-0 group-hover:w-full h-0.5 bg-[#030142] transition-all duration-500"></span>
        </div>
        <Button className="rounded-full bg-transparent text-[#030142] border-2 hover:bg-[#030142] hover:-translate-y-1 hover:text-white transition-all duration-500 border-[#030142]">
          Let's Connect
        </Button>
      </div>
    </div>
  );
};

export default Header;

const links = [
  {
    desc: "Home",
  },
  {
    desc: "About",
  },
  {
    desc: "Services",
  },
  {
    desc: "Reviews",
  },
  {
    desc: "Portfolio",
  },
];
