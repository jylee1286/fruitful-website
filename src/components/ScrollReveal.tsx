"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    // Small delay to ensure DOM is painted after navigation
    const timer = setTimeout(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("visible");
            }
          });
        },
        {
          threshold: 0.05,
          rootMargin: "0px 0px -30px 0px",
        }
      );

      const elements = document.querySelectorAll(
        ".reveal, .reveal-left, .reveal-right, .reveal-scale"
      );
      elements.forEach((el) => observer.observe(el));

      return () => observer.disconnect();
    }, 50);

    return () => clearTimeout(timer);
  }, [pathname]); // Re-run when route changes

  return null;
}
