import React from "react";

const Cards = () => {
  return (
    <div className="flex flex-col gap-5">
      {/* <div>
        <p className="text-neutral-600 text-xs md:text-sm">Website Analytics</p>
      </div> */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3">
        {details.map((d) => (
          <div key={d.id} className="bg-white rounded-xl p-4  shadow-sm">
            <div className="flex flex-col gap-3">
              <p className="text-sm">{d.title}</p>
              <div className="flex flex-col gap-2">
                <h2 className="text-2xl font-medium">{d.figure}</h2>
                <p className="text-neutral-600 text-sm">{d.action}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;

const details = [
  {
    id: 1,
    title: "Total visits",
    figure: "300",
    action: "Users Visited",
  },
  {
    id: 2,
    title: "Total story downloads",
    figure: "300",
    action: "Users downloaded",
  },
  {
    id: 3,
    title: "Total Reviews",
    figure: "300",
    action: "Users Reviewed",
  },
  {
    id: 4,
    title: "Total designs",
    figure: "300",
    action: "Designs completed",
  },
];
