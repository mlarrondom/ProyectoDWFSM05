# 🌍 PROYECTO MÓDULO 5: Explorador de Países – React + API Rest Countries

## ÍNDICE
1. Introducción  
2. Funcionalidades principales  
3. Arquitectura del proyecto  
4. Uso de Hooks y Custom Hooks  
5. Rutas con React Router  
6. Manejo de errores con Error Boundaries  
7. Interfaz con Bootstrap  
8. API utilizada  
9. Instalación y uso (local)  
10. Despliegue en Netlify  
11. Comentarios adicionales  

---

## 1. Introducción

Este proyecto fue desarrollado en el marco del **Bootcamp Desarrollo Web Full Stack**.  
Corresponde al **Módulo 5**, donde se aplica el desarrollo frontend moderno usando **React**, junto con:

- Componentes funcionales  
- Hooks (`useState`, `useEffect`)  
- Custom Hooks para consumo de APIs  
- React Router para navegación SPA  
- Bootstrap como framework CSS  
- Error Boundaries para manejar errores de renderizado  
- Renderizado dinámico y consumo real desde una API pública  

El objetivo del proyecto es construir un **Explorador de Países**, donde el usuario pueda:

- Ver regiones del mundo (continentes)  
- Desplegar la lista de países de cada región  
- Buscar países por coincidencia de texto  
- Ingresar al detalle de cada país  
- Ver una página de inicio con un mapa del mundo y selector interactivo  

---

## 2. Funcionalidades principales

### ✔ Página de inicio
- Mapa del mundo (imagen interactiva visual).
- Selector de países para navegar directamente al detalle.
- Navegación dinámica usando `useNavigate`.

### ✔ Listado de países agrupado por región
- Datos obtenidos desde la API RestCountries.
- Regiones ordenadas alfabéticamente.
- Países ordenados por nombre.
- Función *collapsible*: cada región se despliega con un botón.
- Filtro de texto para buscar países por coincidencia parcial del nombre.
- Link dinámico hacia el detalle de cada país.

### ✔ Página de detalle del país
- Bandera en formato card.
- Información clave:
  - Nombre oficial  
  - Código CCA3  
  - Región y subregión  
  - Capital  
  - Población con formato localizado  
- Botón “Volver al listado”.

### ✔ Error Boundary
- Manejo de errores de renderizado.
- Mensaje de error amigable si falla un componente o una ruta.

---

## 3. Arquitectura del proyecto

El proyecto sigue una organización simple y escalable:

```
src/
  components/
    ErrorBoundary.jsx
  hooks/
    useFetchCountries.js
    useFetchCountry.js
  layouts/
    AppLayout.jsx
  pages/
    HomePage.jsx
    CountriesPage.jsx
    CountryDetailPage.jsx
  main.jsx
  index.css
```

### Estructura destacada:
- `hooks/` contiene custom hooks reutilizables para fetch.  
- `pages/` contiene cada vista principal con separación clara.  
- `layouts/` maneja la estructura global (navbar + Outlet).  
- `components/` contiene piezas transversales como el ErrorBoundary.  

---

## 4. Uso de Hooks y Custom Hooks

Se implementaron **hooks personalizados** para centralizar la lógica de consumo de la API:

### `useFetchCountries()`
- Fetch a `https://restcountries.com/v3.1/all`.  
- Retorna: `countries`, `loading`, `error`.

### `useFetchCountry(code)`
- Fetch a `https://restcountries.com/v3.1/alpha/{code}`.  
- Retorna: `country`, `loading`, `error`.

Esto permite mantener componentes limpios, desacoplados y siguiendo buenas prácticas de React.

---

## 5. Rutas con React Router

Se utilizó **React Router v6** y el router se construyó con `createBrowserRouter`.

### Rutas implementadas:

| Ruta | Componente | Descripción |
|------|------------|-------------|
| `/` | `HomePage` | Mapa + selector |
| `/countries` | `CountriesPage` | Listado por región + filtro |
| `/countries/:code` | `CountryDetailPage` | Detalle del país |

El layout global se maneja mediante:

```jsx
<AppLayout>
  <Outlet />
</AppLayout>
```

---

## 6. Manejo de errores con Error Boundaries

Se implementó un componente de clase para capturar errores de renderizado:

```jsx
class ErrorBoundary extends React.Component { ... }
```

Uso aplicado en:

- `CountriesPage`  
- `CountryDetailPage`  

Esto evita que la aplicación colapse si ocurre un error dentro de un componente hijo.

---

## 7. Interfaz con Bootstrap

El proyecto utiliza **Bootstrap 5**, incluyendo:

- Navbar (`navbar`, `bg-dark`)  
- Grid system (`row`, `col`)  
- Cards (`card`)  
- List groups  
- Buttons (`btn`, `btn-dark`, `btn-outline-secondary`)  
- Badges (`badge`)  
- Formularios e inputs (`form-control`)  
- Helpers (`mb-*`, `mt-*`, `shadow-sm`, etc.)

Bootstrap permite que la interfaz sea moderna, responsiva y limpia.

---

## 8. API utilizada

El proyecto utiliza la API pública **RestCountries v3.1**.

Documentación oficial:  
https://restcountries.com/v3.1/

### Endpoints:

| Endpoint | Uso |
|----------|-----|
| `/v3.1/all` | Obtener todos los países |
| `/v3.1/alpha/{code}` | Obtener detalle de un país específico |

También se utilizaron parámetros `?fields=` para optimizar la respuesta.

---

## 9. Instalación y uso (local)

### 🔧 Requisitos:
- Node.js 18+  
- NPM 8+

### 📥 Instalar dependencias
```bash
npm install
```

### 🚀 Ejecutar en modo desarrollo
```bash
npm run dev
```

App disponible en:  
```
http://localhost:5173/
```

### 🔨 Build para producción
```bash
npm run build
```

Genera la carpeta `dist/` lista para deploy.

---

## 10. Despliegue en Netlify

Este proyecto fue desplegado usando **Netlify**, conectado directamente desde GitHub.

### Configuración utilizada:
- **Build command:** `npm run build`  
- **Publish directory:** `dist/`  
- **Branch:** `main`

### 🌐 URL pública:
👉 **https://proyectodwfsm05.netlify.app/**

---

## 11. Comentarios adicionales

✨ Proyecto desarrollado de manera individual, con apoyo de ChatGPT como tutor técnico para aclarar dudas, aprender cosas nuevas y guía en el desarrollo del proyecto.  
🧠 Se aplicaron conceptos claves: Hooks, custom hooks, router, manejo de errores, fetch, despliegue.  
📄 README generado por **Mauricio Larrondo** con asistencia de ChatGPT.
