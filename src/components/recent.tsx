"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "./ui/dialog";
import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { ChevronLeft, ChevronRight, Loader } from "lucide-react";
import Picture from "./ui/picture";

const CARDS_PER_PAGE = 3;

export function Recent() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [page, setPage] = useState(0);
  const [direction, setDirection] = useState(0);
  const [works, setWorks] = useState<{ id: string; img: string }[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch featured designs
  useEffect(() => {
    const fetchFeatured = async () => {
      try {
        const res = await fetch("/api/seeFeatured", { cache: "no-store" });
        if (!res.ok) throw new Error("Failed to fetch featured designs");

        const data = await res.json();
        if (data.success && Array.isArray(data.designs)) {
          setWorks(
            data.designs.map((design: any) => ({
              id: design.id,
              img: design.imageUrl,
            }))
          );
        }
      } catch (error) {
        console.error("Error loading featured designs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchFeatured();
  }, []);

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
      opacity: 0,
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

  if (loading)
    return (
      <p className="text-center py-10">
        <Loader />
      </p>
    );
  if (works.length === 0)
    return (
      <p className="text-center py-10 text-gray-400 font-raleway text-xs">
        No featured designs yet.
      </p>
    );

  return (
    <div className="mx-auto w-full max-w-[950px]">
      <Dialog
        open={selectedImage !== null}
        onOpenChange={(open) => {
          if (!open) setSelectedImage(null);
        }}
      >
        <DialogTitle></DialogTitle>
        {/* CARD WRAPPER */}
        <div className="relative overflow-hidden w-full h-[450px] mb-4">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={page}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="flex gap-4 justify-start w-full absolute top-0 left-0"
            >
              {currentCards.map((w) => (
                <DialogTrigger asChild key={w.id}>
                  <div
                    className="w-[300px] h-[400px] flex-shrink-0 cursor-pointer hover:card-hover-effect"
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

        {/* NAV BUTTONS */}
        <div className="flex justify-center gap-4 mb-6">
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
          <DialogContent className="bg-none flex flex-col items-center border-none shadow-none">
            <div className="md:h-[510px] md:w-[440px]">
              <img
                src={selectedImage}
                alt=""
                className="h-full w-full object-cover rounded-md"
              />
            </div>
          </DialogContent>
        )}
      </Dialog>
    </div>
  );
}
