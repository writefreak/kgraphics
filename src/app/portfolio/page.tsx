import Footer from "@/components/footer";
import UserDesigns from "@/components/ui/userDesigns";
import React from "react";

const page = () => {
  return (
    <div>
      <div className="md:px-14 px-4 md:py-20 py-5">
        <UserDesigns />
      </div>
      <Footer />
    </div>
  );
};

export default page;
