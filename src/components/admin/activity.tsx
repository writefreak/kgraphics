"use client";
import React from "react";

type ActivityItem = {
  id: string;
  activityType: string;
  description: string;
  createdAt: string;
};

const Activity = () => {
  const [recent, setRecent] = React.useState<ActivityItem[]>([]);

  React.useEffect(() => {
    async function fetchRecent() {
      try {
        const res = await fetch("/api/activity");
        const data = await res.json();
        setRecent(data.recent);
      } catch (err) {
        console.error(err);
      }
    }
    fetchRecent();
  }, []);

  return (
    <div className="flex flex-col gap-3  rounded-xl p-4 ">
      <h3 className="text-sm font-medium text-neutral-600">
        Recent Activities
      </h3>

      {recent.length === 0 ? (
        <div className="flex flex-col items-center justify-center">
          <p className="text-sm text-neutral-500">No recent activity</p>
        </div>
      ) : (
        recent.map((r) => (
          <div
            key={r.id}
            className="bg-white p-4 flex flex-col gap-2 rounded-xl border border-gray-300"
          >
            <h3 className="text-sm font-medium">{r.description}</h3>
            <p className="text-xs  text-neutral-600">
              {new Date(r.createdAt).toLocaleString()}
            </p>
          </div>
        ))
      )}
    </div>
  );
};

export default Activity;
