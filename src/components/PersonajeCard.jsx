import { Link } from "react-router-dom";

function PersonajeCard({
  id,
  nombre,
  imagen,
  frase,
  episodio
}) {
  return (
    <article className="card-personaje">

      <img
        src={imagen}
        alt={nombre}
        className="foto-personaje"
      />

      <h3>{nombre}</h3>

      <Link to={`/personaje/${id}`}>
        <button>
          Ver Expediente
        </button>
      </Link>

    </article>
  );
}

export default PersonajeCard;