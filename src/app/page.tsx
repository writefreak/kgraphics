import About from "@/components/about";
import { Backdrop } from "@/components/backdrop";
import Body from "@/components/body";
import Header from "@/components/header";
import Mobileheader from "@/components/mobile-header";
import React from "react";

const page = () => {
  return (
    <div className="">
      <Header />
      <Mobileheader />
      <div className="md:pt-40 pt-32 p-4 md:px-14">
        <Backdrop />
      </div>
      <About />
    </div>
  );
};

export default page;
