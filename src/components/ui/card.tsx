import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export function Card({ children, className }: CardProps) {
  return (
    <div
      className={cn(
        "bg-card border border-border rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300",
        className
      )}
    >
      {children}
    </div>
  );
}
