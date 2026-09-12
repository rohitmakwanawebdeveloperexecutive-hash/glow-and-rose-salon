import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "gold" | "outline" | "wine" | "ghost" | "whatsapp";
  size?: "sm" | "md" | "lg";
  href?: string;
  isExternal?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  children: React.ReactNode;
}

export function Button({
  variant = "gold",
  size = "md",
  href,
  isExternal = false,
  leftIcon,
  rightIcon,
  className,
  children,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium transition-all duration-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#c9a24a]/50 disabled:opacity-50 disabled:pointer-events-none cursor-pointer tracking-wide";

  const sizeStyles = {
    sm: "text-xs px-4 py-2 gap-1.5",
    md: "text-sm px-6 py-3 gap-2",
    lg: "text-base px-8 py-4 gap-2.5",
  };

  const variantStyles = {
    gold: "bg-gradient-to-r from-[#e8c66a] via-[#c9a24a] to-[#b38d35] text-[#0a0808] font-semibold hover:opacity-95 hover:shadow-[0_0_20px_rgba(201,162,74,0.35)] active:scale-[0.98]",
    outline:
      "border border-[#c9a24a] text-[#e8c66a] bg-transparent hover:bg-[#c9a24a]/10 hover:border-[#e8c66a] hover:text-[#f7f1e7] active:scale-[0.98]",
    wine: "bg-[#220b15] border border-[#c9a24a]/30 text-[#f7f1e7] hover:border-[#c9a24a] hover:bg-[#2e101d] active:scale-[0.98]",
    ghost: "text-[#c4b5a5] hover:text-[#e8c66a] hover:bg-[#c9a24a]/5 active:scale-[0.98]",
    whatsapp:
      "bg-[#25D366] text-white font-semibold hover:bg-[#20ba59] hover:shadow-[0_0_20px_rgba(37,211,102,0.3)] active:scale-[0.98]",
  };

  const combinedClasses = cn(
    baseStyles,
    sizeStyles[size],
    variantStyles[variant],
    className
  );

  if (href) {
    if (isExternal) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={combinedClasses}
        >
          {leftIcon && <span className="shrink-0">{leftIcon}</span>}
          <span>{children}</span>
          {rightIcon && <span className="shrink-0">{rightIcon}</span>}
        </a>
      );
    }
    return (
      <Link href={href} className={combinedClasses}>
        {leftIcon && <span className="shrink-0">{leftIcon}</span>}
        <span>{children}</span>
        {rightIcon && <span className="shrink-0">{rightIcon}</span>}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {leftIcon && <span className="shrink-0">{leftIcon}</span>}
      <span>{children}</span>
      {rightIcon && <span className="shrink-0">{rightIcon}</span>}
    </button>
  );
}
