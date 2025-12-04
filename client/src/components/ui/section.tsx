import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  background?: "default" | "muted" | "primary" | "accent";
}

export function Section({ children, className, id, background = "default" }: SectionProps) {
  const bgColors = {
    default: "bg-background",
    muted: "bg-muted/30",
    primary: "bg-primary text-primary-foreground",
    accent: "bg-accent/10",
  };

  return (
    <section 
      id={id} 
      className={cn(
        "py-16 md:py-24 relative overflow-hidden",
        bgColors[background],
        className
      )}
    >
      <div className="container mx-auto px-4 relative z-10">
        {children}
      </div>
    </section>
  );
}
