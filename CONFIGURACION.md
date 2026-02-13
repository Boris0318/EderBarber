# 📝 Guía de Configuración Rápida

Este archivo te muestra cómo cambiar toda la información del negocio en un solo lugar.

## 🎯 Configuración Central

**Archivo:** `js/main.js` (líneas 6-35)

Busca el objeto `BARBER_CONFIG` al inicio del archivo JavaScript:

```javascript
const BARBER_CONFIG = {
    // Nombre del Negocio
    businessName: 'Barbers Tlalpan',
    
    // Información de Contacto
    phone: '(555) 123-4567',
    phoneLink: '+15551234567',  // Sin formato, solo números con código de país
    email: 'info@ederbarbershop.com',
    address: 'Calle Principal 123',
    addressLine2: 'Zona Centro',
    addressLine3: 'Ciudad, Estado 12345',
    
    // Enlaces de Redes Sociales
    facebook: '#',
    instagram: '#',
    twitter: '#',
    tiktok: '#',
    
    // Horarios de Atención
    hoursWeekday: '9:00 AM - 8:00 PM',
    hoursSaturday: '9:00 AM - 7:00 PM',
    hoursSunday: '10:00 AM - 5:00 PM',
    
    // SEO
    metaDescription: 'Cortes de cabello profesionales, arreglo de barba y servicios de estilismo. ¡Reserva tu cita hoy!',
    pageTitle: 'Servicios Profesionales de Barbería'
};
```

## 🔧 Cómo Usar

### 1. Cambiar el Nombre del Negocio

Simplemente cambia esta línea:

```javascript
businessName: 'Tu Nombre Aquí',
```

Esto actualizará automáticamente:
- ✅ Logo en el navbar
- ✅ Título del hero
- ✅ Sección "Bienvenido a..."
- ✅ Nombre en el footer
- ✅ Copyright en el footer
- ✅ Título de la página del navegador
- ✅ Meta descripción
- ✅ Mensaje de la consola

### 2. Actualizar Teléfono

```javascript
phone: '(555) 123-4567',        // Formato para mostrar
phoneLink: '+15551234567',       // Para enlaces tel: (sin espacios ni paréntesis)
```

Esto actualizará:
- ✅ Todos los enlaces de teléfono
- ✅ Teléfono en contacto
- ✅ Teléfono en el footer

### 3. Actualizar Email

```javascript
email: 'tuCorreo@tudominio.com',
```

Esto actualizará:
- ✅ Todos los enlaces de email
- ✅ Email en contacto
- ✅ Email en el footer

### 4. Actualizar Dirección

```javascript
address: 'Tu Calle 456',
addressLine2: 'Tu Colonia',
addressLine3: 'Tu Ciudad, Estado CP',
```

Esto actualizará:
- ✅ Dirección en la sección de contacto
- ✅ Referencia en el footer

### 5. Actualizar Redes Sociales

Reemplaza `#` con tus URLs reales:

```javascript
facebook: 'https://facebook.com/tupagina',
instagram: 'https://instagram.com/tuperfil',
twitter: 'https://twitter.com/tuperfil',
tiktok: 'https://tiktok.com/@tuperfil',
```

Esto actualizará:
- ✅ Todos los enlaces de redes sociales en el sitio

### 6. Actualizar Horarios

```javascript
hoursWeekday: '10:00 AM - 9:00 PM',
hoursSaturday: '10:00 AM - 8:00 PM',
hoursSunday: '11:00 AM - 6:00 PM',
```

Esto actualizará:
- ✅ Horarios en la sección de reservas

### 7. Actualizar SEO

```javascript
metaDescription: 'Tu descripción personalizada aquí',
pageTitle: 'Tu Subtítulo Personalizado',
```

Esto actualizará:
- ✅ Meta descripción de la página
- ✅ Título completo del navegador (será: "Tu Negocio - Tu Subtítulo")

## 💡 Ejemplo Completo

Aquí hay un ejemplo con información personalizada:

```javascript
const BARBER_CONFIG = {
    // Nombre del Negocio
    businessName: 'Kings Barber Shop',
    
    // Información de Contacto
    phone: '(555) 987-6543',
    phoneLink: '+15559876543',
    email: 'contacto@kingsbarbershop.com',
    address: 'Avenida Revolución 789',
    addressLine2: 'Col. Centro',
    addressLine3: 'CDMX, México 06000',
    
    // Enlaces de Redes Sociales
    facebook: 'https://facebook.com/kingsbarbershop',
    instagram: 'https://instagram.com/kingsbarbershop',
    twitter: 'https://twitter.com/kingsbarbers',
    tiktok: 'https://tiktok.com/@kingsbarbershop',
    
    // Horarios de Atención
    hoursWeekday: '10:00 AM - 9:00 PM',
    hoursSaturday: '10:00 AM - 8:00 PM',
    hoursSunday: '11:00 AM - 6:00 PM',
    
    // SEO
    metaDescription: 'La mejor barbería en CDMX. Cortes modernos, afeitados clásicos y servicio de primera. ¡Agenda tu cita!',
    pageTitle: 'Barbería Premium en CDMX'
};
```

## 📋 Pasos para Actualizar

1. **Abre** el archivo `js/main.js`
2. **Encuentra** el objeto `BARBER_CONFIG` al principio del archivo
3. **Cambia** los valores que necesites
4. **Guarda** el archivo
5. **Recarga** tu navegador - ¡Todos los cambios se aplicarán automáticamente!

## ⚠️ Notas Importantes

- **No cambies las claves** (businessName, phone, email, etc.), solo cambia los valores después de los dos puntos
- **Mantén las comillas** alrededor de los valores de texto
- **phoneLink debe tener el formato:** `+` + código de país + número (sin espacios, guiones o paréntesis)
- **Las URLs de redes sociales** deben incluir `https://` al inicio
- Si no tienes una red social, déjala como `'#'`

## 🎨 Personalización Adicional

### Cambiar Servicios y Precios

Los servicios aún se editan directamente en el HTML (`index.html`), en la sección con `id="services"`.

### Cambiar Colores

Los colores se editan en `css/styles.css`, en la sección `:root` al inicio del archivo.

### Agregar Imágenes

Las imágenes se agregan creando una carpeta `images/` y actualizando las referencias en el HTML.

## ✅ Checklist de Actualización

Después de cambiar `BARBER_CONFIG`:

- [ ] El nombre aparece correctamente en el navbar
- [ ] El nombre aparece en el hero
- [ ] El nombre aparece en "Bienvenido a..."
- [ ] El nombre aparece en el footer
- [ ] El teléfono es clickeable en móvil
- [ ] Los emails abren el cliente de correo
- [ ] Las redes sociales llevan a las páginas correctas
- [ ] Los horarios muestran la información correcta
- [ ] El título del navegador es correcto

## 🆘 Solución de Problemas

**Los cambios no aparecen:**
1. Asegúrate de haber guardado el archivo `js/main.js`
2. Recarga la página con Ctrl+F5 (Windows) o Cmd+Shift+R (Mac) para limpiar la caché
3. Verifica que no haya errores en la consola del navegador (F12)

**El teléfono no es clickeable:**
- Asegúrate de que `phoneLink` tenga el formato correcto: `'+1234567890'` (con + y solo números)

**Las redes sociales no funcionan:**
- Verifica que las URLs incluyan `https://` al inicio

## 🎉 ¡Listo!

Con esta configuración centralizada, mantener tu sitio web actualizado es súper fácil. Solo cambia los valores en un lugar y todo se actualiza automáticamente.

---

**Diseñado por Sirob Labs**

