import {
  BiLogoInstagramAlt,
  BiLogoLinkedin,
  BiLogoGithub,
} from "react-icons/bi";

import "./footer.css";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        Andres
      </a>

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#info">Info</a>
        </li>
        <li>
          <a href="#proyects">Proyects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://instagram.com">
          <BiLogoInstagramAlt />
        </a>
        <a href="https://linkein.com">
          <BiLogoLinkedin />
        </a>
        <a href="https://github.com">
          <BiLogoGithub />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Andres Betancur. All Rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
