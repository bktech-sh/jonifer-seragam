"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const SLIDE_INTERVAL_MS = 5000;

export function ImageCarousel({
  images,
  alt = "",
  sizes = "100vw",
}: {
  images: string[];
  alt?: string;
  sizes?: string;
}) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;

    const timer = setInterval(() => {
      setActiveIndex((current) => (current + 1) % images.length);
    }, SLIDE_INTERVAL_MS);

    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <>
      {images.map((image, index) => (
        <Image
          key={image}
          src={image}
          alt={alt}
          fill
          unoptimized
          preload={index === 0}
          sizes={sizes}
          className={`object-cover transition-opacity duration-1000 ease-in-out ${
            index === activeIndex ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
    </>
  );
}
