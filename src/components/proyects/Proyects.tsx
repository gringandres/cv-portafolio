import IMG1 from "../../assets/Screenshot 2023-12-09 at 3.25.15 PM.png";
import IMG2 from "../../assets/Screenshot 2023-12-09 at 3.25.41 PM.png";
import IMG3 from "../../assets/Screenshot 2023-12-09 at 3.26.03 PM.png";
import IMG4 from "../../assets/Screenshot 2023-12-09 at 3.26.37 PM.png";
import IMG5 from "../../assets/Screenshot 2023-12-09 at 3.24.55 PM.png";
import Assistent from "../assitent/assistent";

import "./proyects.css";
const Proyects = () => {
  const data = [
    {
      id: 1,
      image: IMG1,
      title: "Vet page",
      github: "https://github.com/gringandres/pacientesveterinaria",
      demo: "https://petslogvetabr.netlify.app",
    },
    {
      id: 2,
      image: IMG2,
      title: "Pokemon Pokedex",
      github: "https://github.com/gringandres/pokemon-api",
      demo: "https://pokedexabr.netlify.app",
    },
    {
      id: 3,
      image: IMG3,
      title: "Soccer team picker",
      github: "https://github.com/gringandres/soccer",
      demo: "https://team-tournament.netlify.app",
    },
    {
      id: 4,
      image: IMG4,
      title: "GifExpertApp - Klerith",
      github: "https://github.com/gringandres/react-gif-expert",
      demo: "https://gifexpertappklerif.netlify.app",
    },
    {
      id: 5,
      image: IMG5,
      title: "Calculator for University grades class",
      github: "https://github.com/gringandres/tallerNotasParalela1",
      demo: "https://classnotesabr.netlify.app",
    },
    {
      loading: true,
    },
  ];

  return (
    <section id="proyects">
      <h5>My Recent Proyects</h5>
      <h2>Proyects</h2>
      <div className="container proyects__container">
        {data.map(({ title, github, demo, image, id, loading }) => (
          <>
            {!loading ? (
              <article className="proyects__items" key={id}>
                <div className="proyects_items-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="proyects__items-cta">
                  <a href={github} className="btn" target="_blank">
                    Github
                  </a>
                  <a href={demo} className="btn btn-primary" target="_blank">
                    Live demo
                  </a>
                </div>
              </article>
            ) : (
              <Assistent />
            )}
          </>
        ))}
      </div>
    </section>
  );
};

export default Proyects;
