import Footer from "@/components/footer";
import Header from "@/components/header";
import UserDesigns from "@/components/ui/userDesigns";
import React from "react";

const page = () => {
  return (
    <div>
      <Header />
      <div className="md:px-14 px-4 md:py-32 py-4">
        <UserDesigns />
      </div>
      <Footer />
    </div>
  );
};

export default page;
