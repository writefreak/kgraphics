"use client";
import React, { useState } from "react";
import { Button } from "./ui/button";

const CallToAction = () => {
  const [isClicked, setIsClicked] = useState(false);

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
    <div className="flex items-center justify-center md:px-14 md:pb-20 py-12 md:p-0 px-4">
      <div className="md:w-[950px] bg-[#030142] h-[195px] w-full rounded-md flex gap-6 items-center justify-center flex-col">
        <h2 className="text-white md:text-3xl text-xl font-raleway text-center">
          Ready to bring Your Vision <br /> To Life With Stunning Visuals?
        </h2>

        <div>
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
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
