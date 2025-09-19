"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export function ReviewDialog() {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [reviewText, setReviewText] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSave = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/reviews", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, businessName, reviewText }),
      });

      if (res.ok) {
        // reset fields
        setName("");
        setEmail("");
        setBusinessName("");
        setReviewText("");
        // close dialog
        setOpen(false);
      } else {
        console.error("Failed to submit review");
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      {/* trigger button */}
      <DialogTrigger asChild>
        <Button className="h-7 md:p-4 text-xs md:text-sm font-raleway hover:bg-[#498cff] hover:-translate-y-1 transition-all duration-500 bg-[#498cff]  text-white rounded-full">
          Leave us a review
        </Button>
      </DialogTrigger>

      {/* modal content */}
      <DialogContent className="sm:max-w-[425px] bg-white">
        <DialogHeader>
          <DialogTitle className="font-raleway">Write a review</DialogTitle>
          <DialogDescription className="font-inter text-xs">
            Tell others how you feel about our services and how you'd like us to
            improve
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 pt-4">
          <div className="grid gap-3">
            <input
              type="text"
              placeholder="Please input your name..."
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="placeholder:text-xs border border-gray-600 p-2 rounded-md text-sm"
            />
          </div>
          <div className="grid gap-3">
            <input
              type="text"
              placeholder="Please input your email..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="placeholder:text-xs border border-gray-600 p-2 rounded-md text-sm"
            />
          </div>
          <div className="grid gap-3">
            <input
              type="text"
              placeholder="Please input your brand name..."
              value={businessName}
              onChange={(e) => setBusinessName(e.target.value)}
              className="placeholder:text-xs border border-gray-600 p-2 rounded-md text-sm"
            />
          </div>
          <div className="grid gap-3">
            <textarea
              placeholder="Write your review..."
              value={reviewText}
              onChange={(e) => setReviewText(e.target.value)}
              className="h-20 placeholder:text-xs border border-gray-600 p-2 rounded-md text-sm resize-none"
              draggable="false"
            ></textarea>
          </div>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline" className="border border-gray-600">
              Cancel
            </Button>
          </DialogClose>
          <Button
            onClick={handleSave}
            className="bg-[#030142]"
            disabled={loading}
          >
            {loading ? "Saving..." : "Save changes"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
