import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BsPhone } from "react-icons/bs";
import "./nav.css";
import { useState } from "react";

const Nav = () => {
  const [active, setActive] = useState("");

  const activeClassName = (target: string) =>
    active === target ? "active" : "";

  return (
    <nav>
      <a
        href="#"
        className={activeClassName("home")}
        onClick={() => setActive("home")}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#info"
        className={activeClassName("info")}
        onClick={() => setActive("info")}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#contact"
        className={activeClassName("contact")}
        onClick={() => setActive("contact")}
      >
        <BsPhone />
      </a>
    </nav>
  );
};

export default Nav;
