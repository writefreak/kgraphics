"use client";
import React from "react";
import { Button } from "./ui/button";
import { Element } from "react-scroll";

const Services = () => {
  return (
    <Element name="Services">
      <div className="flex items-center justify-center flex-col gap-6 md:gap-6 pt-10">
        <div className="md:py-0 pt-9 border-t md:border-t-0 flex flex-col gap-3 items-center ">
          <h2 className="md:text-3xl text-2xl font-raleway text-center font-[500]">
            Our Services
          </h2>
          <p className=" text-sm md:text-base font-light w-[20rem] md:w-[34rem] text-center  font-inter">
            Explore the range of creative solutions we’ve <br /> crafted to
            elevate brands like yours.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-3 md:w-[39rem] md:justify-center pb-7 md:pb-4">
          {services.map((s) => (
            <Button
              data-aos="zoom-in"
              key={s.id}
              className="h-7 md:p-4 text-xs md:text-base font-raleway hover:bg-transparent hover:-translate-y-1 transition-all duration-500 text-[#030142] border-[#030142] border-2 bg-transparent rounded-full"
            >
              {s.slug}
            </Button>
          ))}
        </div>
      </div>
    </Element>
  );
};

export default Services;

const services = [
  {
    id: 1,
    slug: "Brand Identity Design",
  },
  {
    id: 2,
    slug: "Flyer & Poster Design",
  },
  {
    id: 3,
    slug: "Social Media Design",
  },
  {
    id: 4,
    slug: "Business & Product Branding",
  },
  {
    id: 5,
    slug: "Custom Digital Art/Personal Projects",
  },
];
