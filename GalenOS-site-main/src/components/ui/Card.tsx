import React from "react";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  as?: "div" | "article" | "section";
  hoverable?: boolean;
  padding?: "none" | "sm" | "md" | "lg";
  className?: string;
}

export function Card({
  children,
  as: Component = "div",
  hoverable = false,
  padding = "md",
  className = "",
  ...props
}: CardProps) {
  const baseStyles =
    "bg-surface-card rounded-lg border border-border-subtle transition-all duration-200 overflow-hidden";

  const paddingStyles = {
    none: "",
    sm: "p-4",
    md: "p-6",
    lg: "p-8",
  };

  const hoverStyles = hoverable
    ? "hover:border-border-strong hover:shadow-sm hover:-translate-y-0.5"
    : "";

  return (
    <Component
      className={`${baseStyles} ${paddingStyles[padding]} ${hoverStyles} ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
}
