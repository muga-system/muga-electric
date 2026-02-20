# Arquitectura

## Objetivo

Este proyecto implementa un landing profesional para servicios eléctricos con enfoque en:

- Claridad de conversión.
- Carga rápida.
- Mantenibilidad.
- Escalabilidad modular.

## Stack y runtime

- Next.js 15 (App Router).
- React 19.
- TypeScript.
- Tailwind CSS.

## Estructura del código

```txt
src/
  app/            # Entradas de aplicación, layout y estilos globales
  components/     # UI por dominio visual (layout, sections, ui)
  config/         # Configuración estable del sitio (marca, contacto, SEO base)
  content/        # Contenido editable de negocio y navegación
  lib/            # Utilidades puras (helpers)
  types/          # Tipos de dominio
```

## Convenciones obligatorias

- Un archivo por responsabilidad.
- Sin barrel files (`index.ts` agregadores).
- Import aliases con `@/*`.
- Contenido de negocio separado de presentación.
- Componentes de sección sin lógica de negocio compleja.
- Tipos compartidos definidos en `src/types`.

## Responsabilidades por capa

- `src/config/site.ts`: marca, teléfono, CTAs, datos base.
- `src/content/business-content.ts`: textos de secciones, navegación, listas.
- `src/components/sections/*`: composición visual de secciones.
- `src/components/layout/*`: header/footer.
- `src/components/ui/*`: primitivas reutilizables.
- `src/app/layout.tsx`: metadata SEO y JSON-LD.
- `src/app/globals.css`: sistema visual global.

## SEO local

Implementado en `src/app/layout.tsx`:

- Metadata base (title, description, keywords).
- Open Graph y Twitter.
- JSON-LD `Electrician` con foco Buenos Aires (CABA/GBA).

## Escalado recomendado

Si crece el proyecto:

- Mantener cada sección en archivo dedicado.
- Crear nuevos tipos en `src/types` antes de duplicar interfaces.
- Agregar tests de smoke para rutas y render básico.
- Mantener `README` y `docs/` alineados al estado real.
