import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

interface Props {
  className?: string;
}

export function MobileAbout({ className }: Props) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
      {about.map((a, index) => (
        <Accordion
          data-aos="zoom-in-down"
          key={index}
          type="single"
          collapsible
          className={cn(" py-3 bg-[#030142] rounded-md shadow-md", className)}
        >
          <AccordionItem value="item-1" data-aos="fade-up">
            <AccordionTrigger className="text-lg font-raleway p-2 pl-3 text-white">
              {a.title}
            </AccordionTrigger>
            <AccordionContent className="text-white/80 text-[11.7px] px-3">
              {a.desc}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      ))}
    </div>
  );
}

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
