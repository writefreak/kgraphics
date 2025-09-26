"use client";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";

const page = () => {
  const [loading, setLoading] = useState(false);
  return (
    <div className="flex items-center justify-center md:w-full h-full md:p-0 px-6">
      <div className="flex flex-col gap-5 ">
        <div className="flex flex-col gap-1 pb-3">
          <h2 className="font-bold font-raleway md:text-xl">
            Hello, Welcome Admin 👋
          </h2>
          <p className="text-xs font-inter text-gray-600">
            Sign into your account here
          </p>
        </div>

        {details.map((d) => (
          <div key={d.id} className="flex flex-col gap-2">
            <span className="text-gray-600 font-raleway text-sm">
              {d.title}
            </span>
            <div className="w-96">
              <input
                type="text"
                placeholder={d.placeholder}
                className="outline-none border border-gray-400 py-2 px-2 rounded-md text-sm w-full placeholder:text-xs"
              />
            </div>
          </div>
        ))}
        <Button className="bg-[#030142] font-raleway">Login </Button>
      </div>
    </div>
  );
};

export default page;

const details = [
  {
    id: 1,
    title: "Email",
    placeholder: "Please input your email...",
  },
  {
    id: 2,
    title: "Password",
    placeholder: "Please input your password...",
  },
];
