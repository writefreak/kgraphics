"use client";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "./ui/dialog";
import { useState } from "react";

export function Recent() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  return (
    <div>
      <Dialog
        open={selectedImage !== null}
        onOpenChange={(open) => {
          if (!open) setSelectedImage(null);
        }}
      >
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:px-14 md:mx-auto">
          {works.map((w, index) => (
            <DialogTrigger asChild key={index}>
              <div
                className="md:p-0 px-4 mx-auto w-full md:h-[60vmin]  hover:card-hover-effect"
                onClick={() => setSelectedImage(w.img)}
              >
                <img
                  src={w.img}
                  alt=""
                  className="h-full w-full object-cover rounded-md"
                />
              </div>
            </DialogTrigger>
          ))}
        </div>

        {selectedImage && ( // Only render the dialog content if an image is selected
          <DialogTitle>
            <DialogContent className="bg-none flex flex-col items-center border-none shadow-none">
              <div className="md:h-[500px] md:w-[400px]">
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
  {
    img: "/WhatsApp Image 2025-07-05 at 18.51.28_35492685.jpg",
  },
  {
    img: "/WhatsApp Image 2025-07-05 at 18.51.29_fc6cd04b.jpg",
  },
  {
    img: "/WhatsApp Image 2025-07-05 at 18.51.41_152958d8.jpg",
  },
  {
    img: "/WhatsApp Image 2025-07-05 at 18.51.29_b27e6e1c.jpg",
  },
];
