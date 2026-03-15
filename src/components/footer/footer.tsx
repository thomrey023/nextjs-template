import Image from 'next/image';
import Link from 'next/link';

import { Typography } from '@/components/ui/typography';
import { cn } from '@/lib/utils';

const Footer = () => {
  return (
    <footer className="footer-class min-h-25.25 py-5">
      <div
        className={cn(
          'col-flex px-constant w-full items-start gap-y-3.75',
          'lg:flex-row lg:items-center lg:justify-between',
        )}
      >
        <Link href="/">
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
        </Link>

        <div
          className={cn(
            'col-flex items-start w-fit',
            'lg:flex-row lg:items-center lg:justify-between lg:w-full lg:max-w-107.5',
          )}
        >
          <Link href="/terms-and-conditions">
            <Typography
              className="text-[14px] leading-5 text-zinc-700"
              text="Terms and conditions"
            />
          </Link>
          <Link href="privacy-policy">
            <Typography className="text-[14px] leading-5 text-zinc-700" text="Privacy policy" />
          </Link>
          <Link href="faq">
            <Typography className="text-[14px] leading-5 text-zinc-700" text="FAQs" />
          </Link>
          <Link href="contact">
            <Typography className="text-[14px] leading-5 text-zinc-700" text="Contact us" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
