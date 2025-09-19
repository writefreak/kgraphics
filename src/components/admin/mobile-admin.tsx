import React from "react";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "../ui/sheet";
import { Home, Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  BellRing,
  LayoutDashboard,
  LogOut,
  Newspaper,
  User,
} from "lucide-react";
import Link from "next/link";
interface Props {
  className?: string;
}

const MobileAdmin = ({ className }: Props) => {
  return (
    <div className={cn("", className)}>
      <Sheet>
        <SheetTrigger className="" asChild>
          <Menu />
        </SheetTrigger>
        <SheetContent className="bg-white p-2">
          <SheetTitle>
            {/* <MainMenu /> */}
            <div className="space-y-5 text-sm pt-10">
              <p className="text-sm hidden md:block">Main Menu</p>
              <Link
                href={"/"}
                className="flex  hover:bg-[#030712]/20 gap-4 items-center bg-white/10 p-1.5 rounded-md"
              >
                <Home width={18} className="text-[#030712]" />
                <p className="text-sm">Home</p>
              </Link>
              <Link
                href={"/dashboard"}
                className="flex  hover:bg-[#030712]/20 gap-4 items-center bg-white/10 p-1.5 rounded-md"
              >
                <LayoutDashboard width={18} className="text-[#030712]" />
                <p className="text-sm">Dashboard</p>
              </Link>
              <Link
                href={"/userReviews"}
                className="flex hover:bg-[#030712]/20 items-center rounded-md p-1.5 gap-4 "
              >
                <User className="text-[#030712]" width={18} />
                <p>User Reviews</p>
              </Link>
              <Link
                href={"/designs"}
                className="flex items-center rounded-md p-1.5 gap-4 hover:bg-[#030712]/20 "
              >
                <Newspaper className="text-[#030712]" width={18} />
                <p>Designs</p>
              </Link>

              <Link
                href={"/login"}
                className="flex items-center rounded-md p-1.5 gap-4 hover:bg-[#030712]/20"
              >
                <LogOut className="text-[#030712] " width={18} />
                <p>Logout</p>
              </Link>
            </div>
          </SheetTitle>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileAdmin;
