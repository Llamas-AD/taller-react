export default function StudentCard({ nombre, programa, semestre, foto, estado }) {
  const activo = estado === "Activo";
  return (
    <div style={s.card}>
      <img src={foto} alt={nombre} width="90" height="90" style={{ borderRadius: "50%" }} />
      <h3 style={{ margin: "8px 0 2px" }}>{nombre}</h3>
      <p style={s.p}>{programa}</p>
      <p style={s.p}>Semestre {semestre}</p>
      <span style={{ ...s.badge, background: activo ? "#16a34a" : "#dc2626" }}>{estado}</span>
    </div>
  );
}

const s = {
  card: { border: "1px solid #ddd", borderRadius: 12, padding: 16, width: 170, textAlign: "center", background: "#fff" },
  p: { margin: "2px 0", fontSize: 13, color: "#555" },
  badge: { display: "inline-block", marginTop: 8, padding: "2px 10px", borderRadius: 99, color: "#fff", fontSize: 12 },
};
