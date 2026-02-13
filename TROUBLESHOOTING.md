# 🚀 Deployment Troubleshooting Guide

## ✅ Pre-Deploy Checklist

Before pushing to GitHub and deploying to Netlify:

### 1. Check Your Configuration
Open `js/main.js` and verify the `BARBER_CONFIG` object (lines 9-35):

```javascript
const BARBER_CONFIG = {
    businessName: 'Tu Nombre Aquí',  // ← VERIFICA ESTO
    phone: '(555) 123-4567',
    // ... resto de la configuración
};
```

### 2. Test Locally First
1. Open `index.html` in your browser
2. Open the browser console (F12 or Right-click → Inspect → Console)
3. Look for these messages:
   ```
   Initializing dynamic content with: Tu Nombre Aquí
   Dynamic content initialized successfully
   👋 ¡Bienvenido a Tu Nombre Aquí!
   Sitio web diseñado con ❤️ por Sirob Labs
   ```

4. If you see errors, they'll appear in red in the console

### 3. Verify Content Appears
Check that these elements show your business name:
- [ ] Logo en el navbar (esquina superior izquierda)
- [ ] Título grande en la sección hero
- [ ] "Bienvenido a [Tu Nombre]" en la sección Nosotros
- [ ] Footer (parte inferior)
- [ ] Pestaña del navegador (título)

## 🐛 Common Issues on Netlify

### Issue 1: JavaScript No Se Carga

**Síntomas:** El sitio muestra "Barbería" en vez de tu nombre real

**Causas:**
- Archivo `js/main.js` no se subió a GitHub
- Ruta incorrecta al archivo JavaScript
- Error de sintaxis en JavaScript

**Solución:**
1. Verifica que `js/main.js` existe en tu repositorio de GitHub
2. Abre la consola del navegador en tu sitio de Netlify
3. Busca errores en rojo
4. Si ves "Failed to load resource: js/main.js", el archivo no se subió

**Comandos para verificar:**
```bash
# Verifica que el archivo existe
ls js/main.js

# Verifica que está en Git
git status

# Si no está agregado, agrégalo:
git add js/main.js
git commit -m "Add JavaScript configuration"
git push
```

### Issue 2: Archivo .gitignore Bloqueando Archivos

**Síntomas:** Archivos no aparecen en GitHub aunque los agregaste

**Solución:**
Verifica tu `.gitignore` y asegúrate de que NO incluya:
```
# NO debe tener estas líneas:
js/
*.js
main.js
```

Si tiene alguna de estas, elimínalas y vuelve a agregar el archivo:
```bash
git rm --cached js/main.js
git add js/main.js -f
git commit -m "Force add JavaScript file"
git push
```

### Issue 3: Caché de Netlify

**Síntomas:** Los cambios no aparecen después de desplegar

**Solución:**
1. En Netlify, ve a tu sitio
2. Click en "Deploys"
3. Click en "Trigger deploy" → "Clear cache and deploy site"
4. Espera a que se complete el despliegue
5. Abre tu sitio en modo incógnito (Ctrl+Shift+N o Cmd+Shift+N)

### Issue 4: Error de Sintaxis en JavaScript

**Síntomas:** Consola muestra errores, nada funciona

**Solución:**
1. Abre `js/main.js`
2. Verifica que el objeto `BARBER_CONFIG` esté correcto:
   - Todas las líneas (excepto la última) terminan en coma
   - Las comillas están cerradas correctamente
   - Los dos puntos están en su lugar

**Ejemplo correcto:**
```javascript
const BARBER_CONFIG = {
    businessName: 'Mi Barbería',      // ← coma aquí
    phone: '(555) 123-4567',          // ← coma aquí
    email: 'info@example.com'         // ← NO coma en la última línea
};
```

## 🔍 Cómo Depurar en Netlify

### Paso 1: Abrir la Consola del Navegador
1. Ve a tu sitio desplegado en Netlify
2. Presiona F12 (o Right-click → Inspect)
3. Click en la pestaña "Console"

### Paso 2: Buscar Mensajes
Deberías ver:
```
Initializing dynamic content with: [Tu Nombre]
Dynamic content initialized successfully
```

### Paso 3: Si No Ves Nada
Escribe en la consola:
```javascript
BARBER_CONFIG
```
Y presiona Enter.

**Si obtienes:** Un objeto con tu configuración → JavaScript se cargó correctamente
**Si obtienes:** "BARBER_CONFIG is not defined" → JavaScript no se cargó

## 📝 Verificación de Archivos

Antes de desplegar, verifica que estos archivos existen:

```bash
# En tu terminal, ejecuta:
ls -la
```

Debes ver:
```
index.html          ✓
css/
  styles.css        ✓
js/
  main.js           ✓ ← IMPORTANTE
netlify.toml        ✓
_redirects          ✓
```

## 🚀 Proceso de Deploy Correcto

### Para GitHub + Netlify:

```bash
# 1. Asegúrate de que todos los archivos están guardados
# 2. Agrega los cambios
git add .

# 3. Verifica qué se va a subir
git status

# 4. Debes ver js/main.js en la lista
# Si NO lo ves, algo está mal

# 5. Commit
git commit -m "Update barber shop configuration"

# 6. Push
git push origin main
```

### En Netlify:
1. El despliegue debería iniciar automáticamente
2. Ve a "Deploys" en tu sitio de Netlify
3. Espera a que el status sea "Published"
4. Click en el enlace para ver tu sitio
5. Abre la consola del navegador para verificar

## 💡 Prueba Rápida

Después de desplegar, haz esta prueba rápida:

1. Abre tu sitio de Netlify
2. Presiona F12 → Console
3. Escribe:
   ```javascript
   document.querySelector('.business-name').textContent
   ```
4. Presiona Enter
5. Debería mostrar tu nombre de negocio

Si muestra "Barbería", el JavaScript no se ejecutó correctamente.

## 📞 Verificación de Elementos Específicos

Usa estos comandos en la consola del navegador para verificar:

```javascript
// Verificar nombre del negocio
console.log('Business Name:', BARBER_CONFIG.businessName);

// Verificar todos los elementos con el nombre
document.querySelectorAll('.business-name').forEach(el => {
    console.log('Element:', el, 'Text:', el.textContent);
});

// Verificar teléfono
console.log('Phone:', BARBER_CONFIG.phone);

// Verificar email
console.log('Email:', BARBER_CONFIG.email);
```

## ✅ Señales de que Todo Está Bien

Cuando funciona correctamente, verás:
- ✅ Tu nombre de negocio en el navbar
- ✅ Tu nombre en el hero (título grande)
- ✅ Tu nombre en "Bienvenido a..."
- ✅ Tu nombre en el footer
- ✅ Título del navegador correcto
- ✅ Consola sin errores (o solo warnings amarillos, no errores rojos)

## 🆘 Todavía No Funciona?

### Opción 1: Forzar Re-deploy
```bash
# Haz un cambio pequeño
git commit --allow-empty -m "Force redeploy"
git push
```

### Opción 2: Deploy Manual en Netlify
1. En tu computadora, crea un archivo ZIP con todo el contenido
2. En Netlify → Sites → Deploys
3. Arrastra el archivo ZIP (o la carpeta completa)
4. Espera a que se despliegue

### Opción 3: Verificar Netlify Build Log
1. En Netlify → Deploys → Click en el deploy más reciente
2. Mira el "Deploy log"
3. Busca errores o advertencias
4. Si ves algo como "File not found: js/main.js", ese es el problema

## 📧 Información para Soporte

Si necesitas ayuda, ten lista esta información:
- URL de tu sitio en Netlify
- Contenido de tu `js/main.js` (primeras 40 líneas)
- Errores que ves en la consola del navegador
- Si funciona localmente (Sí/No)
- Screenshots de los errores

---

**Diseñado por Sirob Labs**

