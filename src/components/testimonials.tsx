import React from "react";
import { Card } from "./ui/card";

const Testimonials = () => {
  return (
    <div className="md:pb-12 pb-6">
      <div className="md:pt-7 md:pb-8 pt-10 pb-5 flex flex-col items-center ">
        <h2 className="md:text-3xl text-2xl font-raleway text-center font-[500]">
          Client Reviews
        </h2>
        <p className="font-light font-inter text-sm">
          Here’s what our valued clients say about us
        </p>
      </div>
      <div className="px-4 md:px-0">
        <div className="flex md:grid md:grid-cols-3 md:px-40 gap-4 no-scrollbar overflow-x-auto scroll-snap-x  scroll-start-offset snap-x snap-mandatory">
          {testimonials.map((t) => (
            <Card
              key={t.id}
              className="p-5 py-9 md:py-8 bg-white rounded-md shrink-0 w-[85%] snap-start md:w-auto"
            >
              <div className="flex flex-col gap-5">
                <p className="font-inter text-[12.6px] font-stretch-50% text-black/80">
                  {t.text}
                </p>
                {/* <div className="text-black flex flex-col gap-2 pt-3">
                  <h3 className="font-raleway font-[600] md:font-normal font-xs">
                    {t.client}
                  </h3>
                  <span className="font-raleway text-sm">{t.company}</span>
                </div> */}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;

const testimonials = [
  {
    id: 1,
    text: `Wow...this is absolutely stunning ma'am. I love how clean and professional the design looks.
It captures exactly what I had in mind.

Thank you so much🙏
`,
  },
  {
    id: 2,
    text: `Wow...this is absolutely stunning ma'am. I love how clean and professional the design looks.
It captures exactly what I had in mind.

Thank you so much🙏
`,
  },
  {
    id: 3,
    text: `Wow...this is absolutely stunning ma'am. I love how clean and professional the design looks.
It captures exactly what I had in mind.

Thank you so much🙏
`,
  },
  {
    id: 4,
    text: `Wow...this is absolutely stunning ma'am. I love how clean and professional the design looks.
It captures exactly what I had in mind.

Thank you so much🙏
`,
  },
  {
    id: 5,
    text: `Wow...this is absolutely stunning ma'am. I love how clean and professional the design looks.
It captures exactly what I had in mind.

Thank you so much🙏
`,
  },
  {
    id: 6,
    text: `Wow...this is absolutely stunning ma'am. I love how clean and professional the design looks.
It captures exactly what I had in mind.

Thank you so much🙏
`,
  },
];
