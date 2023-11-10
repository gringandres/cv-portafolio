import IMG1 from "../../assets/sticker-png-one-piece-skull-logo.png";

import "./proyects.css";
const Proyects = () => {
  const data = [
    {
      id: 1,
      image: IMG1,
      title: "Calculator for University grades class",
      github: "https://github.com",
      demo: "https://dribbble.com",
    },
    {
      id: 2,
      image: IMG1,
      title: "Calculator for University grades class",
      github: "https://github.com",
      demo: "https://dribbble.com",
    },
    {
      id: 3,
      image: IMG1,
      title: "Calculator for University grades class",
      github: "https://github.com",
      demo: "https://dribbble.com",
    },
    {
      id: 4,
      image: IMG1,
      title: "Calculator for University grades class",
      github: "https://github.com",
      demo: "https://dribbble.com",
    },
    {
      id: 5,
      image: IMG1,
      title: "Calculator for University grades class",
      github: "https://github.com",
      demo: "https://dribbble.com",
    },
    {
      id: 6,
      image: IMG1,
      title: "Calculator for University grades class",
      github: "https://github.com",
      demo: "https://dribbble.com",
    },
  ];

  return (
    <section id="proyects">
      <h5>My Recent Proyects</h5>
      <h2>Proyects</h2>
      <div className="container proyects__container">
        {data.map(({ title, github, demo, image, id }) => (
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
        ))}
      </div>
    </section>
  );
};

export default Proyects;
