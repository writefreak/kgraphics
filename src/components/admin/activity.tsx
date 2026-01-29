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
  const [showAll, setShowAll] = React.useState(false);

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

  const visibleActivities = showAll ? recent : (recent || []).slice(0, 3);

  return (
    <div className="flex flex-col gap-3 rounded-xl">
      <h3 className="text-sm font-medium text-neutral-600">
        Recent Activities
      </h3>

      {(recent || []).length === 0 ? (
        <div className="flex flex-col items-center justify-center">
          <p className="text-sm text-neutral-500">No recent activity</p>
        </div>
      ) : (
        <>
          {visibleActivities.map((r) => (
            <div key={r.id} className="bg-white p-4 flex flex-col gap-2">
              <h3 className="text-sm font-medium">{r.description}</h3>
              <p className="text-xs text-neutral-600">
                {new Date(r.createdAt).toLocaleString()}
              </p>
            </div>
          ))}

          {recent.length > 3 && (
            <button
              onClick={() => setShowAll(!showAll)}
              className="text-xs text-blue-600 self-start"
            >
              {showAll ? "View less" : "View more"}
            </button>
          )}
        </>
      )}
    </div>
  );
};

export default Activity;
