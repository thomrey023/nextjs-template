import Link from "next/link";
import { cn } from "@/lib/utils";

interface TypographyProps {
  text: string;
  className?: string;
}

export const Typography = ({ text, className }: TypographyProps) => {
  return <p className={cn("font-sans", className)}>{text}</p>;
};

interface SpanTypographyProps {
  spanText: string;
  text: string;
  link?: string;
  className?: string;
  spanClassName?: string;
  spanTextClassName?: string;
}

export const SpanTypography = ({
  spanText,
  text,
  link,
  className,
  spanClassName,
  spanTextClassName,
}: SpanTypographyProps) => {
  return (
    <span className={spanClassName}>
      {link && (
        <Link href={link}>
          <Typography className={spanTextClassName} text={spanText} />
        </Link>
      )}
      {!link && <Typography className={spanTextClassName} text={spanText} />}
      <Typography className={className} text={text} />
    </span>
  );
};
