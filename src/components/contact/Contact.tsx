import "./contact.css";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import {
  AiOutlineMail,
  AiFillLinkedin,
  AiOutlineWhatsApp,
} from "react-icons/ai";

const Contact = () => {
  const form = useRef();
  const sendEmail = (
    e: React.FormEvent<HTMLFormElement> & {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      target: HTMLButtonElement & { reset: any };
    }
  ) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_nlji2ho",
      "template_8jj9db5",
      form.current,
      "RWtAi53Xv-4rFeZEr"
    );
    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get in touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <AiOutlineMail className="contact__option-icon" />
            <h4>Email</h4>
            <h5 className="text-light">@hello</h5>
            <a href="mailto:andres.betancur.dev@gmail.com" target="_blank">
              Send a message
            </a>
          </article>

          <article className="contact__option">
            <AiFillLinkedin className="contact__option-icon" />
            <h4>Linkein</h4>
            <h5 className="text-light">Andres-betancur-rivillas-frontend</h5>
            <a
              href="https://www.linkedin.com/in/andres-betancur-rivillas-frontend "
              target="_blank"
            >
              Talk to me!
            </a>
          </article>

          <article className="contact__option">
            <AiOutlineWhatsApp className="contact__option-icon" />
            <h4>Whatsapp</h4>
            <h5 className="text-light">(+57) 3117342891</h5>
            <a
              href="https://wa.me/+573117342891?text=I saw you portafolio and will like to chat with you about......"
              target="_blank"
            >
              Send a message
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Your Full Name"
            required
          />

          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            required
          />

          <textarea
            name="message"
            id="message"
            rows={7}
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
