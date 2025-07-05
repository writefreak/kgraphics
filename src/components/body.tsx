import React from "react";
import { Button } from "./ui/button";

const Body = () => {
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
          <Button className="hover:bg-[#030142]  hover:-translate-y-1 hover:text-white transition-all duration-500 border-2 font-inter  bg-white text-[#030142] border-[#030142] rounded-full ">
            Let's Connect
          </Button>
        </div>
      </div>

      <img
        src="/Your paragraph text (1).png"
        alt=""
        className="md:h-[400px] h-[200px] md:block hidden md:w-[400px] w-[200px] object-cover"
      />
    </div>
  );
};

export default Body;
