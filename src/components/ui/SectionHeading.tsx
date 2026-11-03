import React from "react";

export interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  badge,
  title,
  subtitle,
  align = "center",
  className = "",
}: SectionHeadingProps) {
  const alignmentStyles = align === "center" ? "text-center items-center" : "text-left items-start";

  return (
    <div className={`flex flex-col ${alignmentStyles} max-w-3xl ${align === "center" ? "mx-auto" : ""} mb-10 md:mb-14 ${className}`}>
      {badge && (
        <span className="inline-block px-3 py-1 mb-3 text-body-sm font-semibold tracking-wide text-brand-700 uppercase bg-brand-50 border border-brand-200 rounded-full">
          {badge}
        </span>
      )}
      <h2 className="text-heading-1 md:text-display font-bold text-content-primary tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-body-lg text-content-secondary leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
