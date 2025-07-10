"use client";
import Link from "next/link";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { MobileMenu } from "./mobileMenu";

const Mobileheader = () => {
  const [isClicked, setIsClicked] = useState(false);
  const handleClick = () => {
    setIsClicked(!isClicked); // Toggle the state
  };

  return (
    <div className="flex md:hidden fixed z-50 bottom-0 right-0 left-0 top-0 h-14  items-center w-full justify-center pt-10">
      <div className=" w-[400px] bg-white/80 backdrop-blur-md rounded-full px-4 shadow-md">
        <div className="flex items-center justify-between">
          <Link href={"#"} className="pb-1">
            <img
              src="/kemilogo.png"
              alt=""
              className="object-cover h-12 w-12"
            />
          </Link>
          <div className="flex items-center gap-2">
            <div>
              <Button
                onClick={handleClick}
                className={
                  isClicked
                    ? "bg-[#030142] h-7 w-24 text-xs font-raleway rounded-full "
                    : "hover:bg-[#030142] hover:text-white h-7 w-24 text-xs font-raleway hover:-translate-y-1 transition-all duration-500 border-2   bg-transparent text-[#030142] border-[#030142] rounded-full "
                }
              >
                Let's Connect
              </Button>
            </div>
            <MobileMenu />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mobileheader;
