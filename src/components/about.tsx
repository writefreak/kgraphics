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
    <div className="md:px-14 p-4 flex flex-col  gap-8 md:py-16">
      <div className="md:py-0 py-5 border-t md:border-t-0 flex flex-col gap-3 items-center ">
        <h2 className="md:text-2xl font-raleway text-center ">
          Why Choose Us?
        </h2>
        <p className=" text-sm md:text-base font-light w-[20rem] md:w-[34rem] text-center font-inter">
          We give life to your ideas through excellent designs that speak with
          clarity and purpose. Our projects blend soul aesthetics in such a
          harmonic manner that reflects the uniqueness of our clients.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {about.map((a, index) => (
          <Card key={index} className="p-4">
            <div className="flex flex-col gap-3 items-center">
              <h3 className="text-xl font-raleway font-semibold">{a.title}</h3>
              <p className="text-[13.5px] font-inter font-light text-center">
                {a.desc}
              </p>
            </div>
          </Card>
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
