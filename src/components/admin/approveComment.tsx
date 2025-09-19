"use client";

import React, { useEffect, useState } from "react";
import { Card } from "../ui/card";
import { Button } from "../ui/button";

const ApproveComment = () => {
  const [reviews, setReviews] = useState<any[]>([]);
  const [approvingIds, setApprovingIds] = useState<string[]>([]);
  const [deletingIds, setDeletingIds] = useState<string[]>([]);

  // fetch reviews from your API on mount
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

  // approve a review
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
          prev.map((r) => (r.id === id ? { ...r, status: "approved" } : r))
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

  // delete a review
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

  return (
    <div>
      <div className="md:px-0">
        <div className="flex md:grid md:grid-cols-3 gap-4 no-scrollbar overflow-x-auto scroll-snap-x scroll-start-offset snap-x snap-mandatory">
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

                <div className="text-black flex flex-col gap-2 pt-5 md:pt-5">
                  <h3 className="font-raleway text-sm font-[600]">{t.name}</h3>
                  <span className="font-raleway text-xs">{t.businessName}</span>
                </div>
              </div>
              <div className="self-end flex gap-3 md:pt-4">
                <Button
                  className="bg-[#030712] h-8"
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
      </div>
    </div>
  );
};

export default ApproveComment;
