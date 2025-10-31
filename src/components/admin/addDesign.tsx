import { Plus } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import UploadImg from "../ui/uploadImg";

const AddDesign = () => {
  return (
    <div className="md:pt-0 pt-4">
      <Dialog>
        <DialogTrigger asChild>
          <Button className="h-14 w-full hover:bg-gray-300 bg-gray-200 rounded-xl flex justify-center items-center gap-3">
            <Plus strokeWidth={1} className="h-6 w-6 text-black" />
            <span className="font-raleway text-black ">
              Upload a new design
            </span>
          </Button>
        </DialogTrigger>
        <DialogContent className=" bg-white">
          <DialogHeader>
            <DialogTitle className="font-raleway">
              Upload a new design
            </DialogTitle>
            <DialogDescription></DialogDescription>
          </DialogHeader>
          <div className="">
            <UploadImg />
            <div className="w-full md:px-2 py-8 flex flex-col gap-2">
              <span className="font-raleway text-sm ">
                Enter your design name
              </span>
              <input
                className="w-full rounded-sm p-1 border border-gray-300 outline-0 placeholder:font-raleway placeholder:text-sm text-sm"
                type="text"
                placeholder="Please enter a name for your design"
              />
            </div>
          </div>
          <DialogFooter className="flex flex-row gap-3 w-full">
            <DialogClose asChild>
              <Button variant="outline" className="flex-1">
                Cancel
              </Button>
            </DialogClose>
            <Button type="submit" className="flex-1">
              Save changes
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AddDesign;
