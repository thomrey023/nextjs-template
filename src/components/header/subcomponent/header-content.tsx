"use client";

import { MenuIcon } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Typography } from "@/components/ui/typography";
import { useRouter } from "next/navigation";

const HeaderContent = () => {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const handleRouteChange = (path: string) => {
    router.push(path);
    if (open) setOpen(false);
  };

  return (
    <>
      {/* // * * Small - Large screen header content */}
      <div className="hidden sm:flex flex-row items-center gap-x-[16px]">
        <Button
          variant="outline"
          className="outline-button-class"
          onClick={() => handleRouteChange("contact")}
        >
          <Typography
            className="font-medium leading-6 text-[16px]"
            text="Contact"
          />
        </Button>
        <Button
          variant="outline"
          className="outline-button-class"
          onClick={() => handleRouteChange("faq")}
        >
          <Typography
            className="font-medium leading-6 text-[16px]"
            text="FAQ"
          />
        </Button>
      </div>

      {/* // * * Mobile screen header content */}
      <div className="sm:hidden">
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <button className="w-[40px] h-[40px] bg-pale-gray p-[8px] rounded-full">
              <MenuIcon className="w-[24px] h-[24px] text-charcoal shrink-0" />
            </button>
          </SheetTrigger>
          <SheetContent side="top" className="w-full min-h-[375px]">
            <SheetHeader>
              <SheetTitle className="sr-only">nav menu</SheetTitle>
              <Image
                className="object-cover shrink-0"
                src="/logos/nextjs-logo.svg"
                alt="Header logo"
                decoding="async"
                loading="eager"
                width={246}
                height={25}
                priority
              />
            </SheetHeader>
            <div className="col-flex gap-y-[16px] px-[16px]">
              <Separator className="w-full h-[1px] bg-[#E5E5E5]" />
              <Button
                variant="outline"
                className="outline-button-class w-full"
                onClick={() => handleRouteChange("contact")}
              >
                <Typography
                  className="font-medium leading-6 text-[16px]"
                  text="Contact"
                />
              </Button>

              <Button
                variant="outline"
                className="outline-button-class w-full"
                onClick={() => handleRouteChange("faq")}
              >
                <Typography
                  className="font-medium leading-6 text-[16px]"
                  text="FAQ"
                />
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
};

export default HeaderContent;
