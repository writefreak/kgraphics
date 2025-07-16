"use client";
import { Link as ScrollLink } from "react-scroll";
import React, { useEffect, useRef, useState } from "react";
import { Button } from "./ui/button";
import Link from "next/link";

const Header = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      if (scrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // ✅ stable and consistent

  const handleClick = () => {
    const phone = "2349030260393";
    const message =
      "Hi K-Graphics, I have a project in mind and I would like to bring it to life with your help.";
    const encoded = encodeURIComponent(message);
    const whatsappLink = `https://wa.me/${phone}?text=${encoded}`;
    window.open(whatsappLink, "_blank");
  };

  return (
    <div className="hidden md:flex fixed top-0 left-0 right-0 z-50 justify-center px-14 pt-7">
      <div
        className={`flex bg-white/80 backdrop-blur-md shadow-md md:w-[800px] p-1 px-2 rounded-full items-center justify-between 
      ${isVisible ? "opacity-100" : "opacity-0 pointer-events-none"}`}
      >
        <Link href="/" className="h-12 w-12  pb-1">
          <img
            src="/kemilogo.png"
            alt=""
            className="object-cover h-full w-full"
          />
        </Link>
        <div className="flex  gap-10">
          {links.map((l, index) => (
            <div key={index} className="group relative ">
              <ScrollLink
                to={l.desc}
                smooth={true}
                offset={0}
                duration={1900}
                className="font-montserrat text-sm text-neutral-800 relative after:absolute after:inset-x-0 after:-bottom-1 after:h-0.5 after:bg-[#030142] after:scale-x-0 after:opacity-0 group-hover:after:opacity-100 group-hover:after:scale-x-100 after:transition-all after:duration-300"
              >
                {l.desc}
              </ScrollLink>
            </div>
          ))}
          <span className="absolute left-1/2 -translate-x-1/2 bottom-1 w-0 group-hover:w-full h-0.5 bg-[#030142] transition-all duration-500"></span>
        </div>
        <div>
          <Button
            onClick={handleClick}
            className="rounded-full bg-transparent text-[#030142] border-2 hover:bg-[#030142] hover:-translate-y-1 hover:text-white transition-all duration-500 border-[#030142]"
          >
            Let's Connect
          </Button>
        </div>
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
