import Image from "next/image";
import { copy } from "@/lib/project-data";

export function ImageFrame({
  src,
  alt,
  width,
  height,
  priority = false,
  className = "",
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  priority?: boolean;
  className?: string;
}) {
  return (
    <figure className={className}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        sizes="(min-width: 1024px) 640px, 100vw"
        className="h-auto w-full object-cover"
      />
      <figcaption className="mt-2 text-xs text-ink-muted">
        {copy.imageQualifier}
      </figcaption>
    </figure>
  );
}
