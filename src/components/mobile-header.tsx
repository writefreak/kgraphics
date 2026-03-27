"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { MobileMenu } from "./mobileMenu";
import { ThemeSwitch } from "./ui/theme-switch";

const Mobileheader = () => {
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
  const [isClicked, setIsClicked] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const handleClick = () => {
    const phone = "2349030260393";
    const message =
      "Hi K-Graphics, I have a project in mind and I would like to bring it to life with your help.";
    const encoded = encodeURIComponent(message);
    const whatsappLink = `https://wa.me/${phone}?text=${encoded}`;
    window.open(whatsappLink, "_blank");
    setIsClicked;
  };

  return (
    <div className="flex md:hidden gap-3 fixed z-50 bottom-0 right-0 left-0 top-0 h-14  items-center w-full justify-center pt-10">
      <div
        className={`w-[340px] bg-white/80 dark:border dark:border-white/10 not-dark:bg-white/80 dark:bg-white/5 dark:shadow-[0_8px_32px_rgba(0,0,0,0.4)] dark:backdrop-blur-xl backdrop-blur-md rounded-full px-4 shadow-md ${
          isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex items-center justify-between">
          <Link href={"/"} className="pb-1">
            <img
              src="/kemilogo.png"
              alt=""
              className="object-cover h-12 w-12 dark:hidden"
            />
            <img
              src="/kgraphicslite.png"
              alt=""
              className="object-cover h-12 w-12 hidden dark:block"
            />
          </Link>
          <div className="flex items-center gap-2">
            {/* <div>
              <Button
                onClick={handleClick}
                className={
                  isClicked
                    ? "bg-[#030142] dark:bg-[#498cff] h-7 w-28 text-xs font-raleway rounded-full "
                    : "hover:bg-[#030142] dark:text-white dark:bg-[#498cff] dark:hover:bg-[#498cff] not-dark:hover:text-white h-7 w-28 md:px-9 text-xs font-raleway hover:-translate-y-1 transition-all duration-500 border-2   not-dark:bg-transparent text-[#030142] border-[#030142] rounded-full "
                }
              >
                Let's Connect
              </Button>
            </div> */}

            <MobileMenu />
          </div>
        </div>
      </div>
      <div
        className={`transition-opacity duration-300 ${isVisible ? "opacity-100" : "opacity-0 pointer-events-none"}`}
      >
        <ThemeSwitch />
      </div>
    </div>
  );
};

export default Mobileheader;
