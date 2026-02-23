"use client";

import type { ButtonHTMLAttributes, MouseEvent, PropsWithChildren } from "react";

import { scrollToElementById } from "@/lib/scroll-to-element";

type ScrollToAnchorButtonProps = PropsWithChildren<{
  targetId: string;
}> &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "type">;

export function ScrollToAnchorButton({
  targetId,
  onClick,
  children,
  ...buttonProps
}: ScrollToAnchorButtonProps) {
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    onClick?.(event);

    if (event.defaultPrevented) {
      return;
    }

    scrollToElementById(targetId);
  };

  return (
    <button type="button" {...buttonProps} onClick={handleClick}>
      {children}
    </button>
  );
}
