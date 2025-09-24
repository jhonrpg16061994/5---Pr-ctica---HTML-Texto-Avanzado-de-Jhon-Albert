# Ejercicio 12: Marcado de código informático en HTML

## Objetivo
Crear un documento HTML que demuestre el uso de elementos específicos para marcar código informático y contenido técnico, incluyendo la historia del lenguaje C con ejemplos de código.

## Instrucciones

### Parte 1: Crear estructura de carpetas
1. Dentro de la carpeta `docs`, utilizar la subcarpeta `ejercicio-11`, del ejercicio anterior.

### Parte 2: Crear página HTML
2. Dentro de la carpeta `ejercicio-11`, crear un archivo llamado `materia.html`
3. El archivo debe contener una estructura HTML5 básica con los siguientes elementos:

   - **Varios párrafos** con la historia del lenguaje C
   - **Fragmentos de código (`<code>`)**: Para marcar fragmentos genéricos de código informático
   - **Bloques de código (`<pre>`)**: Para respetar los espacios en blanco (en general, en los bloques de código) — si utilizas la sangría o diversos espacios en blanco consecutivos dentro de un texto, los navegadores los ignorarán y no se mostrarán en la página. Sin embargo, si delimitas el texto con las etiquetas `<pre></pre>`, los espacios en blanco se representarán de forma idéntica a como se ven en tu editor de texto
   - **Variables (`<var>`)**: Para marcar específicamente nombres de variables
   - **Entradas de teclado (`<kbd>`)**: Para marcar entradas de teclado (y de otro tipo) en el ordenador
   - **Salida de programa (`<samp>`)**: Para marcar la salida de un programa de ordenador

## Estructura final esperada

```
├── docs/
│   └── ejercicio-11/
│       └── index.html
│       └── materia.html
```

## Contenido requerido

El archivo `materia.html` debe incluir:

### 1. Estructura HTML5 básica
### 2. Historia del Lenguaje C (varios párrafos)
Incluir información sobre:
- Origen y creación del lenguaje C.
- Dennis Ritchie y los laboratorios Bell.
- Evolución y versiones del lenguaje.
- Importancia e influencia en otros lenguajes.

### 3. Debe contener elementos para código informático

1. Múltiples ejemplos de código C usando `<pre>` y `<code>`.
2. Referencias a variables usando `<var>`.
3. Comandos de compilación usando `<kbd>`.
4. Salidas esperadas usando `<samp>`.
5. Historia completa del lenguaje C en varios párrafos.

## Verificación

Una vez que hayas completado el ejercicio ejecuta: 
```bash
npm test ejercicio/11
```
Si pasa todos los test, haz commit de tus cambios y súbelos a tu repositorio de GitHub.

¡Buena suerte y diviértete aprendiendo sobre el marcado de código informático!
