import libro from "../assets/libro.png";
import { Link } from "react-router-dom";

function DetallePersonaje() {
    const personaje = {
        nombre: "Dipper Pines",
        imagen:
            "https://i.pinimg.com/736x/61/dd/08/61dd0881c0b7ca8d41589d230852c043.jpg",

        edad: 12,
        rol: "Aventurero",
        ubicacion: "Gravity Falls, Oregon",

        descripcion:
            "Dipper es un chico inteligente y curioso que pasa el verano en Gravity Falls junto a su hermana gemela Mabel. Siempre busca resolver misterios y descubrir la verdad detrás de los fenómenos extraños del pueblo.",

        notas: [
            "Muy curioso",
            "Confía en Mabel",
            "Ama los misterios"
        ],

        habilidades: [
            "Curioso",
            "Valiente",
            "Inteligente",
            "Leal"
        ],

        favoritos: [
            "Resolver misterios",
            "Leer",
            "Aventuras"
        ]
    };

    return (
        <div className="detalle-libro">

            <img
                src={libro}
                alt="Libro"
                className="fondo-libro"
            />

            <div className="contenido-libro">

                <div className="pagina-izquierda">

                    <img
                        src={personaje.imagen}
                        alt={personaje.nombre}
                        className="foto-detalle"
                    />

                    <div className="notas">

                        <h2>Notas</h2>

                        <ul>
                            {personaje.notas.map(nota => (
                                <li key={nota}>
                                    {nota}
                                </li>
                            ))}
                        </ul>

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