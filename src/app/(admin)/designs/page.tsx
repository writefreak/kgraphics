import AddDesign from "@/components/admin/addDesign";
import RecentDesign from "@/components/admin/recentDesign";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-col gap-14">
      <AddDesign />
      <RecentDesign />
    </div>
  );
};

export default page;
