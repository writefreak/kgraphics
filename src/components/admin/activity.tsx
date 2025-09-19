import React from "react";

const Activity = () => {
  return (
    <div className="flex flex-col gap-3 bg-white rounded-xl p-4 shadow-sm">
      <h3 className="text-sm font-medium text-neutral-600">
        Recent Activities
      </h3>
      {recent.map((r) => (
        <div
          key={r.id}
          className="bg-white p-4 gap-2 rounded-xl border border-gray-100"
        >
          <h3 className="text-sm font-medium">{r.activity}</h3>
          <p className="text-xs md:text-sm text-neutral-600">{r.time}</p>
        </div>
      ))}
    </div>
  );
};

export default Activity;

const recent = [
  {
    id: 1,
    activity: "New visitor signed up",
    time: "2 mins ago",
  },
  {
    id: 2,
    activity: "Downloaded a design pack",
    time: "10 mins ago",
  },
  {
    id: 3,
    activity: "Left a review",
    time: "25 mins ago",
  },
  {
    id: 4,
    activity: "Completed a project design",
    time: "1 hour ago",
  },
  {
    id: 5,
    activity: "Updated profile information",
    time: "2 hours ago",
  },
];
