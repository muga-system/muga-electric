"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

import { navLinks } from "@/content/business-content";
import { siteConfig } from "@/config/site";
import { Container } from "@/components/ui/container";

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b-2 border-foreground bg-card">
      <Container className="py-4">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <Link
            href="/"
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
            <a href={siteConfig.phoneHref} className="btn-primary px-5">
              {siteConfig.ctaPrimary}
            </a>
          </div>

          <button
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
              id="mobile-nav"
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
              <a href={siteConfig.phoneHref} className="btn-primary mt-1 justify-center py-3 text-xs">
                {siteConfig.ctaPrimary}
              </a>
            </nav>
          </>
        ) : null}
      </Container>
    </header>
  );
}
