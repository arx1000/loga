import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "sale" | "new";
  className?: string;
}

export function Badge({ children, variant = "default", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1 text-xs font-semibold rounded-full",
        {
          "bg-primary text-white": variant === "default",
          "bg-red-500 text-white": variant === "sale",
          "bg-emerald-500 text-white": variant === "new",
        },
        className
      )}
    >
      {children}
    </span>
  );
}
