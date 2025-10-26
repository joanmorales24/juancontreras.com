# Landing de Juan Eduardo Contreras

Sitio estático listo para desplegar en Vercel.

## Estructura

- `index.html`: página principal
- `images/`: activos estáticos (imágenes)
- `vercel.json`: configuración del proyecto en Vercel

## Compilar Tailwind (CSS local)

Requisitos: Node.js 18+

1. Instala dependencias
   
	```zsh
	npm install
	```

2. Genera el CSS minificado

	```zsh
	npm run build
	```

Esto produce `styles/main.css` que es el archivo enlazado desde `index.html` y `404.html`.

Para desarrollo en caliente:

```zsh
npm run watch
```

## Despliegue en Vercel (sin build)

Este proyecto es 100% estático. Vercel lo detecta automáticamente y lo sirve desde la raíz del repositorio.

### Opción A: Importar desde GitHub
1. Inicializa un repositorio y súbelo a GitHub.
2. En el Dashboard de Vercel, elige "Add New Project" → "Import Git Repository".
3. Selecciona este repo.
4. Framework Preset: "Other" (o Auto) · Build Command: vacío · Output Directory: vacío (raíz).
5. Deploy.

### Opción B: Subir carpeta desde el Dashboard
1. En Vercel, crea un nuevo proyecto y elige "Importar" → "Upload".
2. Arrastra la carpeta del proyecto (que contiene `index.html`, `images/` y `vercel.json`).
3. Deploy.

### Rutas y caché
- `vercel.json` habilita `cleanUrls` (URLs sin `.html`) y cachea agresivamente `/images/*` con `immutable`.

## Notas
- Esta landing usa Tailwind compilado localmente (`styles/main.css`). Google Fonts se cargan vía `<link>`; si deseas auto-hospedarlas, lo puedo preparar también.
- ¿Quieres dominio personalizado? Conéctalo desde el panel de Vercel tras el primer deploy.
