# PORTUFUTBOL

## Descripción del proyecto

PORTUFUTBOL es una aplicación web desarrollada como parte del curso **Diseño de Software** del Instituto Tecnológico de Costa Rica. El sistema simula una tienda virtual especializada en artículos de fútbol, permitiendo a los usuarios explorar productos, agregarlos a un carrito de compras y gestionar pedidos mediante WhatsApp.

Además de las funcionalidades propias de una tienda en línea, el proyecto incorpora principios de accesibilidad, internacionalización y patrones de diseño orientados a la construcción de software mantenible y escalable.

---

## Características principales

* Visualización de productos relacionados con el fútbol.
* Side Menu interactivo con categorías y subcategorías.
* Carrito de compras funcional.
* Cálculo automático del impuesto del 10%.
* Cálculo del total a pagar.
* Integración con WhatsApp para el envío del pedido.
* Buscador de productos.
* Cambio de idioma entre español e inglés.
* Cambio entre tema claro y oscuro.
* Modos de accesibilidad para distintos tipos de daltonismo:

  * Deuteranopia.
  * Protanopia.
  * Tritanopia.
* Lector de texto para personas con discapacidad visual.
* Video destacado relacionado con la temática del fútbol.

---

## Tecnologías utilizadas

* React
* JavaScript (ES6+)
* CSS3
* HTML5
* Vite
* Git
* GitHub

---

## Patrones de diseño implementados

### MVC (Model-View-Controller)

El proyecto se encuentra estructurado bajo el patrón MVC, separando claramente las responsabilidades del sistema.

#### Modelo (Model)

Encargado de representar y administrar los datos del sistema.

Ejemplos:

* LanguageManager
* ThemeManager
* ProductModel

#### Vista (View)

Responsable de la presentación de la información al usuario.

Ejemplos:

* Header
* Sidebar
* InicioView
* ProductCard
* FooterInfo

#### Controlador (Controller)

Intermediario entre las vistas y los modelos.

Ejemplos:

* LanguageController
* ThemeController
* AudioReaderController

---

### Singleton

Utilizado para garantizar una única instancia de ciertos controladores y administradores.

Ejemplos:

* ThemeController
* ThemeManager
* LanguageController
* LanguageManager

---

### Strategy

Implementado para el sistema de internacionalización.

Permite cambiar dinámicamente el comportamiento del idioma sin modificar el código de las vistas.

Estrategias implementadas:

* SpanishLanguageStrategy
* EnglishLanguageStrategy

---

### Facade

Los controladores ofrecen una interfaz simplificada hacia funcionalidades complejas del sistema.

Ejemplos:

* ThemeController
* LanguageController
* AudioReaderController

---

### Observer

React implementa este patrón mediante el uso del estado y la actualización automática de las vistas.

Ejemplos:

* Cambio de idioma.
* Cambio de tema.
* Actualización del carrito.
* Modos de accesibilidad.

---

## Instalación

### Requisitos previos

* Node.js versión 18 o superior.
* npm.

Verificar instalación:

```bash
node -v
npm -v
```

---

## Clonar el repositorio

```bash
git clone https://github.com/Divan27/PY3_D.Software.git
```

Ingresar al directorio del proyecto:

```bash
cd PY3_D.Software
```

---

## Instalación de dependencias

```bash
npm install
```

---

## Ejecución del proyecto

```bash
npm run dev
```

El proyecto estará disponible en:

```text
http://localhost:5173
```

---

## Construcción para producción

```bash
npm run build
```

---

## Vista previa del build

```bash
npm run preview
```

---

## Accesibilidad

PORTUFUTBOL incorpora diversas funcionalidades orientadas a mejorar la experiencia de usuarios con necesidades específicas:

* Lector automático de texto.
* Soporte para tres tipos de daltonismo.
* Cambio entre idioma español e inglés.
* Interfaz adaptable mediante tema claro y oscuro.

---

## Integrantes

* Daryll Martínez Rodríguez
* Dilan Zamora Sanchez 

---

## Curso

Diseño de Software

Instituto Tecnológico de Costa Rica

Grupo 60

I Semestre 2026

---

## Licencia

Este proyecto fue desarrollado con fines académicos como parte de los requisitos del curso Diseño de Software del Instituto Tecnológico de Costa Rica.
