let scrollLockCount = 0;
let previousBodyOverflow = "";
let previousBodyPaddingRight = "";
let previousRootScrollLockOffset = "";
let appliedScrollCompensation = 0;

export function lockPageScroll(): () => void {
  if (typeof window === "undefined") {
    return () => {};
  }

  scrollLockCount += 1;

  if (scrollLockCount === 1) {
    const root = document.documentElement;
    const body = document.body;
    const computedBodyPaddingRight = Number.parseFloat(window.getComputedStyle(body).paddingRight) || 0;
    const widthBeforeLock = root.clientWidth;

    previousBodyOverflow = body.style.overflow;
    previousBodyPaddingRight = body.style.paddingRight;
    previousRootScrollLockOffset = root.style.getPropertyValue("--scroll-lock-offset");

    body.style.overflow = "hidden";

    // Measure actual viewport expansion after hiding scrollbars. If the browser
    // reserves gutter space (e.g. with scrollbar-gutter), this becomes 0.
    appliedScrollCompensation = Math.max(0, root.clientWidth - widthBeforeLock);

    if (appliedScrollCompensation > 0) {
      body.style.paddingRight = `${computedBodyPaddingRight + appliedScrollCompensation}px`;
    }

    root.style.setProperty("--scroll-lock-offset", `${appliedScrollCompensation}px`);
  }

  let released = false;

  return () => {
    if (released || typeof window === "undefined") {
      return;
    }

    released = true;
    scrollLockCount = Math.max(0, scrollLockCount - 1);

    if (scrollLockCount > 0) {
      return;
    }

    const root = document.documentElement;
    const body = document.body;

    body.style.overflow = previousBodyOverflow;
    body.style.paddingRight = previousBodyPaddingRight;
    appliedScrollCompensation = 0;

    if (previousRootScrollLockOffset) {
      root.style.setProperty("--scroll-lock-offset", previousRootScrollLockOffset);
    } else {
      root.style.removeProperty("--scroll-lock-offset");
    }
  };
}
