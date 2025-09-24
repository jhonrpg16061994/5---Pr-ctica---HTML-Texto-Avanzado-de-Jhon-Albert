const fs = require('fs');
const path = require('path');

describe('Ejercicio 13: Navegación entre páginas e imágenes', () => {
  const rootPath = path.join(__dirname, '../../');
  const docsPath = path.join(rootPath, 'docs');
  const ejercicio11Path = path.join(docsPath, 'ejercicio-11');
  const ejercicio13Path = path.join(docsPath, 'ejercicio-13');
  const imagenesPath = path.join(ejercicio13Path, 'imagenes');
  
  // Archivos del ejercicio-13
  const index13Path = path.join(ejercicio13Path, 'index.html');
  
  // Archivos del ejercicio-11
  const index11Path = path.join(ejercicio11Path, 'index.html');
  const materia11Path = path.join(ejercicio11Path, 'materia.html');
  
  test('La carpeta docs/ejercicio-13 debe existir', () => {
    expect(fs.existsSync(ejercicio13Path)).toBe(true);

    const stats = fs.statSync(ejercicio13Path);
    expect(stats.isDirectory()).toBe(true);
  });

  test('La carpeta docs/ejercicio-13/imagenes debe existir', () => {
    expect(fs.existsSync(imagenesPath)).toBe(true);

    const stats = fs.statSync(imagenesPath);
    expect(stats.isDirectory()).toBe(true);
  });

  test('La carpeta imagenes debe contener al menos 2 archivos de imagen', () => {
    expect(fs.existsSync(imagenesPath)).toBe(true);

    const files = fs.readdirSync(imagenesPath);
    const imageFiles = files.filter(file => 
      /\.(jpg|jpeg|png|gif|webp|svg)$/i.test(file)
    );
    
    expect(imageFiles.length).toBeGreaterThanOrEqual(2);
  });

  test('El archivo docs/ejercicio-13/index.html debe existir', () => {
    expect(fs.existsSync(index13Path)).toBe(true);

    const stats = fs.statSync(index13Path);
    expect(stats.isFile()).toBe(true);
  });

  test('Los archivos del ejercicio-11 deben existir', () => {
    expect(fs.existsSync(index11Path)).toBe(true);
    expect(fs.existsSync(materia11Path)).toBe(true);

    const statsIndex = fs.statSync(index11Path);
    const statsMateria = fs.statSync(materia11Path);
    expect(statsIndex.isFile()).toBe(true);
    expect(statsMateria.isFile()).toBe(true);
  });

  test('El archivo ejercicio-13/index.html debe contener estructura HTML5 básica', () => {
    expect(fs.existsSync(index13Path)).toBe(true);
    
    const content = fs.readFileSync(index13Path, 'utf8');
    
    expect(content).toMatch(/<!DOCTYPE html>/i);
    expect(content).toMatch(/<html[^>]*>/i);
    expect(content).toMatch(/<head>/i);
    expect(content).toMatch(/<body>/i);
    expect(content).toMatch(/<\/html>/i);
  });

  test('Todos los archivos HTML deben contener elemento de navegación (nav)', () => {
    expect(fs.existsSync(index13Path)).toBe(true);
    expect(fs.existsSync(index11Path)).toBe(true);
    expect(fs.existsSync(materia11Path)).toBe(true);
    
    const content13 = fs.readFileSync(index13Path, 'utf8');
    const content11Index = fs.readFileSync(index11Path, 'utf8');
    const content11Materia = fs.readFileSync(materia11Path, 'utf8');
    
    expect(content13).toMatch(/<nav>/i);
    expect(content11Index).toMatch(/<nav>/i);
    expect(content11Materia).toMatch(/<nav>/i);
    
    expect(content13).toMatch(/<\/nav>/i);
    expect(content11Index).toMatch(/<\/nav>/i);
    expect(content11Materia).toMatch(/<\/nav>/i);
  });

  test('El ejercicio-13/index.html debe enlazar a archivos del ejercicio-11', () => {
    expect(fs.existsSync(index13Path)).toBe(true);
    
    const content = fs.readFileSync(index13Path, 'utf8');
    
    // Debe enlazar a ejercicio-11/index.html y ejercicio-11/materia.html
    expect(content).toMatch(/<a[^>]*href=["|'][^"']*ejercicio-11[\/\\]index\.html["|'][^>]*>/i);
    expect(content).toMatch(/<a[^>]*href=["|'][^"']*ejercicio-11[\/\\]materia\.html["|'][^>]*>/i);
  });

  test('El ejercicio-11/index.html debe enlazar a ejercicio-13 y materia.html', () => {
    expect(fs.existsSync(index11Path)).toBe(true);
    
    const content = fs.readFileSync(index11Path, 'utf8');
    
    // Debe enlazar a ejercicio-13/index.html y ejercicio-11/materia.html
    expect(content).toMatch(/<a[^>]*href=["|'][^"']*ejercicio-13[\/\\]index\.html["|'][^>]*>/i);
    expect(content).toMatch(/<a[^>]*href=["|'][^"']*materia\.html["|'][^>]*>/i);
  });

  test('El ejercicio-11/materia.html debe enlazar a todas las páginas', () => {
    expect(fs.existsSync(materia11Path)).toBe(true);
    
    const content = fs.readFileSync(materia11Path, 'utf8');
    
    // Debe enlazar a ejercicio-11/index.html y ejercicio-13/index.html
    expect(content).toMatch(/<a[^>]*href=["|'][^"']*index\.html["|'][^>]*>/i);
    expect(content).toMatch(/<a[^>]*href=["|'][^"']*ejercicio-13[\/\\]index\.html["|'][^>]*>/i);
  });

  test('Todos los archivos deben contener al menos una imagen', () => {
    expect(fs.existsSync(index13Path)).toBe(true);
    expect(fs.existsSync(index11Path)).toBe(true);
    expect(fs.existsSync(materia11Path)).toBe(true);
    
    const content13 = fs.readFileSync(index13Path, 'utf8');
    const content11Index = fs.readFileSync(index11Path, 'utf8');
    const content11Materia = fs.readFileSync(materia11Path, 'utf8');
    
    // Verificar que todos tienen imágenes con alt
    expect(content13).toMatch(/<img[^>]*src[^>]*>/i);
    expect(content13).toMatch(/<img[^>]*alt[^>]*>/i);
    
    expect(content11Index).toMatch(/<img[^>]*src[^>]*>/i);
    expect(content11Index).toMatch(/<img[^>]*alt[^>]*>/i);
    
    expect(content11Materia).toMatch(/<img[^>]*src[^>]*>/i);
    expect(content11Materia).toMatch(/<img[^>]*alt[^>]*>/i);
  });

  test('Las imágenes deben referenciar la carpeta ejercicio-13/imagenes', () => {
    expect(fs.existsSync(index13Path)).toBe(true);
    expect(fs.existsSync(index11Path)).toBe(true);
    expect(fs.existsSync(materia11Path)).toBe(true);
    
    const content13 = fs.readFileSync(index13Path, 'utf8');
    const content11Index = fs.readFileSync(index11Path, 'utf8');
    const content11Materia = fs.readFileSync(materia11Path, 'utf8');
    
    const combinedContent = content13 + content11Index + content11Materia;
    
    // Las imágenes deben referenciar la carpeta imagenes (puede ser relativa)
    expect(combinedContent).toMatch(/src=["|'][^"']*imagenes[\/\\][^"']+["|']/i);
  });

  test('Debe existir navegación multidireccional completa', () => {
    expect(fs.existsSync(index13Path)).toBe(true);
    expect(fs.existsSync(index11Path)).toBe(true);
    expect(fs.existsSync(materia11Path)).toBe(true);
    
    const content13 = fs.readFileSync(index13Path, 'utf8');
    const content11Index = fs.readFileSync(index11Path, 'utf8');
    const content11Materia = fs.readFileSync(materia11Path, 'utf8');
    
    // Verificar que existe navegación entre todos los archivos
    // ejercicio-13/index.html -> ejercicio-11
    expect(content13).toMatch(/href=["|'][^"']*ejercicio-11[\/\\]/i);
    
    // ejercicio-11/index.html -> ejercicio-13 y materia
    expect(content11Index).toMatch(/href=["|'][^"']*ejercicio-13[\/\\]/i);
    expect(content11Index).toMatch(/href=["|'][^"']*materia\.html/i);
    
    // ejercicio-11/materia.html -> index.html y ejercicio-13
    expect(content11Materia).toMatch(/href=["|'][^"']*index\.html/i);
    expect(content11Materia).toMatch(/href=["|'][^"']*ejercicio-13[\/\\]/i);
  });
  
});
