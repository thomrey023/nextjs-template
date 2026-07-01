import { cn } from '@/lib/utils';

interface TypographyProps {
  text: string;
  className?: string;
}

export const Typography = ({ text, className }: TypographyProps) => {
  return <p className={cn('font-sans', className)}>{text}</p>;
};

interface SpanTypographyProps {
  children: React.ReactNode;
  className?: string;
}

export const SpanTypography = ({
  children,
  className,
}: SpanTypographyProps) => {
  return <p className={cn('font-sans', className)}>{children}</p>;
};
