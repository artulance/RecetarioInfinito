# 🍲 Recetario Infinito

- [Descripción](#descripción)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Comandos](#comandos)
- [Iconografía](#iconografía)
- [Imágenes](#imágenes)
- [Página](#página)

## Descripción
Un sitio web de recetas construido con Astro, diseñado para compartir y explorar recetas organizadas por categorías.

## Estructura del Proyecto
```text
├── [public/](./public/)              # Archivos estáticos (imágenes, fuentes)
├── [src/](./src/)
│   ├── [components/](./src/components/)      # Componentes reutilizables (Header, Footer, Categories)
│   ├── [content/](./src/content/)            # Colecciones de contenido (recetas, solicitadas)
│   │   ├── [recetas/](./src/content/recetas/)     # Archivos .md de recetas
│   │   └── [solicitadas/](./src/content/solicitadas/) # Recetas solicitadas por usuarios
│   ├── [layouts/](./src/layouts/)         # Layouts de página
│   ├── [pages/](./src/pages/)             # Rutas del sitio
│   ├── [scripts/](./src/scripts/)         # Scripts JavaScript
│   ├── [styles/](./src/styles/)           # Estilos globales
│   ├── [consts.ts](./src/consts.ts)       # Constantes del sitio
│   └── [content.config.ts](./src/content.config.ts) # ⭐ CONFIGURACIÓN DE COLECCIONES
├── [astro.config.mjs](./astro.config.mjs)     # Configuración de Astro
├── [package.json](./package.json)
└── [tsconfig.json](./tsconfig.json)
```

## Comandos
| Comando | Acción |
| :------ | :----- |
| [`bun install`](#bun-install) | Installs dependencies |
| [`bun dev`](#bun-dev)         | Starts local dev server at `localhost:4321` |
| [`bun build`](#bun-build)     | Build your production site to `./dist/` |
| [`bun preview`](#bun-preview) | Preview your build locally, before deploying |
| [`bun astro ...`](#bun-astro) | Run CLI commands like `astro add`, `astro check` |
| [`bun astro -- --help`](#bun-astro-help) | Get help using the Astro CLI |

## Iconografía
Svg sacados de [Lucide](https://lucide.dev/), [Tabler](https://tabler-icons.io/), [Feather](https://feathericons.com/) y [Heroicons](https://heroicons.com/)

## Imágenes
Generadas con Google Gemini y ChatGPT Pro

## Página
Desplegado en: [https://artulance.github.io/RecetarioInfinito/recetas/](https://artulance.github.io/RecetarioInfinito/recetas/)