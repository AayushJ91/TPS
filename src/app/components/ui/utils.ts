import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { useState, useEffect } from "react";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function isScreenshotOrAutomated(): boolean {
  if (typeof window === "undefined") return true;
  
  const isHeadless = navigator.webdriver || 
    /headless|lighthouse|googlebot|screenshot|page-speed|chrome-lighthouse|pingdom|capture/i.test(navigator.userAgent);
    
  const isFullPageCapture = window.innerHeight > 2000;
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  return !!(isHeadless || isFullPageCapture || prefersReducedMotion);
}

export function useIsScreenshotOrAutomated(): boolean {
  const [isScreenshot, setIsScreenshot] = useState(isScreenshotOrAutomated());

  useEffect(() => {
    const handleResize = () => {
      setIsScreenshot(isScreenshotOrAutomated());
    };
    window.addEventListener("resize", handleResize);
    // Initial check just in case
    setIsScreenshot(isScreenshotOrAutomated());
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isScreenshot;
}

