# Mantenimiento

## Flujo mínimo antes de merge/deploy

1. `pnpm lint`
2. `pnpm typecheck`
3. Revisión visual en desktop y mobile.
4. Validar anclas de navegación (`#propuesta`, `#muga`, `#contacto`).
5. Validar CTA principal (`tel:`) en header, hero y sección de contacto.

## Checklist de calidad

- No agregar archivos `index.ts` de re-export.
- No mezclar contenido de negocio dentro de componentes UI base.
- No dejar imports sin uso.
- No dejar carpetas vacías ni archivos obsoletos.
- Mantener consistencia de copy profesional y directo.

## Limpieza periódica

Comandos útiles:

```bash
find . -path './.git' -prune -o -path './node_modules' -prune -o -path './.next' -prune -o -type d -empty -print
find src -type f -empty -print
rg --files | sort
```

## Convenciones de cambios

- Cambios de contenido:
  - `src/content/business-content.ts`
  - `src/config/site.ts`
- Cambios visuales globales:
  - `src/app/globals.css`
  - `tailwind.config.ts`
- Cambios de estructura de secciones:
  - `src/components/sections/*`

## Control SEO (Buenos Aires)

Verificar siempre:

- `title` y `description` en `src/config/site.ts`.
- Metadata y JSON-LD en `src/app/layout.tsx`.
- Términos locales en copy principal (CABA, GBA, Buenos Aires).

## Incidentes comunes y resolución rápida

- Anchor cae debajo del header sticky:
  - Ajustar `scroll-margin-top` en `src/app/globals.css`.
- Estilo inconsistente entre secciones:
  - Reusar `block-panel`, `btn-primary`, `btn-secondary`.
- Texto desactualizado:
  - Revisar primero `src/content/business-content.ts`.
