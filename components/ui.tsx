import Link from "next/link";
import type { ReactNode } from "react";

export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-6xl px-5 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  );
}

export function Section({
  id,
  children,
  className = "",
  ariaLabelledby,
}: {
  id?: string;
  children: ReactNode;
  className?: string;
  ariaLabelledby?: string;
}) {
  return (
    <section
      id={id}
      aria-labelledby={ariaLabelledby}
      className={`scroll-mt-28 py-16 md:py-24 ${className}`}
    >
      {children}
    </section>
  );
}

export function Eyebrow({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <p
      className={`text-[0.7rem] font-semibold uppercase tracking-[0.22em] ${className || "text-brass"}`}
    >
      {children}
    </p>
  );
}

export function CtaLink({
  href,
  children,
  className = "",
  onClick,
}: {
  href: string;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}) {
  return (
    <Link href={href} className={`btn-primary ${className}`} onClick={onClick}>
      {children}
    </Link>
  );
}
