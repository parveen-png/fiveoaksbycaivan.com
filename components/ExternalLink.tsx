import type { ReactNode } from "react";

export function ExternalLink({
  href,
  children,
  className = "",
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <a
      href={href}
      className={`inline-flex items-baseline gap-1 underline decoration-rule underline-offset-4 transition-colors hover:decoration-brass ${className}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
      <span aria-hidden="true" className="text-ink-muted">
        ↗
      </span>
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  );
}
