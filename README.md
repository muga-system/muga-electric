# EVF - Sitio Profesional

Landing profesional para servicio eléctrico en CABA y GBA.

## Stack

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS
- ESLint

## Scripts

```bash
pnpm dev
pnpm build
pnpm start
pnpm lint
pnpm typecheck
```

## Variables de entorno

Usá `.env.local` para definir el modo del sitio:

```bash
NEXT_PUBLIC_SITE_MODE=demo # demo | preview | production
NEXT_PUBLIC_SITE_URL=https://tu-dominio.com
```

- `demo`: mantiene los modales de aviso y bloquea indexación (`noindex` + `robots`).
- `preview`: desactiva modales demo y bloquea indexación.
- `production`: desactiva modales demo y habilita indexación/sitemap.

## Documentación

- Arquitectura: `docs/ARCHITECTURE.md`
- Mantenimiento: `docs/MAINTENANCE.md`

## Arquitectura (actual)

```txt
src/
  app/
    globals.css
    layout.tsx
    page.tsx
  components/
    layout/
      site-header.tsx
      site-footer.tsx
    sections/
      hero-section.tsx
      benefits-section.tsx
      muga-system-section.tsx
      cta-section.tsx
    ui/
      container.tsx
      glass-panel.tsx
      icon-badge.tsx
      pill.tsx
      section-heading.tsx
  config/
    site.ts
  content/
    business-content.ts
  lib/
    cn.ts
  types/
    business.ts
```

## Estándares del proyecto

- Arquitectura modular: un archivo por responsabilidad.
- Sin barrel files (`index.ts` agregadores).
- Separación estricta entre contenido (`content`), configuración (`config`) y UI (`components`).
- Diseño responsive mobile-first.
- Tipado estricto y componentes reutilizables.
- SEO local para Buenos Aires en `src/app/layout.tsx`.

## Personalización rápida

- Marca, teléfono y CTAs: `src/config/site.ts`
- Textos de secciones y navegación: `src/content/business-content.ts`
- Sistema visual global: `src/app/globals.css` y `tailwind.config.ts`

## Checklist de mantenimiento

- Ejecutar `pnpm lint` y `pnpm typecheck` antes de publicar.
- Revisar que no existan carpetas vacías ni archivos obsoletos.
- Mantener consistencia de naming y responsabilidades por archivo.
