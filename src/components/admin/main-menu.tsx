import {
  BellDot,
  BellRing,
  BriefcaseBusiness,
  Dot,
  HandCoins,
  LayoutDashboard,
  LogOut,
  Newspaper,
  User,
} from "lucide-react";
import Link from "next/link";
import React from "react";

const MainMenu = () => {
  return (
    <div className="space-y-5 text-sm">
      <p className="text-sm hidden md:block">Main Menu</p>
      <Link
        href={"/dashboard"}
        className="flex text-white gap-2 items-center bg-white/10 p-1.5 rounded-md"
      >
        <LayoutDashboard width={18} />
        <p className="text-sm">Dashboard</p>
      </Link>
      <Link
        href={"/userReviews"}
        className="flex items-center rounded-md p-1.5 gap-4 hover:bg-white/10 "
      >
        <User className="text-white" width={18} />
        <p>User Reviews</p>
      </Link>
      <Link
        href={"/designs"}
        className="flex items-center rounded-md p-1.5 gap-4 hover:bg-white/10 "
      >
        <Newspaper className="text-white" width={18} />
        <p>Designs</p>
      </Link>

      <Link
        href={"/login"}
        className="flex items-center rounded-md p-1.5 gap-4 hover:bg-white/10 "
      >
        <LogOut className="text-white " width={18} />
        <p>Logout</p>
      </Link>
    </div>
  );
};

export default MainMenu;
