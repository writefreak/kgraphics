"use client";

import React, { useEffect, useState } from "react";
import { Card } from "../ui/card";
import { Button } from "../ui/button";

const ApproveComment = () => {
  const [reviews, setReviews] = useState<any[]>([]);
  const [approvingIds, setApprovingIds] = useState<string[]>([]);
  const [deletingIds, setDeletingIds] = useState<string[]>([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const res = await fetch("/api/seeReviews");
        if (res.ok) {
          const data = await res.json();
          setReviews(data);
        } else {
          console.error("Failed to load reviews");
        }
      } catch (err) {
        console.error(err);
      }
    };
    fetchReviews();
  }, []);

  const handleApprove = async (id: string) => {
    setApprovingIds((prev) => [...prev, id]);
    try {
      const res = await fetch("/api/reviewStatus", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
      });
      if (res.ok) {
        setReviews((prev) =>
          prev.map((r) => (r.id === id ? { ...r, status: "approved" } : r)),
        );
      } else {
        console.error("Failed to approve");
      }
    } catch (err) {
      console.error(err);
    } finally {
      setApprovingIds((prev) => prev.filter((lid) => lid !== id));
    }
  };

  const handleDelete = async (id: string) => {
    setDeletingIds((prev) => [...prev, id]);
    try {
      const res = await fetch("/api/reviewStatus", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
      });
      if (res.ok) {
        setReviews((prev) => prev.filter((r) => r.id !== id));
      } else {
        console.error("Failed to delete");
      }
    } catch (err) {
      console.error(err);
    } finally {
      setDeletingIds((prev) => prev.filter((lid) => lid !== id));
    }
  };

  const mobileReviews = showAll ? reviews : reviews.slice(0, 3);

  return (
    <div>
      <div className="md:px-0 md:pt-0 pt-10">
        {reviews.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-70 overflow-y-hidden">
            <p className="text-center text-xl text-neutral-500">
              Sorry, No Reviews yet
            </p>
          </div>
        ) : (
          <>
            {/* DESKTOP */}
            <div className="hidden md:grid grid-cols-3 gap-4">
              {reviews.map((t) => (
                <Card
                  data-aos="zoom-in"
                  key={t.id}
                  className="p-5 py-8 not-dark:bg-white rounded-md"
                >
                  <div className="flex flex-col h-full justify-between">
                    <p className="font-inter text-[12.6px] dark:text-white/80 font-light text-black/80">
                      {t.reviewText}
                    </p>
                    <div className="flex flex-col gap-2 pt-5">
                      <h3 className="font-raleway text-sm font-[600]">
                        {t.name}
                      </h3>
                      <span className="font-raleway text-xs">
                        {t.businessName}
                      </span>
                    </div>
                  </div>
                  <div className="self-end flex gap-3 pt-4">
                    <Button
                      className="not-dark:bg-[#030712] h-8"
                      disabled={
                        approvingIds.includes(t.id) || t.status === "approved"
                      }
                      onClick={() => handleApprove(t.id)}
                    >
                      <p className="text-xs md:text-sm">
                        {t.status === "approved"
                          ? "Approved"
                          : approvingIds.includes(t.id)
                            ? "Approving..."
                            : "Approve"}
                      </p>
                    </Button>
                    <Button
                      className="bg-red-700 h-8"
                      disabled={deletingIds.includes(t.id)}
                      onClick={() => handleDelete(t.id)}
                    >
                      <p className="text-xs md:text-sm">
                        {deletingIds.includes(t.id) ? "Deleting..." : "Delete"}
                      </p>
                    </Button>
                  </div>
                </Card>
              ))}
            </div>

            {/* MOBILE */}
            <div className="flex md:hidden flex-col gap-4 px-4">
              <div className="flex items-center justify-start">
                {reviews.length > 3 && (
                  <button
                    onClick={() => setShowAll(!showAll)}
                    className="text-sm w-24 rounded-full py-1 font-raleway text-[#030142] dark:border dark:border-white/60 dark:text-white/60  text-center"
                  >
                    {showAll ? "See Less" : "See More"}
                  </button>
                )}
              </div>
              {mobileReviews.map((t) => (
                <Card
                  data-aos="zoom-in"
                  key={t.id}
                  className="p-5 py-9 not-dark:bg-white rounded-md w-full"
                >
                  <div className="flex flex-col h-full justify-between">
                    <p className="font-inter text-[12.6px] dark:text-white/80 font-light text-black/80">
                      {t.reviewText}
                    </p>
                    <div className="flex flex-col gap-2 pt-5">
                      <h3 className="font-raleway text-sm font-[600]">
                        {t.name}
                      </h3>
                      <span className="font-raleway text-xs">
                        {t.businessName}
                      </span>
                    </div>
                  </div>
                  <div className="self-end flex gap-3 pt-4">
                    <Button
                      className="not-dark:bg-[#030712] h-8"
                      disabled={
                        approvingIds.includes(t.id) || t.status === "approved"
                      }
                      onClick={() => handleApprove(t.id)}
                    >
                      <p className="text-xs">
                        {t.status === "approved"
                          ? "Approved"
                          : approvingIds.includes(t.id)
                            ? "Approving..."
                            : "Approve"}
                      </p>
                    </Button>
                    <Button
                      className="bg-red-700 h-8"
                      disabled={deletingIds.includes(t.id)}
                      onClick={() => handleDelete(t.id)}
                    >
                      <p className="text-xs">
                        {deletingIds.includes(t.id) ? "Deleting..." : "Delete"}
                      </p>
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ApproveComment;
