import { useState } from "react";

export default function Ejercicio3() {
  const [tareas, setTareas] = useState([
    { id: 1, titulo: "Estudiar JSX", descripcion: "Leer react.dev", completada: false },
    { id: 2, titulo: "Hacer el taller", descripcion: "Resolver las 3 preguntas", completada: true },
  ]);
  const [titulo, setTitulo] = useState("");
  const [descripcion, setDescripcion] = useState("");

  const agregar = () => {
    if (!titulo.trim()) return;
    setTareas([...tareas, { id: Date.now(), titulo, descripcion, completada: false }]);
    setTitulo("");
    setDescripcion("");
  };
  const eliminar = (id) => setTareas(tareas.filter((t) => t.id !== id));
  const alternar = (id) =>
    setTareas(tareas.map((t) => (t.id === id ? { ...t, completada: !t.completada } : t)));

  const pendientes = tareas.filter((t) => !t.completada).length;

  return (
    <section>
      <h2>3. Gestor de tareas</h2>
      <p><b>Tareas pendientes: {pendientes}</b></p>
      <input placeholder="Título" value={titulo} onChange={(e) => setTitulo(e.target.value)} />{" "}
      <input placeholder="Descripción" value={descripcion} onChange={(e) => setDescripcion(e.target.value)} />{" "}
      <button onClick={agregar}>Agregar</button>

      {tareas.length === 0 && <p>No hay tareas. ¡Agrega una!</p>}
      <ul style={{ listStyle: "none", padding: 0 }}>
        {tareas.map((t) => (
          <li key={t.id} style={{ ...s.tarea, background: t.completada ? "#dcfce7" : "#fff" }}>
            <input type="checkbox" checked={t.completada} onChange={() => alternar(t.id)} />
            <div style={{ flex: 1, textDecoration: t.completada ? "line-through" : "none", color: t.completada ? "#6b7280" : "#111" }}>
              <b>{t.titulo}</b>
              <div style={{ fontSize: 13 }}>{t.descripcion}</div>
            </div>
            <button onClick={() => eliminar(t.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </section>
  );
}

const s = {
  tarea: { display: "flex", alignItems: "center", gap: 10, border: "1px solid #ddd", borderRadius: 8, padding: 10, marginBottom: 8 },
};
