"use client";
import React, { useEffect, useState } from "react";

type VisitorDataItem = {
  date: string;
  count: number;
};

const Cards = () => {
  const [totalVisits, setTotalVisits] = useState("--");
  const [totalReviews, setTotalReviews] = useState("--");
  const [totalDownloads, setTotalDownloads] = useState("--");
  const [totalDesigns, setTotalDesigns] = useState("--"); // <-- added

  useEffect(() => {
    const fetchTotalVisits = async () => {
      try {
        const res = await fetch(`/api/countVisits?t=${new Date().getTime()}`);
        if (res.ok) {
          const data = await res.json();
          setTotalVisits(data.total || 0);
        } else {
          console.error("Failed to fetch total visits");
        }
      } catch (err) {
        console.error(err);
      }
    };

    const fetchTotalReviews = async () => {
      try {
        const res = await fetch(`/api/totalReviews?t=${new Date().getTime()}`);
        if (res.ok) {
          const data = await res.json();
          setTotalReviews(data.total || "--");
        } else {
          console.error("Failed to fetch total reviews");
        }
      } catch (err) {
        console.error(err);
      }
    };

    const fetchTotalDownloads = async () => {
      try {
        const res = await fetch(`/api/logDownload?t=${new Date().getTime()}`);
        if (res.ok) {
          const data = await res.json();
          setTotalDownloads(data.total || "--");
        } else {
          console.error("Failed to fetch total downloads");
        }
      } catch (err) {
        console.error(err);
      }
    };

    const fetchTotalDesigns = async () => {
      try {
        const res = await fetch(`/api/countdesign?t=${new Date().getTime()}`);
        if (res.ok) {
          const data = await res.json();
          setTotalDesigns(data.totalDesigns || "--"); // <-- get design count
        } else {
          console.error("Failed to fetch total designs");
        }
      } catch (err) {
        console.error(err);
      }
    };

    fetchTotalVisits();
    fetchTotalReviews();
    fetchTotalDownloads();
    fetchTotalDesigns(); // <-- call it
  }, []);

  const details = [
    { id: 1, title: "Total visits", action: "Users Visited" },
    { id: 2, title: "Total story downloads", action: "Users downloaded" },
    { id: 3, title: "Total Reviews", action: "Users Reviewed" },
    { id: 4, title: "Total designs", action: "Designs completed" },
  ];

  return (
    <div className="flex flex-col gap-5">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3">
        {details.map((d) => (
          <div key={d.id} className="bg-[#030142] rounded-xl p-4 shadow-sm">
            <div className="flex flex-col gap-3">
              <p className="text-sm text-white/80">{d.title}</p>
              <div className="flex flex-col gap-2 text-white">
                <h2 className="text-2xl font-medium ">
                  {d.id === 1
                    ? totalVisits
                    : d.id === 2
                    ? totalDownloads
                    : d.id === 3
                    ? totalReviews
                    : totalDesigns}{" "}
                  {/* <-- show total designs */}
                </h2>
                <p className=" text-sm text-white/80">{d.action}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
