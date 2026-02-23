"use client";

import { useEffectEvent, useLayoutEffect, useRef, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

import { ContactActionTrigger } from "@/components/contact/contact-action-trigger";
import { navLinks } from "@/content/business-content";
import { siteConfig } from "@/config/site";
import { lockPageScroll } from "@/lib/scroll-lock";
import { Container } from "@/components/ui/container";

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuPanelRef = useRef<HTMLElement>(null);
  const menuToggleRef = useRef<HTMLButtonElement>(null);

  const handleMenuKeyDown = useEffectEvent((event: KeyboardEvent) => {
    if (!menuOpen || !menuPanelRef.current) {
      return;
    }

    if (event.key === "Escape") {
      event.preventDefault();
      setMenuOpen(false);
      return;
    }

    if (event.key !== "Tab") {
      return;
    }

    const focusable = Array.from(
      menuPanelRef.current.querySelectorAll<HTMLElement>(
        "a[href], button:not([disabled]), [tabindex]:not([tabindex='-1'])"
      )
    );

    if (focusable.length === 0) {
      event.preventDefault();
      menuPanelRef.current.focus();
      return;
    }

    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    const activeElement = document.activeElement;

    if (event.shiftKey && activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  });

  useLayoutEffect(() => {
    if (!menuOpen) {
      return;
    }

    const previouslyFocused = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    const toggleButton = menuToggleRef.current;
    const releaseScrollLock = lockPageScroll();

    const firstFocusable = menuPanelRef.current?.querySelector<HTMLElement>("a[href], button:not([disabled])");
    firstFocusable?.focus();

    const onDocumentKeyDown = (event: KeyboardEvent) => handleMenuKeyDown(event);
    document.addEventListener("keydown", onDocumentKeyDown);

    return () => {
      document.removeEventListener("keydown", onDocumentKeyDown);
      releaseScrollLock();

      if (document.activeElement === document.body) {
        toggleButton?.focus();
      } else {
        previouslyFocused?.focus();
      }
    };
  }, [menuOpen]);

  return (
    <header className="sticky top-0 z-50 border-b-2 border-foreground bg-card">
      <Container className="py-4">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <Link
            href="/#hero"
            className="block-panel inline-flex min-w-[4.5rem] items-center justify-center px-4 py-2 text-lg font-black uppercase tracking-[0.08em] text-foreground sm:text-xl"
          >
            {siteConfig.brand}
          </Link>

          <nav className="hidden items-center gap-5 md:flex">
            {navLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-xs font-bold uppercase tracking-[0.08em] text-muted transition hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center md:flex">
            <ContactActionTrigger channel="call" href={siteConfig.phoneHref} className="btn-primary px-5">
              {siteConfig.ctaPrimary}
            </ContactActionTrigger>
          </div>

          <button
            ref={menuToggleRef}
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            className="inline-flex h-11 w-11 items-center justify-center border-2 border-foreground bg-card text-foreground md:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label={menuOpen ? "Cerrar menú de navegación" : "Abrir menú de navegación"}
          >
            {menuOpen ? <X className="h-5 w-5" strokeWidth={2.2} /> : <Menu className="h-5 w-5" strokeWidth={2.2} />}
          </button>
        </div>

        {menuOpen ? (
          <>
            <button
              type="button"
              aria-label="Cerrar menú"
              className="fixed inset-0 z-40 bg-foreground/35 md:hidden"
              onClick={() => setMenuOpen(false)}
            />
            <nav
              ref={menuPanelRef}
              id="mobile-nav"
              aria-label="Navegación móvil"
              tabIndex={-1}
              className="fixed left-1/2 top-[5.6rem] z-50 grid w-[min(92vw,22rem)] -translate-x-1/2 gap-3 border-2 border-foreground bg-surface p-4 md:hidden"
            >
              {navLinks.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="border-2 border-foreground bg-card px-4 py-2.5 text-xs font-bold uppercase tracking-[0.08em] text-muted"
                >
                  {item.label}
                </a>
              ))}
              <ContactActionTrigger
                channel="call"
                href={siteConfig.phoneHref}
                className="btn-primary mt-1 justify-center py-3 text-xs"
                onBeforeOpen={() => setMenuOpen(false)}
              >
                {siteConfig.ctaPrimary}
              </ContactActionTrigger>
            </nav>
          </>
        ) : null}
      </Container>
    </header>
  );
}
