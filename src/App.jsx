import React from "react";
import "./index.css";

import arbolIzq from "./assets/ARBOL-01.png";
import arbolDer from "./assets/ARBOL-02.png";
import PersonajeCard from "./components/PersonajeCard";
import { personajesData } from "./data/personajes";

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

          
            <a href="#personajes" className="btn-explorar">
              Explorar Personajes
            </a>
          

        </div>
      </header>

      <section id="personajes" className="personajes">

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

          {personajesData.map(personaje => (

            <PersonajeCard
              key={personaje.id}
              id={personaje.id}
              nombre={personaje.nombre}
              imagen={personaje.imagen}
              frase={personaje.frase}
              episodio={personaje.episodio}
            />

          ))}

        </div>

      </section>
    </>
  );
}

export default App;