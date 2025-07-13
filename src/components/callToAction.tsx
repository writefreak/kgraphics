"use client";
import React, { useState } from "react";
import { Button } from "./ui/button";

const CallToAction = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked;
  };

  return (
    <div className="flex items-center justify-center md:px-14 md:pb-20 py-12 md:p-0 px-4">
      <div className="md:w-[950px] bg-[#030142] h-[195px] w-full rounded-md flex gap-6 items-center justify-center flex-col">
        <h2 className="text-white md:text-3xl text-xl font-raleway text-center">
          Ready to bring Your Vision <br /> To Life With Stunning Visuals?
        </h2>

        <a href={"https://wa.me/09030260393"}>
          <Button
            onClick={handleClick}
            className={
              isClicked
                ? "bg-[#498cff] h-7 w-24 text-xs font-raleway rounded-full "
                : "hover:bg-[#498cff] bg-[#498cff] hover:text-white h-7 w-28 text-xs font-raleway hover:-translate-y-1 transition-all duration-500 text-white rounded-full "
            }
          >
            Let's Connect
          </Button>
        </a>
      </div>
    </div>
  );
};

export default CallToAction;
