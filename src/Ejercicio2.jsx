import { useState } from "react";

export default function Ejercicio2() {
  const [cantidad, setCantidad] = useState(0);

  const mensaje =
    cantidad === 0
      ? "No hay productos seleccionados"
      : cantidad === 1
      ? "Has seleccionado un producto"
      : "Has seleccionado varios productos";

  return (
    <section>
      <h2>2. Contador de productos</h2>
      <p style={{ fontSize: 40, margin: 0 }}>{cantidad}</p>
      <p>{mensaje}</p>
      <button onClick={() => setCantidad(cantidad + 1)}>+ Incrementar</button>{" "}
      <button onClick={() => setCantidad(Math.max(0, cantidad - 1))} disabled={cantidad === 0}>
        − Disminuir
      </button>{" "}
      <button onClick={() => setCantidad(0)}>Reiniciar</button>
    </section>
  );
}
