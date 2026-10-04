import Ejercicio1 from "./Ejercicio1";
import Ejercicio2 from "./Ejercicio2";
import Ejercicio3 from "./Ejercicio3";

export default function App() {
  return (
    <div style={{ maxWidth: 800, margin: "0 auto", padding: 20, fontFamily: "system-ui, sans-serif" }}>
      <h1>Taller: Fundamentos de ReactJS</h1>
      <Ejercicio1 />
      <hr />
      <Ejercicio2 />
      <hr />
      <Ejercicio3 />
    </div>
  );
}
