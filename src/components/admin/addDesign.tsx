import { Plus } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";

const AddDesign = () => {
  return (
    <div className="bg-gray-200 md:h-48 h-36 rounded-md w-full flex items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-3">
        <Button className="bg-[#030142] p-2 rounded-full  h-10 w-10">
          <Plus color="white" />
        </Button>
        <h3 className="font-raleway text-gray-600 font-medium">
          Add a design here
        </h3>
      </div>
    </div>
  );
};

export default AddDesign;
