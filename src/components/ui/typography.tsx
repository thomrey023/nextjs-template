import { cn } from '@/lib/utils';

interface TypographyProps {
  children: React.ReactNode;
  className?: string;
}

export const Typography = ({ children, className }: TypographyProps) => {
  return <p className={cn('font-sans', className)}>{children}</p>;
};
