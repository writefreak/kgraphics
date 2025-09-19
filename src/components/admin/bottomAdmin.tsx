import React from "react";
import { MyChart } from "./my-chart";
import Activity from "./activity";

const BottomAdmin = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
      <MyChart />
      <Activity />
    </div>
  );
};

export default BottomAdmin;
