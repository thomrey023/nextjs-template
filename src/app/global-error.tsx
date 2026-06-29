'use client';

import GlobalError from '@/components/error/global-error';

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

const RootSystemError = ({ error, reset }: ErrorProps) => {
  return <GlobalError error={error} reset={reset} />;
};

export default RootSystemError;
