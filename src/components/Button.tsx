import { ButtonHTMLAttributes, ReactNode } from "react";
import Link from "next/link";

type BaseProps = {
  children: ReactNode;
  variant?: "primary" | "ghost";
  className?: string;
};

type ButtonAsButton = BaseProps & ButtonHTMLAttributes<HTMLButtonElement> & {
  href?: never;
};

type ButtonAsLink = BaseProps & {
  href: string;
} & Omit<ButtonHTMLAttributes<HTMLAnchorElement>, "type">;

type ButtonProps = ButtonAsButton | ButtonAsLink;

export default function Button(props: ButtonProps) {
  const { children, variant = "primary", className } = props as BaseProps;
  const base =
    "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#9b7b5f] ring-offset-[--background] disabled:opacity-50 disabled:pointer-events-none";
  const variants: Record<string, string> = {
    primary:
      "bg-[#bfa58a] text-[#2b1e14] hover:bg-[#a88e74] active:bg-[#957b63]",
    ghost:
      "bg-transparent text-[#4a3a2c] hover:bg-[#e7dfd6] active:bg-[#ddd3c7]",
  };

  const classes = `${base} ${variants[variant]} px-4 h-10 ${className ?? ""}`;

  if ("href" in props && props.href) {
    return (
      <Link href={props.href} className={classes}>
        {children}
      </Link>
    );
  }

  // button element
  const { href: _ignored, ...buttonProps } = props as ButtonAsButton;
  return (
    <button className={classes} {...buttonProps}>
      {children}
    </button>
  );
}


