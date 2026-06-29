import { Loader2 } from 'lucide-react';

import { Typography } from '@/components/ui/typography';

const GlobalLoading = () => {
  return (
    <div className="bg-background/60 fixed inset-0 z-50 flex flex-col items-center justify-center p-6 text-center backdrop-blur-sm">
      {/* Absolute Top Loading Bar Tracker */}
      <div className="bg-muted fixed top-0 right-0 left-0 h-1 w-full overflow-hidden">
        <div className="bg-primary animate-infinite-loading h-full w-1/3 rounded-full" />
      </div>

      <div className="w-full max-w-xs space-y-4">
        <div className="inline-flex items-center justify-center">
          <Loader2 className="text-primary h-8 w-8 animate-spin" />
        </div>

        <Typography
          className="text-muted-foreground animate-pulse text-xs font-medium tracking-wide"
          text="Getting things ready..."
        />
      </div>
    </div>
  );
};

export default GlobalLoading;
