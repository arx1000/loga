"use client";

import { forwardRef, ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center font-medium transition-all duration-300 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed",
          {
            "bg-primary text-white hover:bg-primary-dark active:scale-[0.97]":
              variant === "primary",
            "bg-secondary text-white hover:opacity-90 active:scale-[0.97]":
              variant === "secondary",
            "border-2 border-primary text-primary hover:bg-primary hover:text-white active:scale-[0.97]":
              variant === "outline",
            "text-primary hover:bg-primary/10 active:scale-[0.97]":
              variant === "ghost",
          },
          {
            "px-4 py-2 text-sm rounded-lg": size === "sm",
            "px-6 py-3 text-base rounded-xl": size === "md",
            "px-8 py-4 text-lg rounded-xl": size === "lg",
          },
          className
        )}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };
