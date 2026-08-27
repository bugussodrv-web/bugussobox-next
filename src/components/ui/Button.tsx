import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
  href: string;
  variant?: "primary" | "ghost" | "light";
  children: ReactNode;
  className?: string;
}

export default function Button({
  href,
  variant = "primary",
  children,
  className = "",
}: ButtonProps) {
  const variantClass =
    variant === "primary"
      ? "btn-primary"
      : variant === "light"
        ? "btn-light"
        : "btn-ghost";

  return (
    <Link href={href} className={`btn ${variantClass} ${className}`}>
      {children}
    </Link>
  );
}