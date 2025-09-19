import React from "react";
import { Card } from "../ui/card";
import { Button } from "../ui/button";

const ApproveComment = () => {
  return (
    <div>
      <div className=" md:px-0">
        <div className="flex md:grid md:grid-cols-3 gap-4 no-scrollbar overflow-x-auto scroll-snap-x  scroll-start-offset snap-x snap-mandatory">
          {testimonials.map((t) => (
            <Card
              data-aos="zoom-in"
              key={t.id}
              className="p-5 py-9 md:py-8 bg-white rounded-md shrink-0 w-[85%] snap-start md:w-auto"
            >
              <div className="flex flex-col h-full justify-between">
                <p className="font-inter text-[12.6px] text-black/80">
                  {t.text}
                </p>

                <div className="text-black flex flex-col gap-2 pt-5 md:pt-5">
                  <h3 className="font-raleway text-sm font-[600] ">
                    {t.client}
                  </h3>
                  <span className="font-raleway text-xs">{t.company}</span>
                </div>
              </div>
              <div className="self-end flex  gap-3 md:pt-4">
                <Button className="bg-[#030712] h-8">
                  <p className="text-xs md:text-sm">Approve</p>
                </Button>
                <Button className="bg-red-700 h-8">
                  <p className="text-xs md:text-sm">Delete</p>
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ApproveComment;

const testimonials = [
  {
    id: 1,
    text: `Working with K-Graphics was a game-changer for my brand. The designs were vibrant, classy and perfectly aligned with my brand colors. I’ll definitely be coming back for more!

`,
    client: "Peace Couture",
    company: "Fashion Brand Owner – Ghana",
  },
  {
    id: 2,
    text: `The flyer design for my event exceeded expectations! K-Graphics captured the theme so well and delivered right on time. Highly recommended!
`,
    client: "Chidera M.",
    company: "Event Planner – Abuja",
  },
  {
    id: 3,
    text: `I’ve worked with several designers, but K-Graphics stands out. Attention to detail, 
    creativity and professionalism — all 10/10.
`,
    client: "Adewale Johnson",
    company: "Entrepreneur – Lagos",
  },
  {
    id: 4,
    text: `I love how K-Graphics understood my vision and turned it into a beautiful Instagram design 
    that matches my faith-based message. God bless you!
`,
    client: " Blessing Ibeh",
    company: "Christian Blogger – Port Harcourt",
  },
  {
    id: 5,
    text: `K-Graphics helped us design promotional materials for our student week 
    and the response was massive! 
    Everyone kept asking who our designer was!
`,
    client: "Nifemi S.",
    company: "Student Union PRO – Ondo",
  },
  {
    id: 6,
    text: ` We needed a modern, minimalist look and K-Graphics delivered perfectly. 
    Fast response, clean design, and great communication!
`,
    client: "Ifeanyi Chuks",
    company: "Tech Startup Founder",
  },
];
