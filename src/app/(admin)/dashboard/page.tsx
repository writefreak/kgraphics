import BottomAdmin from "@/components/admin/bottomAdmin";
import Cards from "@/components/admin/cards";
import CallToAction from "@/components/callToAction";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-col gap-6">
      <Cards />
      <BottomAdmin />
    </div>
  );
};

export default page;
