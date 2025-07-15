"use client";
import React from "react";
import { Recent } from "./recent";
import { MobileRecent } from "./mobile-recent";
import { Element } from "react-scroll";

const RecentWorks = () => {
  return (
    <Element name="Portfolio">
      <div
        data-aos="fade-up"
        className="md:pt-7 md:py-3 pt-10 pb-3 border-t md:border-t-0 flex flex-col items-center "
      >
        <h2 className="md:text-3xl text-2xl font-raleway text-center font-[500]">
          Our Recent Works
        </h2>
        <p className="text-sm font-light">
          Here's an overview of our most recent projects
        </p>
      </div>
      <div className="pt-5 mx-auto pb-14 hidden md:block">
        <Recent />
      </div>
      <div className="md:hidden overflow-x-hidden pb-7">
        <MobileRecent />
      </div>
    </Element>
  );
};

export default RecentWorks;
