"use client";

import type { ButtonHTMLAttributes, MouseEventHandler, PropsWithChildren } from "react";
import { startTransition } from "react";

import { useContactNotice } from "@/components/contact/contact-notice-provider";

type ContactActionTriggerProps = PropsWithChildren<{
  channel: "call" | "whatsapp";
  href: string;
  target?: string;
  rel?: string;
  onBeforeOpen?: () => void;
}> &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "type">;

export function ContactActionTrigger({
  channel,
  href,
  target,
  rel,
  onBeforeOpen,
  onClick,
  children,
  ...buttonProps
}: ContactActionTriggerProps) {
  const { openContactNotice } = useContactNotice();

  const handleClick: MouseEventHandler<HTMLButtonElement> = (event) => {
    onClick?.(event);

    if (event.defaultPrevented) {
      return;
    }

    onBeforeOpen?.();

    startTransition(() => {
      openContactNotice({
        channel,
        href,
        target,
        rel
      });
    });
  };

  return (
    <button type="button" aria-haspopup="dialog" {...buttonProps} onClick={handleClick}>
      {children}
    </button>
  );
}
