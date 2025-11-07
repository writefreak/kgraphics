"use client";
import React, { useEffect, useState } from "react";
import { Card } from "./ui/card";
import { Element } from "react-scroll";

interface Review {
  id: string;
  name: string;
  businessName: string;
  reviewText: string;
}

const Testimonials = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true); // <-- loading state

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const res = await fetch("/api/publicReviews");
        if (res.ok) {
          const data = await res.json();
          setReviews(data);
        } else {
          if (process.env.NODE_ENV === "development") {
            console.error("Failed to fetch approved reviews");
          }
        }
      } catch (err) {
        if (process.env.NODE_ENV === "development") {
          console.error("Error fetching reviews:", err);
        }
      } finally {
        setLoading(false); // <-- stop loading
      }
    };
    fetchReviews();
  }, []);

  return (
    <Element name="Reviews">
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
          {loading ? (
            <div className="flex justify-center py-10">
              <div className="animate-spin rounded-full h-10 w-10  border-2 border-[#030421]"></div>
            </div>
          ) : reviews.length === 0 ? (
            <p className="text-center text-gray-500 py-10">
              Loading Reviews...
            </p>
          ) : (
            <div className="flex md:grid md:grid-cols-3 md:px-40 gap-4 no-scrollbar overflow-x-auto scroll-snap-x scroll-start-offset snap-x snap-mandatory">
              {reviews.map((t) => (
                <Card
                  data-aos="zoom-in"
                  key={t.id}
                  className="p-5 py-9 md:py-8 bg-white rounded-md shrink-0 w-[85%] snap-start md:w-auto"
                >
                  <div className="flex flex-col h-full justify-between">
                    <p className="font-inter text-[12.6px] text-black/80">
                      {t.reviewText}
                    </p>

                    <div className="text-black flex flex-col gap-2 pt-5 md:pt-7">
                      <h3 className="font-raleway font-[600] text-base">
                        {t.name}
                      </h3>
                      <span className="font-raleway text-xs">
                        {t.businessName}
                      </span>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>
    </Element>
  );
};

export default Testimonials;
