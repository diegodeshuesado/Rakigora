# Rakigora Systems — sitio web

Sitio estático (HTML, CSS y un poco de JS), sin dependencias ni paso de compilación.

## Estructura
- `index.html`: contenido de toda la página
- `styles.css`: estilos (colores en las variables `:root` al inicio)
- `script.js`: menú móvil y formulario; aquí se ponen el WhatsApp y el correo
- `assets/`: logo y favicon

## Pendientes del cliente
- Logo definitivo (hoy es la "R" recortada de `rakigora (1).png`)
- WhatsApp, correo y tiempo de respuesta (`[Número]`, `[Correo]`, `[XX]` en `index.html`; `CONTACT` en `script.js`)
- Fotos y datos de los 4 proyectos
- Confirmar el alcance de "Interfaces" y "Fabricación"

## Cómo agregar la foto de un proyecto
Guarda la imagen en `assets/proyectos/` y, en `index.html`, cambia el bloque `project-media` de esa tarjeta por:

```html
<div class="project-media"><img src="assets/proyectos/nombre.jpg" alt="Descripción de la foto"></div>
```

## Publicación
Se publica con GitHub Pages desde la rama `main`, carpeta raíz.
