import libro from "../assets/libro.png";
import { Link, useParams } from "react-router-dom";
import { personajesData } from "../data/personajes";

function DetallePersonaje() {
    const { id } = useParams();
    const personaje = personajesData.find(p => p.id === Number(id));
    if (!personaje) { return <h1>Personaje no encontrado</h1>; }


    return (
        <div className="detalle-libro">

            <img
                src={libro}
                alt="Libro"
                className="fondo-libro"
            />

            <div className="contenido-libro">

                <div className="pagina-izquierda">

                    <div className="contenedor-foto">
                        <img
                            src={personaje.imagen}
                            alt={personaje.nombre}
                            className="foto-detalle"
                        />
                    </div>

                    <div className="notas">

                        <h2>Notas</h2>

                        <ul>
                            {personaje.notas.map(nota => (
                                <li key={nota}>
                                    {nota}
                                </li>
                            ))}
                        </ul>

                        <br></br>

                        <h3>Episodio</h3>
                        <p className="episodio">
                            {personaje.episodio}
                        </p>

                        <br></br>

                        <h3>Frase</h3>
                        <p className="frase">
                            {personaje.frase}
                        </p>

                    </div>

                </div>

                <Link to="/" className="btn-volver">
                    ← Volver al Mystery Shack
                </Link>

                <div className="pagina-derecha">

                    <h1>{personaje.nombre}</h1>

                    <p className="descripcion">
                        {personaje.descripcion}
                    </p>

                    <h3>Edad</h3>
                    <p>{personaje.edad} años</p>

                    <h3>Rol</h3>
                    <p>{personaje.rol}</p>

                    <h3>Ubicación</h3>
                    <p>{personaje.ubicacion}</p>

                    <h3>Habilidades</h3>

                    <ul>
                        {personaje.habilidades.map(habilidad => (
                            <li key={habilidad}>
                                {habilidad}
                            </li>
                        ))}
                    </ul>

                    <h3>Favoritos</h3>

                    <ul>
                        {personaje.favoritos.map(favorito => (
                            <li key={favorito}>
                                {favorito}
                            </li>
                        ))}
                    </ul>

                </div>

            </div>

        </div>
    );
}

export default DetallePersonaje;