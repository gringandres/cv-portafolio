import CV from "../../assets/CV.pdf";
import me from "../../assets/[removal.ai]_0acbba79-27a0-4ea7-855f-c46a9eefa2eb-img_2409.png";
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
