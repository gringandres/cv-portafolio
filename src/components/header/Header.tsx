import CV from "../../assets/CV.pdf";
import me from "../../assets/[removal.ai]_e03f0082-0a6c-4392-ab9c-48903499349d-img_1488-1.png";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import "./header.css";
const Header = () => (
  <header id="#">
    <div className="container header__container">
      <h5>Hello, I'm</h5>
      <h1>Andres Betancur</h1>
      <h5 className="text-light">Front End Dev</h5>
      {/* //--- */}
      <div className="header__button-group-contact">
        <button className="header__outline">
          <a href={CV} download>
            Download CV
          </a>
        </button>
        <button className="header__contact">
          <a href="#contact">Contact Me</a>
        </button>
      </div>
      {/* //--- */}
      <div className="header__button-group-social">
        <a href="https://www.linkedin.com/in/andres-betancur-rivillas-frontend">
          <AiFillLinkedin />
        </a>
        <a href="https://github.com">
          <AiFillGithub />
        </a>
      </div>

      <div className="header__photo">
        <img src={me} alt="me" />
      </div>
      <a href="#contact" className="header__scroll_end">
        End of the page
      </a>
    </div>
  </header>
);

export default Header;
