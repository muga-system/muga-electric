export function scrollToElementById(elementId: string): boolean {
  if (typeof window === "undefined") {
    return false;
  }

  const element = document.getElementById(elementId);

  if (!element) {
    return false;
  }

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  element.scrollIntoView({
    behavior: prefersReducedMotion ? "auto" : "smooth",
    block: "start"
  });

  return true;
}
