import React from "react";
import { Recent } from "./recent";
import { MobileRecent } from "./mobile-recent";

const RecentWorks = () => {
  return (
    <div>
      <div className="md:pt-7 md:py-3 py-14 border-t md:border-t-0 flex flex-col items-center ">
        <h2 className="md:text-3xl text-2xl font-raleway text-center font-[500]">
          Our Recent Works
        </h2>
        <p>Here's an overview of our most recent projects</p>
      </div>
      <div className="pt-5 hidden md:block">
        <Recent />
      </div>
      <div className="md:hidden overflow-x-hidden pb-7">
        <MobileRecent />
      </div>
    </div>
  );
};

export default RecentWorks;
