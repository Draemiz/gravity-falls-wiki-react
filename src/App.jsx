import "./index.css";

import arbolIzq from "./assets/ARBOL-01.png";
import arbolDer from "./assets/ARBOL-02.png";

function App() {
  return (
    <>
      <header className="hero">
        <div className="overlay">

          <h1>
            BIENVENIDO A
            <br />
            LOS MISTERIOS
            <br />
            DE GRAVITY FALLS
          </h1>

          <p>
            Descubre secretos, conoce personajes
            y explora los misterios del extraño
            mundo de Gravity Falls.
          </p>

          <button>
            Explorar Personajes
          </button>

        </div>
      </header>

      <section className="personajes">

        <div className="titulo-seccion">

          <img
            src={arbolIzq}
            alt="Árbol decorativo izquierdo"
          />

          <h2>
            CONOCE A LOS LOCALES
          </h2>

          <img
            src={arbolDer}
            alt="Árbol decorativo derecho"
          />

        </div>

        <p>
          Explora información sobre tus personajes favoritos.
        </p>

        <div className="contenedor-personajes">

        </div>

      </section>
    </>
  );
}

export default App;