import React from "react";
import { cn } from "@/lib/utils";
import MainMenu from "./main-menu";

interface Props {
  className?: string;
}

const Sidebar = ({ className }: Props) => {
  return (
    <div
      className={cn(
        "fixed z-50 h-screen p-5 space-y-4 text-white bg-[#030712] shadow-2xl ",
        className
      )}
    >
      <div className="flex flex-col gap-5">
        <p className="text-lg pt-6">Welcome Back!</p>
        {/* <Find /> */}
      </div>
      <div className="text-white pt-10 ">
        <MainMenu />
      </div>
    </div>
  );
};

export default Sidebar;
