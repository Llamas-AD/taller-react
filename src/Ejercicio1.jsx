import StudentCard from "./components/StudentCard";

export default function Ejercicio1() {
  const estudiantes = [
    { nombre: "Laura Pérez", programa: "Ingeniería de Sistemas", semestre: 7, foto: "https://i.pravatar.cc/150?img=1", estado: "Activo" },
    { nombre: "Carlos Gómez", programa: "Ingeniería Industrial", semestre: 5, foto: "https://i.pravatar.cc/150?img=12", estado: "Activo" },
    { nombre: "Ana Martínez", programa: "Ingeniería Civil", semestre: 3, foto: "https://i.pravatar.cc/150?img=5", estado: "En prueba" },
    { nombre: "Juan Rodríguez", programa: "Ingeniería Eléctrica", semestre: 9, foto: "https://i.pravatar.cc/150?img=15", estado: "Activo" },
    { nombre: "Valentina Ruiz", programa: "Ingeniería Ambiental", semestre: 2, foto: "https://i.pravatar.cc/150?img=9", estado: "Suspendido" },
  ];

  return (
    <section>
      <h2>1. Estudiantes (StudentCard)</h2>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
        {estudiantes.map((e) => (
          <StudentCard key={e.nombre} {...e} />
        ))}
      </div>
    </section>
  );
}
