'use client';

import { cn } from '@/lib/utils';

import { Button } from '@/components/ui/button';
import { Typography } from '@/components/ui/typography';

interface ButtonWithIconProps {
  className: string;
  textClassName: string;
  text: string;
  disabled?: boolean;
  leadingIcon?: React.ReactNode;
  trailingIcon?: React.ReactNode;
  type?: 'button' | 'reset' | 'submit' | undefined;
  variant?:
    | 'link'
    | 'default'
    | 'destructive'
    | 'outline'
    | 'secondary'
    | 'ghost'
    | null
    | undefined;
  onClick?: () => void;
}

export const ButtonWithIcon = ({
  className,
  textClassName,
  text,
  disabled,
  leadingIcon,
  trailingIcon,
  type,
  variant,
  onClick,
}: ButtonWithIconProps) => {
  return (
    <Button
      className={cn(className, 'cursor-pointer')}
      disabled={disabled}
      variant={variant}
      type={type}
      onClick={onClick}
    >
      {leadingIcon}
      <Typography className={textClassName} text={text} />
      {trailingIcon}
    </Button>
  );
};
