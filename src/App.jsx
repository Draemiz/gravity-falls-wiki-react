import React from "react";
import "./index.css";

import arbolIzq from "./assets/ARBOL-01.png";
import arbolDer from "./assets/ARBOL-02.png";
import PersonajeCard from "./components/PersonajeCard";

function App() {

  const personajesData = [
    {
      id: 1,
      nombre: "Dipper Pines",
      imagen: "https://i.pinimg.com/736x/61/dd/08/61dd0881c0b7ca8d41589d230852c043.jpg",
      frase: "Los misterios están en todas partes.",
      episodio: "Tourist Trapped",

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
    },

    {
      id: 2,
      nombre: "Mabel Pines",
      imagen: "https://static.wikia.nocookie.net/gravityfalls/images/a/a0/Mabel_pines_perfil.png/revision/latest?cb=20170824171732&path-prefix=es",
      frase: "La vida es mejor con brillantina.",
      episodio: "Tourist Trapped",

      edad: 12,
      rol: "Optimista",
      ubicacion: "Gravity Falls, Oregon",

      descripcion:
        "Mabel es alegre, creativa y extrovertida. Siempre ve el lado positivo de las cosas y ayuda a sus amigos con entusiasmo.",

      notas: [
        "Ama los suéteres",
        "Le gustan los cerditos",
        "Muy optimista"
      ],

      habilidades: [
        "Creativa",
        "Amable",
        "Divertida",
        "Valiente"
      ],

      favoritos: [
        "Brillantina",
        "Suéteres",
        "Waddles"
      ]
    },

    {
      id: 3,
      nombre: "Stan Pines",
      imagen: "https://static.wikia.nocookie.net/gravityfalls/images/9/92/S1e16_something_about_you.png/revision/latest?cb=20130530141339",
      frase: "Todo tiene un precio.",
      episodio: "Headhunters",

      edad: 58,
      rol: "Dueño del Mystery Shack",
      ubicacion: "Gravity Falls, Oregon",

      descripcion:
        "Stan dirige el Mystery Shack. Aunque parece interesado únicamente en ganar dinero, se preocupa profundamente por su familia.",

      notas: [
        "Gran comerciante",
        "Protector",
        "Misterioso"
      ],

      habilidades: [
        "Astuto",
        "Persistente",
        "Líder",
        "Valiente"
      ],

      favoritos: [
        "Dinero",
        "Familia",
        "Mystery Shack"
      ]
    },

    {
      id: 4,
      nombre: "Ford Pines",
      imagen: "https://i.redd.it/if8zmslgg46e1.jpeg",
      frase: "El conocimiento es poder.",
      episodio: "The Author",

      edad: 60,
      rol: "Científico",
      ubicacion: "Gravity Falls, Oregon",

      descripcion:
        "Ford es el autor de los diarios y uno de los científicos más brillantes de Gravity Falls. Dedicó su vida a estudiar lo paranormal.",

      notas: [
        "Escribió los diarios",
        "Genio científico",
        "Investigador paranormal"
      ],

      habilidades: [
        "Inteligente",
        "Analítico",
        "Inventor",
        "Valiente"
      ],

      favoritos: [
        "Investigación",
        "Ciencia",
        "Descubrimientos"
      ]
    },

    {
      id: 5,
      nombre: "Soos Ramirez",
      imagen: "https://static.wikia.nocookie.net/gravityfalls/images/8/81/S1e1_soos_touching_hat.png/revision/latest/scale-to-width-down/985?cb=20120621195632",
      frase: "¡Eso estuvo increíble, dude!",
      episodio: "Tourist Trapped",

      edad: 22,
      rol: "Manitas del Mystery Shack",
      ubicacion: "Gravity Falls, Oregon",

      descripcion:
        "Soos es amable, divertido y siempre está dispuesto a ayudar. Es considerado uno de los mejores amigos de Dipper y Mabel.",

      notas: [
        "Muy amigable",
        "Leal",
        "Excelente mecánico"
      ],

      habilidades: [
        "Mecánica",
        "Lealtad",
        "Humor",
        "Creatividad"
      ],

      favoritos: [
        "Videojuegos",
        "Reparar cosas",
        "Hamburguesas"
      ]
    },

    {
      id: 6,
      nombre: "Wendy Corduroy",
      imagen: "https://i.pinimg.com/236x/86/a9/47/86a9479b15944b2a8b4568d78f81d2b0.jpg",
      frase: "Relájate, todo estará bien.",
      episodio: "The Inconveniencing",

      edad: 15,
      rol: "Empleado del Mystery Shack",
      ubicacion: "Gravity Falls, Oregon",

      descripcion:
        "Wendy es relajada, aventurera y valiente. Trabaja en el Mystery Shack y se convierte en una gran amiga de Dipper.",

      notas: [
        "Excelente tiradora",
        "Aventurera",
        "Muy relajada"
      ],

      habilidades: [
        "Valentía",
        "Supervivencia",
        "Liderazgo",
        "Agilidad"
      ],

      favoritos: [
        "Bosques",
        "Aventuras",
        "Amigos"
      ]
    }
  ];

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