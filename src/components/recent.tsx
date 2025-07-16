"use client";
import { AnimatePresence, motion } from "framer-motion";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "./ui/dialog";
import { useState } from "react";
import { Button } from "./ui/button";
import { ChevronLast, ChevronLeft, ChevronRight } from "lucide-react";
import Picture from "./ui/picture";

const CARDS_PER_PAGE = 3;

export function Recent() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [page, setPage] = useState(0);
  const [direction, setDirection] = useState(0); // 1 for next, -1 for prev

  const totalPages = Math.ceil(works.length / CARDS_PER_PAGE);
  const startIndex = page * CARDS_PER_PAGE;
  const currentCards = works.slice(startIndex, startIndex + CARDS_PER_PAGE);

  const handleNext = () => {
    if (page < totalPages - 1) {
      setDirection(1);
      setPage((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (page > 0) {
      setDirection(-1);
      setPage((prev) => prev - 1);
    }
  };

  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? "100%" : "-100%",
      opacity: 1,
      position: "absolute",
    }),
    center: {
      x: 0,
      opacity: 1,
      position: "relative",
    },
    exit: (dir: number) => ({
      x: dir > 0 ? "-100%" : "100%",
      opacity: 0,
      position: "absolute",
    }),
  };

  return (
    <div className="mx-auto">
      <Dialog
        open={selectedImage !== null}
        onOpenChange={(open) => {
          if (!open) setSelectedImage(null);
        }}
      >
        {/* CARD WRAPPER */}
        <div className="relative overflow-hidden w-full h-[450px] mb">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              layout
              key={page}
              variants={variants}
              custom={direction}
              exit="exit"
              initial="enter"
              animate="center"
              transition={{ duration: 0.7, ease: "easeInOut" }}
              className="flex justify-center gap-4"
            >
              {currentCards.map((w, index) => (
                <DialogTrigger asChild key={startIndex + index}>
                  <div
                    data-aos="fade-up"
                    className="w-[300px] h-[400px] hover:card-hover-effect cursor-pointer flex-shrink-0"
                    onClick={() => setSelectedImage(w.img)}
                  >
                    <Picture
                      src={w.img}
                      alt=""
                      className="w-full h-full object-cover rounded-md"
                    />
                  </div>
                </DialogTrigger>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* BUTTONS UNDER */}
        <div className="flex justify-center gap-4">
          <Button
            onClick={handlePrev}
            disabled={page === 0}
            className="rounded-full h-10 w-10 bg-transparent text-[#030142] border-2 hover:bg-[#030142] hover:-translate-y-1 hover:text-white transition-all duration-500 border-[#030142]"
          >
            <ChevronLeft />
          </Button>
          <Button
            onClick={handleNext}
            disabled={page >= totalPages - 1}
            className="rounded-full h-10 w-10 bg-transparent text-[#030142] border-2 hover:bg-[#030142] hover:-translate-y-1 hover:text-white transition-all duration-500 border-[#030142]"
          >
            <ChevronRight />
          </Button>
        </div>

        {/* IMAGE MODAL */}
        {selectedImage && (
          <DialogTitle>
            <DialogContent className="bg-none flex flex-col items-center border-none shadow-none">
              <div className="md:h-[510px] md:w-[440px]">
                <img
                  src={selectedImage}
                  alt=""
                  className="h-full w-full object-cover"
                />
              </div>
            </DialogContent>
          </DialogTitle>
        )}
      </Dialog>
    </div>
  );
}

const works = [
  { img: "/WhatsApp Image 2025-07-05 at 18.51.29_fc6cd04b.jpg" },
  { img: "/WhatsApp Image 2025-07-05 at 18.51.28_35492685.jpg" },
  { img: "/WhatsApp Image 2025-07-05 at 18.51.41_152958d8.jpg" },
  { img: "/WhatsApp Image 2025-07-05 at 18.51.29_b27e6e1c.jpg" },
  { img: "/first-oracle.jpg" },
  { img: "/WhatsApp Image 2025-07-05 at 18.51.31_46b7483a.jpg" },
  { img: "/WhatsApp Image 2025-07-05 at 18.51.35_0866ef69.jpg" },
  { img: "/Eatrite.jpg" },
  { img: "/Catering.jpg" },
  { img: "/WhatsApp Image 2025-07-05 at 18.51.28_81db55ed.jpg" },
  { img: "/WhatsApp Image 2025-07-05 at 18.51.36_70bb0f12.jpg" },
  { img: "/WhatsApp Image 2025-07-05 at 18.51.31_9764a71a.jpg" },
];
