# CD Photography

Portfolio y sitio web profesional para **CD Photography**, un servicio de fotografía con sede en Buenos Aires, Argentina. Construido con React, TypeScript y Vite, con imágenes optimizadas a través de Cloudinary.

## Tecnologías

- **React 19** con TypeScript
- **Vite 8** — bundler y dev server
- **Cloudinary** — CDN de imágenes con optimización automática (formato, calidad, responsive)
- **CSS puro** — sistema de diseño propio con variables CSS (sin frameworks de estilos)
- **ESLint** — linting con reglas de React Hooks y React Refresh

## Inicio rápido

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Build de producción
npm run build

# Preview del build
npm run preview

# Lint
npm run lint
```

## Estructura del proyecto

```
src/
├── lib/
│   └── cloudinary.ts          # Configuración del cliente Cloudinary
├── components/
│   ├── BreadCrumb/            # Navegación por migas de pan
│   ├── Button/                # Botón con variantes (primary, secondary, outline, ghost)
│   ├── Card/                  # Tarjeta reutilizable con soporte de skeleton loading
│   ├── Footer/                # Footer con links, servicios y redes sociales
│   ├── ImageContainer/        # Imagen optimizada con Cloudinary, overlay y lazy loading
│   ├── ImageGrid/             # Grilla responsive de imágenes con animaciones escalonadas
│   ├── Loading/               # Pantalla de carga inicial a pantalla completa
│   ├── Navbar/                # Navbar fija con menú hamburguesa y efecto glass
│   └── Tabs/                  # Pestañas con auto-rotación y accesibilidad (ARIA)
├── pages/
│   └── Home/
│       ├── Home.tsx
│       └── sections/
│           ├── Hero/          # Banner principal con CTA
│           ├── OurWork/       # Portfolio con 5 categorías en tabs
│           ├── Services/      # 3 categorías de servicios (Eventos, Sesiones, Estudio)
│           ├── AboutUs/       # Bio del fotógrafo con estadísticas
│           └── ConnectWithMe/ # Formulario de contacto e información
├── App.tsx                    # Composición raíz (Loading → Navbar → Home → Footer)
├── index.css                  # Reset CSS y design tokens globales
└── main.tsx                   # Punto de entrada de React
```

## Sistema de diseño

El proyecto utiliza un sistema de design tokens definido en `index.css` con variables CSS:

| Token             | Valor                        |
| ----------------- | ---------------------------- |
| Fuente base       | Inter (sans-serif)           |
| Fuente headings   | Playfair Display (serif)     |
| Color primario    | `#2a2a2a`                    |
| Fondo             | `#ffffff`                    |
| Fondo alternativo | `#f5f5f5`                    |
| Texto             | `#1a1a1a`                    |
| Texto muted       | `#666666`                    |
| Espaciado base    | 8px (escala de `xs` a `4xl`) |
| Navbar height     | 64px                         |
| Max width         | 1200px                       |

## Secciones

| Sección             | Descripción                                                                                |
| ------------------- | ------------------------------------------------------------------------------------------ |
| **Hero**            | Banner a pantalla completa con imagen de Cloudinary y botones CTA                          |
| **Our Work**        | Portfolio con tabs auto-rotativas (Bodas, Cumpleaños, Marca Personal, Quinces, Maternidad) |
| **Services**        | Grilla de tarjetas con tres categorías: Eventos, Sesiones y Estudio                        |
| **About Us**        | Layout dividido con foto, bio y estadísticas (500+ sesiones, 10 años, 200+ clientes)       |
| **Connect With Me** | Formulario de contacto con validación y datos de contacto / redes sociales                 |

## Componentes destacados

- **ImageContainer** — Renderiza imágenes desde Cloudinary con optimización automática (formato, calidad, crop inteligente), lazy loading con placeholder blur y overlay configurable.
- **Tabs** — Componente accesible con roles ARIA (`tablist`, `tab`, `tabpanel`), auto-rotación configurable que se pausa al hover.
- **ImageGrid** — Grilla CSS responsive (3 → 2 → 1 columna) con animaciones fade-in escalonadas y efecto hover de zoom.
- **Loading** — Overlay de carga con detección de `window.load`, animación de spinner y transición de salida suave (600ms).

## Scripts disponibles

| Comando           | Descripción                                        |
| ----------------- | -------------------------------------------------- |
| `npm run dev`     | Inicia el servidor de desarrollo con HMR           |
| `npm run build`   | Compila TypeScript y genera el build de producción |
| `npm run preview` | Sirve el build de producción localmente            |
| `npm run lint`    | Ejecuta ESLint sobre el proyecto                   |
