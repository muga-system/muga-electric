"use client";

import type { PropsWithChildren } from "react";
import {
  createContext,
  useContext,
  useEffect,
  useEffectEvent,
  useId,
  useLayoutEffect,
  useRef,
  useState
} from "react";
import { FlaskConical, MessageCircle, Phone, X } from "lucide-react";

import { siteConfig } from "@/config/site";
import { lockPageScroll } from "@/lib/scroll-lock";

type ContactChannel = "call" | "whatsapp";

type ContactNoticeRequest = {
  channel: ContactChannel;
  href: string;
  target?: string;
  rel?: string;
};

type ContactNoticeContextValue = {
  openContactNotice: (request: ContactNoticeRequest) => void;
  closeContactNotice: () => void;
};

const ContactNoticeContext = createContext<ContactNoticeContextValue | null>(null);

function getFocusableElements(container: HTMLElement | null): HTMLElement[] {
  if (!container) {
    return [];
  }

  const selector = [
    "a[href]",
    "button:not([disabled])",
    "textarea:not([disabled])",
    "input:not([disabled])",
    "select:not([disabled])",
    "[tabindex]:not([tabindex='-1'])"
  ].join(",");

  return Array.from(container.querySelectorAll<HTMLElement>(selector)).filter(
    (element) => !element.hasAttribute("disabled") && element.getAttribute("aria-hidden") !== "true"
  );
}

type ContactNoticeDialogProps = {
  request: ContactNoticeRequest;
  onClose: () => void;
};

function ContactNoticeDialog({ request, onClose }: ContactNoticeDialogProps) {
  const titleId = useId();
  const descriptionId = useId();
  const panelRef = useRef<HTMLDivElement>(null);
  const cancelButtonRef = useRef<HTMLButtonElement>(null);

  const isCall = request.channel === "call";
  const channelLabel = isCall ? "TELÉFONO" : "WHATSAPP";
  const ChannelIcon = isCall ? Phone : MessageCircle;

  const handleKeyDown = useEffectEvent((event: KeyboardEvent) => {
    if (event.key === "Escape") {
      event.preventDefault();
      onClose();
      return;
    }

    if (event.key !== "Tab") {
      return;
    }

    const focusable = getFocusableElements(panelRef.current);

    if (focusable.length === 0) {
      event.preventDefault();
      panelRef.current?.focus();
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
    const previouslyFocused = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    const releaseScrollLock = lockPageScroll();

    const focusTarget = cancelButtonRef.current ?? panelRef.current;
    focusTarget?.focus();

    const onDocumentKeyDown = (event: KeyboardEvent) => handleKeyDown(event);
    document.addEventListener("keydown", onDocumentKeyDown);

    return () => {
      document.removeEventListener("keydown", onDocumentKeyDown);
      releaseScrollLock();
      previouslyFocused?.focus();
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      <button
        type="button"
        aria-label="Cerrar aviso de demostración"
        className="absolute inset-0 bg-foreground/60"
        onClick={onClose}
      />

      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        aria-describedby={descriptionId}
        tabIndex={-1}
        className="relative z-10 w-full max-w-3xl border-2 border-foreground bg-card p-5 text-left shadow-panel sm:p-8"
      >
        <button
          type="button"
          aria-label="Cerrar"
          onClick={onClose}
          className="absolute right-3 top-3 inline-flex h-10 w-10 items-center justify-center border-2 border-foreground bg-card text-foreground"
        >
          <X className="h-5 w-5" aria-hidden />
        </button>

        <div className="pr-12">
          <span className="inline-flex items-center border border-foreground bg-brand px-3 py-1 text-[11px] font-black uppercase tracking-[0.08em] text-brandForeground">
            Aviso
          </span>

          <h2 id={titleId} className="mt-5 text-3xl font-extrabold uppercase leading-tight text-foreground sm:text-4xl">
            Versión de prueba
          </h2>

          <div className="mt-7 grid gap-5 sm:grid-cols-[6.5rem_1fr] sm:items-start">
            <div className="inline-flex h-24 w-24 items-center justify-center border border-foreground bg-surface">
              <FlaskConical className="h-10 w-10 text-foreground" strokeWidth={2.2} aria-hidden />
            </div>

            <div>
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="inline-flex items-center gap-2 border border-foreground bg-card px-3 py-1 text-[11px] font-black uppercase tracking-[0.08em] text-foreground">
                  <ChannelIcon className="h-4 w-4" aria-hidden />
                  {channelLabel}
                </span>
                <span className="text-sm font-black uppercase tracking-[0.08em] text-foreground">
                  Sin contacto real
                </span>
              </div>

              <p id={descriptionId} className="mt-5 max-w-2xl text-lg leading-relaxed text-foreground">
                Este sitio está en versión de prueba. Los botones de teléfono y WhatsApp son demostrativos y no tienen
                un canal de contacto real habilitado.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <button ref={cancelButtonRef} type="button" onClick={onClose} className="btn-primary min-w-48">
            Entendido
          </button>
        </div>
      </div>
    </div>
  );
}

export function ContactNoticeProvider({ children }: PropsWithChildren) {
  const [request, setRequest] = useState<ContactNoticeRequest | null>(null);

  const openContactNotice = (nextRequest: ContactNoticeRequest) => {
    setRequest(nextRequest);
  };

  const closeContactNotice = () => {
    setRequest(null);
  };

  return (
    <ContactNoticeContext.Provider value={{ openContactNotice, closeContactNotice }}>
      {children}
      {request ? <ContactNoticeDialog request={request} onClose={closeContactNotice} /> : null}
    </ContactNoticeContext.Provider>
  );
}

export function useContactNotice() {
  const context = useContext(ContactNoticeContext);

  if (!context) {
    throw new Error("useContactNotice must be used within ContactNoticeProvider");
  }

  return context;
}
