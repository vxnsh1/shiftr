import clsx from "clsx";
import React from "react";

type LiquidGlassProps = {
  children: React.ReactNode;
  filterId: string;
  className?: string;
  strength?: "sm" | "md" | "lg";
};

const strengthMap = {
  sm: "backdrop-blur-md",
  md: "backdrop-blur-lg",
  lg: "backdrop-blur-xl",
};

export const LiquidGlass: React.FC<LiquidGlassProps> = ({
  children,
  filterId,
  className,
  strength = "md",
}) => {
  return (
    <div
      className={clsx(
        "relative rounded-2xl border border-white/15",
        "supports-backdrop-filter:bg-black/10",
        strengthMap[strength],
        className
      )}
      style={{
        backdropFilter: `url(#${filterId})`,
        WebkitBackdropFilter: `url(#${filterId})`,
      }}
    >
      {/* Specular rim */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/20" />

      {children}
    </div>
  );
};
