function PersonajeCard({ nombre, imagen }) {
  return (
    <article className="card-personaje">

      <img
        src={imagen}
        alt={nombre}
        className="foto-personaje"
      />

      <h3>{nombre}</h3>

      <button>
        Ver Expediente
      </button>

    </article>
  );
}

export default PersonajeCard;