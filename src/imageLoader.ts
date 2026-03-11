"use client";

type ImageLoaderProps = {
  src: string;
  width: number;
  quality?: number;
};

export default function imageLoader({ src }: ImageLoaderProps): string {
  // Don't prefix external URLs
  if (src.startsWith("http") || src.startsWith("//")) {
    return src;
  }
  return `/kakadu-coin${src}`;
}
