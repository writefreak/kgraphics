"use client";
import React, { useState } from "react";
import { Button } from "./ui/button";

const Body = () => {
  const [isClicked, setIsClicked] = useState(false);
  const handleClick = () => {
    setIsClicked(!isClicked); // Toggle the state
  };
  return (
    <div className="flex md:flex-row flex-col p-4 items-center px-5 gap-6 md:gap-40">
      <div className="flex md:items-start items-center flex-col gap-3 md:gap-6">
        <h2 className="font-raleway text-2xl md:text-6xl leading font-[500] md:font-normal text-center w-96 md:w-[35rem] md:text-left">
          Transforming Ideas into Timeless Visual Expressions
        </h2>
        <p className="md:text-base text-sm md:text-left text-center md:w-[27rem] font-light font-inter">
          K-Graphics translates your vision into soul-rich, timeless visuals
          that truly reflect your values & identity.
        </p>

        <img
          src="/Your paragraph text (1).png"
          alt=""
          className="md:h-[400px] h-[200px]  md:hidden md:w-[400px] w-[200px] object-cover"
        />
        <div className="pt-4">
          <a href={"https://wa.me/09030260393"}>
            <Button
              onClick={handleClick}
              className={
                isClicked
                  ? "bg-[#030142] h-7 w-28 text-xs font-raleway rounded-full "
                  : "hover:bg-[#030142] hover:text-white h-7 w-28 text-xs font-raleway hover:-translate-y-1 transition-all duration-500 border-2   bg-transparent text-[#030142] border-[#030142] rounded-full "
              }
            >
              Let's Connect
            </Button>
          </a>
        </div>
      </div>

      <div className="md:h-[400px] h-[200px] md:block hidden md:w-[400px] w-[200px] ">
        <img
          src="/Your paragraph text (1).png"
          alt=""
          className="object-cover w-full h-full"
        />
      </div>
    </div>
  );
};

export default Body;
