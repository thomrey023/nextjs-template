'use client';

import { useState } from 'react';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

import { MenuIcon } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Typography } from '@/components/ui/typography';

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
      <div className="hidden flex-row items-center gap-x-4 sm:flex">
        <Button
          variant="outline"
          className="outline-button-class cursor-pointer"
          onClick={() => handleRouteChange('contact')}
        >
          <Typography
            className="text-[16px] leading-6 font-medium"
            text="Contact"
          />
        </Button>
        <Button
          variant="outline"
          className="outline-button-class cursor-pointer"
          onClick={() => handleRouteChange('faq')}
        >
          <Typography
            className="text-[16px] leading-6 font-medium"
            text="FAQ"
          />
        </Button>
      </div>

      {/* // * * Mobile screen header content */}
      <div className="sm:hidden">
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <button className="bg-pale-gray h-10 w-10 rounded-full p-2">
              <MenuIcon className="text-charcoal h-6 w-6 shrink-0" />
            </button>
          </SheetTrigger>
          <SheetContent side="top" className="min-h-93.75 w-full">
            <SheetHeader>
              <SheetTitle className="sr-only">nav menu</SheetTitle>
              <Image
                className="shrink-0 object-cover"
                src="/logos/nextjs-logo.svg"
                alt="Header logo"
                decoding="async"
                loading="eager"
                width={246}
                height={25}
                priority
              />
            </SheetHeader>
            <div className="col-flex gap-y-4 px-4">
              <Separator className="h-px w-full bg-[#E5E5E5]" />
              <Button
                variant="outline"
                className="outline-button-class w-full"
                onClick={() => handleRouteChange('contact')}
              >
                <Typography
                  className="text-[16px] leading-6 font-medium"
                  text="Contact"
                />
              </Button>

              <Button
                variant="outline"
                className="outline-button-class w-full"
                onClick={() => handleRouteChange('faq')}
              >
                <Typography
                  className="text-[16px] leading-6 font-medium"
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
