import Link from 'next/link';

import { Typography } from '@/components/ui/typography';

const Error = () => {
  return (
    <div className="bg-background flex min-h-screen flex-col items-center justify-center px-4 text-center">
      <div className="space-y-4">
        <Typography
          className="text-muted-foreground/30 text-9xl font-extrabold tracking-tight select-none"
          text="404"
        />
        <Typography
          className="text-foreground text-2xl font-bold tracking-tight sm:text-3xl"
          text="Page Not Found"
        />
        <Typography
          className="text-muted-foreground mx-auto max-w-md text-sm"
          text="Oops! We can’t seem to find that page. Head back home to keep exploring."
        />

        <div className="pt-4">
          <Link
            href="/"
            className="bg-primary text-primary-foreground hover:bg-primary/90 focus-visible:ring-ring inline-flex h-10 items-center justify-center rounded px-6 text-sm font-medium shadow transition-colors focus-visible:ring-1 focus-visible:outline-none"
          >
            Return Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Error;
