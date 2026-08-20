import React from 'react';
import { cn } from '@/lib/utils';

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex w-full bg-input border border-border px-4 py-2",
          "h-12 md:h-14",
          "text-base text-foreground placeholder:text-muted-foreground",
          "rounded-none", // Sharp edges
          "transition-colors duration-150 ease-fast",
          "focus:outline-none focus:border-accent focus:ring-0",
          "disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";
