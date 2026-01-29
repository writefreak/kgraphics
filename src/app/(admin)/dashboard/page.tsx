import Activity from "@/components/admin/activity";
import { ActivityTable } from "@/components/admin/activity-table";
import BottomAdmin from "@/components/admin/bottomAdmin";
import Cards from "@/components/admin/cards";
import { MyChart } from "@/components/admin/my-chart";
import CallToAction from "@/components/callToAction";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-col gap-6">
      <Cards />

      <ActivityTable />

      {/* <BottomAdmin /> */}
    </div>
  );
};

export default page;
