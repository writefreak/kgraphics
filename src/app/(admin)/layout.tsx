"use client";
import React from "react";
import Sidebar from "@/components/admin/sidebar";
import { MobileMenu } from "@/components/mobileMenu";
import MobileAdmin from "@/components/admin/mobile-admin";

const Dashboardlayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen md:flex bg-[#f6f6f6]">
      {/* Sidebar on the left */}
      <div className="w-[10rem] h-screen hidden md:block bg-white shadow-md z-10">
        <Sidebar />
      </div>

      {/* Main content area */}
      <main className="flex-1 overflow-y-auto h-screen flex-col p-4 md:p-6">
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-2 pb-7 md:pt-4 pt-9 md:pb-10">
            <h2 className="text-xl md:text-2xl font-medium">
              Hello, Welcome Kemi 👋
            </h2>
            <p className="text-xs md:text-sm text-neutral-600">
              View and control your site from within
            </p>
          </div>
          <div className="md:hidden">
            <MobileAdmin />
          </div>
        </div>
        {children}
      </main>
    </div>
  );
};

export default Dashboardlayout;
