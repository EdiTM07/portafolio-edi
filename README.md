# Personal Portfolio - EdiTM07

Un portafolio web personal minimalista, interactivo y bilingüe (ES/EN) diseñado para mostrar proyectos, trayectoria y habilidades de desarrollo de software. Construido con un enfoque en la experiencia de usuario (UX) y animaciones fluidas basadas en el scroll.

## Características Principales

* **Diseño "Bento Box":** Cuadrículas modernas y responsivas para organizar la información de manera limpia.

* **Soporte Bilingüe:** Cambio dinámico de idioma entre Español e Inglés mediante un custom hook.

* **Timeline Interactivo:** Línea de tiempo con animaciones de trazado SVG orgánico que reacciona al scroll.

* **Modales Optimizados:** Visualización de "Casos de Estudio" implementados con React Portals para evitar conflictos de z-index y overflow.

* **Formulario de Contacto:** Integración segura y sin backend utilizando Web3Forms.

* **Notificaciones Elegantes:** Sistema de alertas Toast para enlaces en construcción.

## Stack Tecnológico

* **Frontend:** React, Vite

* **Estilos:** CSS Modules (Metodología BEM/Modular)

* **Librerías Adicionales:** `react-icons`, `react-hot-toast`

* **Formularios:** Web3Forms API

* **Despliegue:** Vercel (CI/CD configurado)

## Instalación y Uso Local

1. **Clonar el repositorio:**

   ```
   git clone https://github.com/EdiTM07/portafolio-edi.git
   cd portafolio-edi
   
   ```

2. **Instalar dependencias:**

   ```
   npm install
   
   ```

3. **Configurar Variables de Entorno:**
   Crea un archivo `.env` en la raíz del proyecto y añade tu llave de Web3Forms (necesaria para que funcione la sección de contacto):

   ```
   VITE_WEB3FORMS_ACCESS_KEY=tu_clave_publica_aqui
   
   ```

4. **Ejecutar el servidor de desarrollo:**

   ```
   npm run dev
   
   ```

## Despliegue

Este proyecto está configurado para despliegue continuo (CI/CD) mediante **Vercel**. Cualquier *commit* en la rama `main` disparará automáticamente una nueva compilación en producción.

*Asegúrate de configurar la variable `VITE_WEB3FORMS_ACCESS_KEY` en el panel de variables de entorno de Vercel.*