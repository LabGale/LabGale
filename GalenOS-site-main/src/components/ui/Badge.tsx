import React from "react";

export interface BadgeProps {
  children: React.ReactNode;
  variant?: "brand" | "neutral" | "warning" | "info";
  size?: "sm" | "md";
  className?: string;
  icon?: React.ReactNode;
}

export function Badge({
  children,
  variant = "brand",
  size = "md",
  className = "",
  icon,
}: BadgeProps) {
  const baseStyles = "inline-flex items-center font-medium rounded-full select-none";

  const sizeStyles = {
    sm: "px-2 py-0.5 text-[11px] leading-tight gap-1",
    md: "px-3 py-1 text-body-sm leading-snug gap-1.5",
  };

  const variantStyles = {
    brand: "bg-brand-50 text-brand-700 border border-brand-200",
    neutral: "bg-surface-subtle text-content-secondary border border-border-subtle",
    warning: "bg-amber-50 text-amber-800 border border-amber-200",
    info: "bg-sky-50 text-sky-800 border border-sky-200",
  };

  return (
    <span className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}>
      {icon && <span className="inline-flex shrink-0">{icon}</span>}
      {children}
    </span>
  );
}
