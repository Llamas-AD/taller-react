# Taller de Investigación y Aplicación: Fundamentos de ReactJS

Proyecto con tres ejercicios prácticos que aplican los conceptos básicos de ReactJS. La investigación teórica y las fuentes consultadas están en el documento de evidencia entregado por separado.

## Ejercicios

| # | Ejercicio | Conceptos | Archivo |
|---|-----------|-----------|---------|
| 1 | Tarjetas de estudiantes | Componentes, JSX, props | `Ejercicio1.jsx`, `components/StudentCard.jsx` |
| 2 | Contador de productos | `useState`, eventos, renderizado condicional | `Ejercicio2.jsx` |
| 3 | Gestor de tareas | Listas con `map()`, `key`, estado con arreglos | `Ejercicio3.jsx` |

### 1. Estudiantes
Componente reutilizable `StudentCard` que recibe por props nombre, programa, semestre, foto y estado académico. Se muestran 5 estudiantes con el mismo componente.

### 2. Contador de productos
Permite incrementar, disminuir y reiniciar la cantidad, sin bajar de cero. Muestra un mensaje distinto según la cantidad (0, 1 o varios). La cantidad se maneja con `useState`.

### 3. Gestor de tareas
Permite agregar, eliminar y marcar tareas como completadas (se muestran tachadas) y muestra cuántas quedan pendientes. Cada tarea tiene `id`, `titulo`, `descripcion` y `completada`, y la lista se genera con `map()` usando `key`.

## Estructura

```
src/
├── App.jsx
├── Ejercicio1.jsx
├── Ejercicio2.jsx
├── Ejercicio3.jsx
└── components/
    └── StudentCard.jsx
```

## Cómo ejecutarlo

```bash
npm install
npm run dev
```

Luego abrir http://localhost:5173/

## Tecnologías

React · Vite · JavaScript (JSX)
