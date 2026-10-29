# 🛰️ SENATI - Sistema de Mesa de Ayuda (Equipo 1)

Bienvenido al repositorio oficial del **Sistema Avanzado de Gestión de Incidencias e Infraestructura TI** desarrollado por el **Equipo 1**. Este proyecto es una aplicación web full-stack diseñada para centralizar, reportar y dar solución a problemas técnicos y tecnológicos dentro del campus institucional de SENATI.

---

## 🚀 Características Principales

El sistema implementa una arquitectura desacoplada moderna compuesta por una API RESTful y una interfaz interactiva de alta fidelidad:

*   **Terminal de Usuario:** Interfaz intuitiva y optimizada para que alumnos o colaboradores reporten incidentes en tiempo real especificando operario, zona y descripción de la anomalía.
*   **Consola de Operaciones Core TI:** Panel exclusivo del Administrador que monitorea y gestiona el ciclo de vida de los incidentes entrantes utilizando un sistema de prioridad visual por estados.
*   **Estética Cyber-Tech Premium:** Diseño moderno e institucional en *Dark Mode* con efectos de desenfoque de cristal (*glassmorphism*) e iluminación de neón reactiva según el estado del módulo.

---

## 🛠️ Stack Tecnológico Utilizado

### 💻 Frontend (Interfaz de Usuario)
*   **React 19** - Librería de JavaScript para la construcción de interfaces reactivas.
*   **Vite** - Herramienta de empaquetado ultra rápida para el entorno de desarrollo.
*   **CSS en JS Avanzado** - Estilos modernos optimizados empaquetados directamente en los componentes.

### ⚙️ Backend (Núcleo del Servidor)
*   **Node.js** - Entorno de ejecución para el lado del servidor.
*   **Express.js** - Framework minimalista para la creación de la API REST.
*   **CORS** - Middleware para permitir el intercambio de recursos de origen cruzado de manera segura.

---

## 🏃‍♂️ Instrucciones de Ejecución Local

Para poner en marcha el ecosistema completo en tu máquina de desarrollo, sigue los siguientes pasos:

### 1. Clonar el repositorio
```bash
git clone https://github.com
cd sistema-mesa-ayuda
```

### 2. Desplegar el Backend
Abre una terminal dedicada para el servidor y ejecuta:
```bash
cd backend
npm install
node server.js
```
*El núcleo se activará transmitiendo en: `http://localhost:5000`*

### 3. Desplegar el Frontend
Abre una segunda terminal independiente para la interfaz y ejecuta:
```bash
cd frontend
npm install
npm run dev
```
*Accede a la interfaz holográfica abriendo en tu navegador:* `http://localhost:5173`

---

## 📂 Estructura del Repositorio

```text
sistema-mesa-ayuda/
├── backend/
│   ├── server.js          # Rutas del Core TI y base de datos temporal
│   └── package.json       # Dependencias del servidor Express
├── frontend/
│   ├── src/
│   │   ├── App.jsx        # Componente principal con los paneles UI y estilos
│   │   └── main.jsx       # Punto de entrada de React
│   └── package.json       # Configuración del entorno de Vite
└── README.md              # Documentación oficial del proyecto
```

---

## 👥 Desarrolladores - Equipo 1
Proyecto desarrollado bajo los estándares educativos de **SENATI** para la gestión ágil de infraestructura y soporte informático.
