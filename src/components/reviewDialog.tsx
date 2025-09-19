import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

export function ReviewDialog() {
  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <Button className="h-7 md:p-4 text-xs md:text-sm font-raleway hover:bg-[#498cff] hover:-translate-y-1 transition-all duration-500 bg-[#498cff]  text-white rounded-full">
            Leave us a review
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px] bg-white">
          <DialogHeader>
            <DialogTitle className="font-raleway">Write a review</DialogTitle>
            <DialogDescription className="font-inter text-xs">
              Tell others how you feel about our services and how you'd like us
              to improve
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 pt-4">
            <div className="grid gap-3">
              <input
                type="text"
                placeholder="Please input your name..."
                className="placeholder:text-xs border border-gray-600 p-2 rounded-md text-sm"
              />
            </div>
            <div className="grid gap-3">
              <input
                type="text"
                placeholder="Please input your email..."
                className="placeholder:text-xs border border-gray-600 p-2 rounded-md text-sm"
              />
            </div>
            <div className="grid gap-3">
              <input
                type="text"
                placeholder="Please input your brand name..."
                className="placeholder:text-xs border border-gray-600 p-2 rounded-md text-sm"
              />
            </div>
            <div className="grid gap-3">
              <textarea
                name=""
                id=""
                placeholder="Write your review..."
                className="h-20 placeholder:text-xs border border-gray-600 p-2 rounded-md text-sm resize-none"
                draggable="false"
              ></textarea>
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline" className="border border-gray-600">
                Cancel
              </Button>
            </DialogClose>
            <Button type="submit" className="bg-[#030142]">
              Save changes
            </Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}
