import React from "react";
import { Card } from "./ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { MobileAbout } from "./mobile-about";

const About = () => {
  return (
    <div className="md:px-40 p-4 flex flex-col md:gap-8 md:pt-16">
      <div className="md:py-0 py-5 border-t md:border-t-0 flex flex-col gap-3 items-center ">
        <h2 className="md:text-3xl text-2xl font-raleway text-center font-[500]">
          Why Choose Us?
        </h2>
        <p className=" text-sm md:text-base font-light w-[20rem] md:w-[34rem] text-center  font-inter">
          We give life to your ideas through excellent designs that speak with
          clarity and purpose. Our projects blend soul aesthetics in such a
          harmonic manner that reflects the uniqueness of our clients.
        </p>
      </div>
      <div className="md:grid hidden md:grid-cols-2 gap-3">
        {about.map((a, index) => (
          <Card key={index} className="p-4 md:p-7 bg-[#030142] rounded-md">
            <div className="flex flex-col gap-2 items-center md:items-start">
              <h3 className="text-xl font-raleway font-[500] md:text-left text-white">
                {a.title}
              </h3>
              <p className="text-[13.5px] font-inter font-light text-center md:text-left text-white/80">
                {a.desc}
              </p>
            </div>
          </Card>
        ))}
      </div>
      <div className="">
        <MobileAbout className="md:hidden" />
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
    svg: "",
  },

  {
    title: "Faith",
    desc: `Rooted in Christian values, our creativity reflects light, hope, 
    and reverence, especially in spiritually-driven projects.

    `,
    svg: "",
  },
  {
    title: "Authenticity",
    desc: `No templates, no shortcuts—each design is custom-crafted 
    to reflect your unique message and audience.`,
    svg: "",
  },
  {
    title: "Relevance",
    desc: `We blend youthful insight with design trends to create modern, 
    platform-aware graphics that truly resonate.`,
    svg: "",
  },
  {
    title: "Communication",
    desc: `From brief to delivery, we collaborate closely, ensuring every client 
    feels heard, respected, and satisfied.`,
    svg: "",
  },
  {
    title: "Emotion",
    desc: `Our work connects beyond visuals—each piece tells a story, evokes feeling, and 
    empowers clients with pride and clarity.`,
    svg: "",
  },
];
