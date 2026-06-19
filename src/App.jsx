import "./index.css";

import arbolIzq from "./assets/ARBOL-01.png";
import arbolDer from "./assets/ARBOL-02.png";
import PersonajeCard from "./components/PersonajeCard";

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
          <PersonajeCard
            nombre="Dipper Pines"
            imagen="https://static.wikia.nocookie.net/grimmfall-fanfiction/images/7/74/Dipper.png/revision/latest?cb=20190507235021"
            frase="Los misterios están en todas partes."
            episodio="Tourist Trapped"
          />

        </div>

      </section>
    </>
  );
}

export default App;