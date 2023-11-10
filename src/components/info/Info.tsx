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
              <small>3+ Years</small>
            </article>

            <article className="info__card">
              <PiComputerTowerBold className="info__icon" />
              <h5>Jobs</h5>
            </article>

            <article className="info__card">
              <PiBooksLight className="info__icon" />
              <h5>Studys</h5>
              <small>React, JS, Node</small>
            </article>
          </div>

          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam
            nostrum quod nobis nisi tenetur est blanditiis, veniam totam, non
            quidem pariatur quas itaque praesentium dignissimos dolor ullam et,
            officia aliquam!
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
