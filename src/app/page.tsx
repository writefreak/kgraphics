import About from "@/components/about";
import AOSInit from "@/components/aosinit";
import { Backdrop } from "@/components/backdrop";
import BrandStory from "@/components/brandStory";
import CallToAction from "@/components/callToAction";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Mobileheader from "@/components/mobile-header";
import RecentWorks from "@/components/recent-works";
import ScrollEffect from "@/components/scrollEffect";
import Services from "@/components/services";
import Testimonials from "@/components/testimonials";
import React from "react";

const page = () => {
  return (
    <div className="">
      <AOSInit />
      <Header />
      <Mobileheader />
      <div className="md:pt-40 pt-32 px-0 p-4 md:px-14">
        <Backdrop />
      </div>
      <Services />
      <About />
      <RecentWorks />
      <Testimonials />
      <BrandStory />
      {/* <CallToAction /> */}
      <Footer />
    </div>
  );
};

export default page;
