import Image from 'next/image';
import Link from 'next/link';

import { cn } from '@/lib/utils';

import { Typography } from '@/components/ui/typography';

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
            className="shrink-0 object-cover"
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
            'col-flex w-fit items-start',
            'lg:w-full lg:max-w-107.5 lg:flex-row lg:items-center lg:justify-between',
          )}
        >
          <Link href="/terms-and-conditions">
            <Typography
              className="text-[14px] leading-5 text-zinc-700"
              text="Terms and conditions"
            />
          </Link>
          <Link href="privacy-policy">
            <Typography
              className="text-[14px] leading-5 text-zinc-700"
              text="Privacy policy"
            />
          </Link>
          <Link href="faq">
            <Typography
              className="text-[14px] leading-5 text-zinc-700"
              text="FAQs"
            />
          </Link>
          <Link href="contact">
            <Typography
              className="text-[14px] leading-5 text-zinc-700"
              text="Contact us"
            />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
