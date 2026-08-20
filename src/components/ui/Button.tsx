import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils'; // Assuming standard tailwind merge/clsx utility exists

export type ButtonVariant = 'primary' | 'secondary' | 'ghost';
export type ButtonSize = 'sm' | 'default' | 'lg';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  asChild?: boolean;
  href?: string;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'default',  href, children, ...props }, ref) => {
    
    // Base classes for all buttons
    const baseClasses = "relative inline-flex items-center justify-center whitespace-nowrap uppercase tracking-wider font-semibold transition-all duration-150 ease-fast focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 active:translate-y-px";
    
    // Variant specific classes
    const variants = {
      primary: "text-accent px-0", // No horizontal padding for primary
      secondary: "border border-foreground text-foreground hover:bg-foreground hover:text-background",
      ghost: "text-muted-foreground hover:text-foreground",
    };

    // Size specific classes (mainly affects padding and gap)
    const sizes = {
      sm: {
        primary: "py-2 gap-2 text-sm",
        secondary: "px-4 py-2 gap-2 text-sm",
        ghost: "px-3 py-2 gap-2 text-sm"
      },
      default: {
        primary: "py-3 gap-2.5 text-base",
        secondary: "px-6 py-3 gap-2.5 text-base",
        ghost: "px-4 py-3 gap-2.5 text-base"
      },
      lg: {
        primary: "py-4 gap-3 text-lg",
        secondary: "px-8 py-4 gap-3 text-lg",
        ghost: "px-6 py-4 gap-3 text-lg"
      }
    };

    const combinedClasses = cn(
      baseClasses,
      variants[variant],
      sizes[size][variant],
      className
    );

    // Inner underline elements for primary and ghost
    const renderUnderline = () => {
      if (variant === 'primary') {
        return (
          <span className="absolute bottom-0 left-0 w-full h-[2px] bg-accent origin-left transition-transform duration-150 ease-fast scale-x-100 group-hover:scale-x-110" />
        );
      }
      if (variant === 'ghost') {
        return (
          <span className="absolute bottom-0 left-4 right-4 h-px bg-foreground origin-left transition-transform duration-150 ease-fast scale-x-0 group-hover:scale-x-100" />
        );
      }
      return null;
    };

    // If it's a link
    if (href) {
      return (
        <Link href={href} className={cn("group cursor-pointer", combinedClasses)}>
          {children}
          {renderUnderline()}
        </Link>
      );
    }

    return (
      <button ref={ref} className={cn("group", combinedClasses)} {...props}>
        {children}
        {renderUnderline()}
      </button>
    );
  }
);

Button.displayName = "Button";
