const fs = require('fs');
const path = require('path');

describe('Ejercicio 12: Marcado de código informático en HTML', () => {
  const rootPath = path.join(__dirname, '../../');
  const docsPath = path.join(rootPath, 'docs');
  const ejercicio12Path = path.join(docsPath, 'ejercicio-11');
  const materiaPath = path.join(ejercicio12Path, 'materia.html');
  
  test('La carpeta docs/ejercicio-11 debe existir', () => {
    expect(fs.existsSync(ejercicio12Path)).toBe(true);

    const stats = fs.statSync(ejercicio12Path);
    expect(stats.isDirectory()).toBe(true);
  });

  test('El archivo docs/ejercicio-11/materia.html debe existir', () => {
    expect(fs.existsSync(materiaPath)).toBe(true);

    const stats = fs.statSync(materiaPath);
    expect(stats.isFile()).toBe(true);
  });

  test('El archivo materia.html debe contener estructura HTML5 básica', () => {
    expect(fs.existsSync(materiaPath)).toBe(true);
    
    const content = fs.readFileSync(materiaPath, 'utf8');
    
    expect(content).toMatch(/<!DOCTYPE html>/i);
    expect(content).toMatch(/<html[^>]*>/i);
    expect(content).toMatch(/<head>/i);
    expect(content).toMatch(/<body>/i);
    expect(content).toMatch(/<\/html>/i);
  });

  test('El archivo materia.html debe contener código en línea (code)', () => {
    expect(fs.existsSync(materiaPath)).toBe(true);
    
    const content = fs.readFileSync(materiaPath, 'utf8');
    
    expect(content).toMatch(/<code>/i);
    expect(content).toMatch(/<\/code>/i);
  });

  test('El archivo materia.html debe contener bloques de código preservando espacios (pre)', () => {
    expect(fs.existsSync(materiaPath)).toBe(true);
    
    const content = fs.readFileSync(materiaPath, 'utf8');
    
    expect(content).toMatch(/<pre>/i);
    expect(content).toMatch(/<\/pre>/i);
  });

  test('El archivo materia.html debe contener variables (var)', () => {
    expect(fs.existsSync(materiaPath)).toBe(true);
    
    const content = fs.readFileSync(materiaPath, 'utf8');
    
    expect(content).toMatch(/<var>/i);
    expect(content).toMatch(/<\/var>/i);
  });

  test('El archivo materia.html debe contener entradas de teclado (kbd)', () => {
    expect(fs.existsSync(materiaPath)).toBe(true);
    
    const content = fs.readFileSync(materiaPath, 'utf8');
    
    expect(content).toMatch(/<kbd>/i);
    expect(content).toMatch(/<\/kbd>/i);
  });

  test('El archivo materia.html debe contener salida de programa (samp)', () => {
    expect(fs.existsSync(materiaPath)).toBe(true);
    
    const content = fs.readFileSync(materiaPath, 'utf8');
    
    expect(content).toMatch(/<samp>/i);
    expect(content).toMatch(/<\/samp>/i);
  });

  test('El archivo materia.html debe contener contenido sobre la historia del lenguaje C', () => {
    expect(fs.existsSync(materiaPath)).toBe(true);
    
    const content = fs.readFileSync(materiaPath, 'utf8');
    
    // Verificar que contiene información relevante sobre C
    expect(content).toMatch(/c\s*(programming\s*)?language|lenguaje\s*c/i);
    expect(content).toMatch(/dennis\s*ritchie|bell\s*labs/i);
  });

  test('El archivo materia.html debe contener ejemplos de código C', () => {
    expect(fs.existsSync(materiaPath)).toBe(true);
    
    const content = fs.readFileSync(materiaPath, 'utf8');
    
    // Verificar que contiene elementos típicos del lenguaje C
    expect(content).toMatch(/#include|main\(\)|printf|stdio\.h/i);
  });

  test('El archivo materia.html debe combinar pre y code para bloques de código', () => {
    expect(fs.existsSync(materiaPath)).toBe(true);
    
    const content = fs.readFileSync(materiaPath, 'utf8');
    
    // Verificar que usa la combinación recomendada <pre><code>
    expect(content).toMatch(/<pre[^>]*>[\s\S]*<code>/i);
  });
  
});
