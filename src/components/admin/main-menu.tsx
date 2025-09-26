"use client";
import { LayoutDashboard, User, Newspaper, LogOut } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

const MainMenu = () => {
  const [active, setActive] = useState("/dashboard"); // default active link

  const menuItems = [
    {
      href: "/dashboard",
      icon: <LayoutDashboard width={18} />,
      label: "Dashboard",
    },
    { href: "/userReviews", icon: <User width={18} />, label: "User Reviews" },
    { href: "/designs", icon: <Newspaper width={18} />, label: "Designs" },
    { href: "/login", icon: <LogOut width={18} />, label: "Logout" },
  ];

  return (
    <div className="space-y-10 text-sm">
      <p className="text-sm hidden md:block">Main Menu</p>
      {menuItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          onClick={() => setActive(item.href)}
          className={`flex items-center gap-2 p-1.5 rounded-md ${
            active === item.href
              ? "bg-white/10 text-white"
              : "hover:bg-white/10 text-white/80"
          }`}
        >
          {item.icon}
          <p className="text-sm font-inter">{item.label}</p>
        </Link>
      ))}
    </div>
  );
};

export default MainMenu;
