import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#030142] md:h-52 text-white mt-14 flex flex-col justify-between md:items-center md:block">
      <div className="flex md:flex-row flex-col justify-between p-4 md:px-14 md:py-7">
        <div className="md:flex items-center pt-10 md:pb-0 pb-6 md:pt-0">
          <h3 className="md:text-3xl text-2xl font-raleway">
            Let's Create
            <br /> Something Stunning!
          </h3>
        </div>

        <div className="flex md:flex-row flex-col gap-7 md:gap-10 pt-4 pb-5 md:pb-0">
          <div className="space-y-2">
            <h3 className="text-lg font-raleway">Contact Us</h3>
            <p className="md:text-sm text-xs font-inter">
              estheramuleya3@gmail.com
            </p>
            <p className="md:text-sm text-xs font-inter">(+234) 9030260393</p>
          </div>
        </div>
      </div>
      <div className="border-t text-xs p-4  md:pr-0 md:px-14 md:py-3 py-6 font-inter">
        <p> Built by Writefreak Studios © 2025. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
