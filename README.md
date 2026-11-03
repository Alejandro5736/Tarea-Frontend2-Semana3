# Sistema de Gestión de Inventario - Supermercado App (Evaluación Sumativa)

Aplicación web desarrollada en **React** que simula un sistema de gestión de inventario y carrito de compras para un supermercado, implementando los requerimientos de la Evaluación Sumativa de la Semana 3 de la asignatura Desarrollo Frontend II.

## 🚀 Características Principales

* **Listado e Inventario General:** Visualización completa de los productos disponibles con sus respectivas marcas, categorías, precios y stock en tiempo real.
* **Filtro Dinámico por Categoría:** Selector interactivo que permite filtrar los productos según su categoría sin perder ni mutar el inventario original.
* **Enrutamiento Dinámico (`useParams`):** Vistas detalladas individuales para cada producto utilizando rutas dinámicas basadas en su ID a través de `react-router-dom`.
* **Carrito de Compras Sincronizado:** Carrito interactivo que permite aumentar o disminuir las cantidades de compra, descontando o reponiendo automáticamente el stock del inventario general en tiempo real.
* **Diseño Responsivo:** Interfaz moderna y estilizada utilizando clases de utilidad de **Tailwind CSS**.

## 🛠️ Tecnologías Utilizadas

* **React** (v18+)
* **React Router DOM** (v6)
* **Tailwind CSS** (v3)
* **JavaScript (ES6+)**

## 📂 Estructura del Proyecto

El código fuente se encuentra organizado de forma limpia y modular en un solo nivel dentro de la carpeta `src/`:

```text
src/
├── components/       # Componentes reutilizables
├── pages/            # Vistas principales (ProductList, ProductDetail, CartPage)
├── App.js            # Componente principal, estado global y rutas
├── index.js          # Punto de entrada de la aplicación
└── index.css         # Configuración de estilos y Tailwind