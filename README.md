# MathQuest Adventure

MathQuest Adventure es una web app educativa en HTML, CSS y JavaScript diseñada para niños.

## Qué contiene este proyecto

- `index.html` — la versión principal del juego que se puede publicar directamente en GitHub Pages.
- `mathquest.html`, `mathquest_adventure_gamified.html`, `MathQuest_Adventure_v2.html` — versiones adicionales del juego o versiones anteriores.
- `README.md` — esta guía de publicación.
- `.gitignore` — exclusiones útiles para Git.
- `minify.js` — script opcional para crear una versión minificada de `index.html`.

## Preparar para GitHub Pages

GitHub Pages publica tu página web desde el archivo `index.html` en la raíz del repositorio.

### 1. Crear un repositorio en GitHub

1. Entra en https://github.com y crea una cuenta si todavía no tienes una.
2. Haz clic en `New repository`.
3. Ponle un nombre fácil, por ejemplo `mathquest-adventure`.
4. Selecciona `Public`.
5. No marques `Add a README` si ya tienes este archivo local.
6. Crea el repositorio.

### 2. Subir los archivos al repositorio

Como aún no hay Git instalado en este entorno, hazlo en tu ordenador cuando tengas Git:

```bash
cd "MathQuest Adventure"
git init
git add .
git commit -m "MathQuest Adventure lista para GitHub Pages"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/NOMBRE_REPO.git
git push -u origin main
```

### 3. Activar GitHub Pages

1. Ve al repositorio en GitHub.
2. Abre `Settings`.
3. Busca `Pages` en el menú lateral.
4. Selecciona `Branch: main` y `Folder: / (root)`.
5. Guarda.
6. GitHub mostrará una URL donde tu juego estará activo en unos minutos.

## Cómo revisar que no hay errores

### 1. Prueba local

Abre `index.html` en el navegador.

### 2. Consola del navegador

- Presiona `F12` o `Ctrl+Shift+I`.
- Ve a la pestaña `Console`.
- Asegúrate de que no haya errores rojos.

### 3. Comprueba la funcionalidad

- Escribe un nombre.
- Elige edad y avatar.
- Elige modo `Series` o `Conteo`.
- Juega y comprueba que el botón `✔ Comprobar` funciona.
- Al terminar, vuelve a jugar y revisa que la puntuación máxima se guarde.

## Optimizar CSS y JS

Este proyecto usa CSS y JavaScript embebidos dentro de `index.html`.

### Usar `minify.js`

Si tienes Node.js instalado, puedes generar una versión minificada con:

```bash
node minify.js
```

Esto creará `index.min.html` con CSS y JS más compactos.

## Sugerencias finales

- `index.html` es el archivo que GitHub Pages servirá como página de inicio.
- Si quieres usar la versión optimizada, renombra `index.min.html` a `index.html` antes de publicar.
- Si necesitas, puedo ayudarte después a configurar el repositorio en GitHub paso a paso.
