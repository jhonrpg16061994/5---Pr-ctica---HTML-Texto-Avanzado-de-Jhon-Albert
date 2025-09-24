# Ejercicio 13: Navegación entre páginas e imágenes

## Objetivo
Crear un sistema de navegación entre páginas HTML utilizando hipervínculos y elementos de navegación, además de incorporar imágenes en los documentos.

## Instrucciones

### Parte 1: Crear estructura de carpetas
1. Dentro de la carpeta `docs`, crear la subcarpeta `ejercicio-13`
2. Dentro de `ejercicio-13`, crear la subcarpeta `imagenes`

### Parte 2: Preparar imágenes
3. Colocar al menos 2 imágenes diferentes en la carpeta `imagenes`.
4. Las imágenes pueden ser de formato JPG, PNG, GIF o WebP.
5. Recomendación: usar imágenes relacionadas con programación o tecnología.

### Parte 3: Crear páginas HTML con navegación
6. Dentro de la carpeta `ejercicio-13`, crear un archivo:
   - `index.html` - Página principal.

### Parte 4: Implementar navegación y contenido

#### En `index.html` del ejercicio-13:
- Estructura HTML5 completa.
- Elemento `<nav>` con enlaces a los archivos que están ubicados en `ejercicio-11` a ambas páginas.
- Al menos una imagen de la carpeta `ejercicio-13/imagenes`.
- Contenido de bienvenida o introducción.
- Enlaces funcionales a `ejercicio-11/materia.html`.
- Enlaces funcionales a `ejercicio-11/index.html`.

#### En `index.html` del ejercicio-11:
- Estructura HTML5 completa.
- Elemento `<nav>` con enlaces a los archivos que están ubicados en `ejercicio-11` y  `ejercicio-13` a ambas páginas.
- Al menos una imagen de la carpeta `ejercicio-13/imagenes`.
- Contenido de bienvenida o introducción.
- Enlaces funcionales a `ejercicio-11/materia.html`.
- Enlaces funcionales a `ejercicio-13/index.html`.

#### En `materia.html` del ejercicio-11:
- Estructura HTML5 completa.  
- Elemento `<nav>` con enlaces a todas las páginas que están ubicadas en `ejercicio-11` y `ejercicio-13`.
- Al menos una imagen diferente de la carpeta `ejercicio-13/imagenes`
- Contenido relacionado con programación o tecnología
- Enlaces funcionales a `index.html` de `ejercicio-11`.
- Enlaces funcionales a `index.html` de `ejercicio-13`.

## Estructura final esperada

```
├── docs/
│   └── ejercicio-11/
│       ├── index.html
│       ├── materia.html
│   └── ejercicio-13/
│       ├── index.html
│       └── imagenes/
│           ├── imagen1.jpg (o similar)
│           └── imagen2.png (o similar)
```

## Elementos requeridos

 1. Navegación (`<nav>`)
 2. Imágenes (`<img>`)
 3. Hipervínculos (`<a>`)

## Requisitos específicos

1. **Todos los archivos HTML deben tener**:
   - Estructura HTML5 válida.
   - Elemento `<nav>` con enlaces funcionales.
   - Al menos una imagen con atributo `alt`.
   - Enlaces multidireccionales entre páginas.

2. **Navegación funcional**:
   - Los enlaces deben permitir navegar entre `ejercicio-11/index.html`, `ejercicio-11/materia.html` y `ejercicio-13/index.html`.
   - Los enlaces deben ser relativos a la ubicación de los archivos.
   - Asegurarse de que los enlaces funcionen correctamente al hacer clic.
   - Usar rutas relativas correctas.

3. **Imágenes**:
   - Al menos 2 imágenes diferentes en la carpeta `imagenes`.
   - Una imagen diferente en cada página HTML.
   - Atributos `alt` descriptivos en todas las imágenes.

4. **Contenido**:
   - `index.html`: página de bienvenida o introducción.
   - `materia.html`: contenido educativo sobre programación/tecnología.

## Verificación

Una vez que hayas completado el ejercicio ejecuta: 
```bash
npm test ejercicio/13
```
Si pasa todos los test, haz commit de tus cambios y súbelos a tu repositorio de GitHub.

## Consejos

- Usa imágenes de tamaño apropiado para web (no muy grandes).
- Asegúrate de que las rutas de las imágenes sean correctas.
- Prueba todos los enlaces navegando entre las páginas.
- Usa atributos `alt` descriptivos para accesibilidad.

¡Buena suerte creando tu sistema de navegación con imágenes!
