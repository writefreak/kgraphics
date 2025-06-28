import React from "react";
import { Card } from "./ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

const About = () => {
  return (
    <div className="md:px-14 p-4 grid grid-cols-1 md:grid-cols-2 gap-5 md:py-16">
      <div className="md:py-0 py-5 border-t md:border-t-0 flex flex-col md:gap-5 gap-3 items-center  md:items-start">
        <h2 className="md:text-4xl text-2xl font-raleway text-center">
          Why Choose Us?
        </h2>
        <p className=" text-sm md:text-base font-light w-[20rem] md:w-[34rem]  font-inter">
          We give life to your ideas through excellent designs that speak with
          clarity and purpose. Our projects blend soul aesthetics in such a
          harmonic manner that reflects the uniqueness of our clients.
        </p>
      </div>
      <div className="flex flex-col gap-3">
        {about.map((a, index) => (
          <Accordion
            key={index}
            type="single"
            collapsible
            className="shadow-md rounded-md px-4"
            defaultValue="item-1"
          >
            <AccordionItem value="item-1" className="">
              <AccordionTrigger>{a.title}</AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance">
                <p>{a.desc}</p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        ))}
      </div>
    </div>
  );
};

export default About;

const about = [
  {
    title: "Purpose",
    desc: `Every design starts with meaning, not just appearance—because we 
    create to communicate, not just decorate.`,
  },
  {
    title: "Purpose",
    desc: `Every design starts with meaning, not just appearance—because we 
    create to communicate, not just decorate.`,
  },
  {
    title: "Purpose",
    desc: `Every design starts with meaning, not just appearance—because we 
    create to communicate, not just decorate.`,
  },
  {
    title: "Purpose",
    desc: `Every design starts with meaning, not just appearance—because we 
    create to communicate, not just decorate.`,
  },
  {
    title: "Purpose",
    desc: `Every design starts with meaning, not just appearance—because we 
    create to communicate, not just decorate.`,
  },
  {
    title: "Purpose",
    desc: `Every design starts with meaning, not just appearance—because we 
    create to communicate, not just decorate.`,
  },
];
