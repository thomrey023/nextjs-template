'use client';

import { useEffect } from 'react';

import { AlertTriangle } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Typography } from '@/components/ui/typography';

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

const GlobalError = ({ error, reset }: ErrorProps) => {
  useEffect(() => {
    console.error('Captured Application Runtime Error:', error);
  }, [error]);

  return (
    <div className="bg-background flex min-h-screen flex-col items-center justify-center p-6 text-center">
      <div className="w-full max-w-sm space-y-6 sm:max-w-md">
        <div className="bg-destructive/10 text-destructive inline-flex h-16 w-16 items-center justify-center rounded-full transition-transform duration-300 hover:scale-105">
          <AlertTriangle className="h-8 w-8" />
        </div>

        <div className="space-y-2">
          <Typography
            className="text-foreground text-2xl font-bold tracking-tight sm:text-3xl"
            text="Something went wrong!"
          />
          <Typography
            className="text-muted-foreground px-2 text-sm leading-relaxed sm:px-0"
            text="An unexpected application error occurred. The system logs have been automatically captured for engineering review."
          />
        </div>

        <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:justify-center">
          <Button
            className="bg-primary text-primary-foreground hover:bg-primary/90 focus-visible:ring-ring h-10 w-full cursor-pointer items-center justify-center rounded px-6 shadow transition-all focus-visible:ring-1 focus-visible:outline-none sm:w-auto"
            onClick={() => reset()}
          >
            <Typography className="text-sm font-medium" text="Try Again" />
          </Button>

          <Button
            className="border-input bg-background text-foreground hover:bg-accent hover:text-accent-foreground focus-visible:ring-ring h-10 w-full cursor-pointer items-center justify-center rounded border px-6 shadow-sm transition-all focus-visible:ring-1 focus-visible:outline-none sm:w-auto"
            onClick={() => (window.location.href = '/')}
          >
            <Typography
              className="text-sm font-medium"
              text="Return to Safety"
            />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default GlobalError;
