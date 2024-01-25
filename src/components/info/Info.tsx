import photo from "../../assets/IMG_1542.jpeg";
import { PiComputerTowerBold, PiBooksLight } from "react-icons/pi";
import { BsAward } from "react-icons/bs";
import "./info.css";

const Info = () => {
  return (
    <section id="info">
      <h5>Get to know me</h5>
      <h2>Info</h2>

      <div className="container info__container">
        <div className="info__about">
          <div className="info__about-photo">
            <img className="info-photo" src={photo} alt="Info image" />
          </div>
        </div>

        <div className="info__content">
          <div className="info__cards">
            <article className="info__card">
              <BsAward className="info__icon" />
              <h5>Experience</h5>
              <small>5+ Years</small>
            </article>

            <article className="info__card">
              <PiComputerTowerBold className="info__icon" />
              <h5>Jobs</h5>
              <div className="info__card-iner-container">
                <small>Team International</small>
                <small>Zilliant</small>
              </div>
            </article>

            <article className="info__card">
              <PiBooksLight className="info__icon" />
              <h5>Studys</h5>
              <small>React, JS, Node, Ts, MERN</small>
            </article>
          </div>

          <p>
            Hey there! I'm a front end developer that loves coding. Born in
            colombia and lived some time in Boston M.A. Currently living in
            Medellin and I Love to keep up with the new technologies and love to
            create pages. I'm a informatic Engineer, also into video games and
            going out on motorcycle rides. Love to travel and get to know new
            places. Who doesn't like traveling?
          </p>

          <button>
            <a href="#contact">Contact Me</a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Info;
