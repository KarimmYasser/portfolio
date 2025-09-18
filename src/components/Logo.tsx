import React from "react";
import { cn } from "@/lib/utils";
import { useContent } from "@/content/ContentContext";

type LogoProps = {
  className?: string;
  height?: number | string;
  width?: number | string;
  ariaLabel?: string;
};

export default function Logo({
  className,
  height = 28,
  width,
  ariaLabel,
}: LogoProps) {
  const { content } = useContent();
  const alt = ariaLabel || content.footer.brand || "Logo";

  const style: React.CSSProperties = {
    height: typeof height === "number" ? `${height}px` : height,
    width: width ? (typeof width === "number" ? `${width}px` : width) : "auto",
  };

  return (
    <span className={cn("relative inline-block", className)} style={style}>
      {/* Light mode logo */}
      <img
        src="/black_logo.png"
        alt={alt}
        className="block dark:hidden select-none pointer-events-none"
        draggable={false}
        decoding="async"
        style={{ height: "100%", width: "auto" }}
      />
      {/* Dark mode logo */}
      <img
        src="/white_logo.png"
        alt={alt}
        className="hidden dark:block select-none pointer-events-none"
        draggable={false}
        decoding="async"
        style={{ height: "100%", width: "auto" }}
      />
    </span>
  );
}
