import { Link } from "react-router-dom";
import Logo from "../assets/images/Avatar50.png";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="container footer__container">
        <article>
          <div className="logo__container">
            <Link to="/" className="logo">
              <img src={Logo} alt="logo" />
            </Link>
            <h2>Glen Popowich</h2>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate
            veniam tenetur eum dolore sequi dicta fuga sint porro quae fugit!
          </p>
          <div className="footer__socials">
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://facebook.com/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <BsTwitterX />
            </a>
            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <AiFillInstagram />
            </a>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <FaGithub />
            </a>
          </div>
        </article>
        <article>
          <h4>Permalinks</h4>
          <Link to="/about" className="link">
            About
          </Link>
          <Link to="portfolio" className="link">
            Portfolio
          </Link>
          <Link to="FAQs" className="link">
            FAQs
          </Link>
          <Link to="resources" className="link">
            Resources
          </Link>
          <Link to="contact" className="link">
            Contact
          </Link>
        </article>
        <article>
          <h4>Insights</h4>
          <Link to="/about" className="link">
            Bing
          </Link>
          <Link to="/plans" className="link">
            Case Studies
          </Link>
          <Link to="trainers" className="link">
            Events
          </Link>
          <Link to="gallery" className="link">
            Communications
          </Link>
          <Link to="contact" className="link">
            FAQs
          </Link>
        </article>
        <article>
          <h4>Get in Touch</h4>
          <Link to="contact" className="link">
            Contact Us
          </Link>
          <Link to="contact" className="link">
            Support
          </Link>
        </article>
      </div>
      <div className="footer__copyright">
        <small>2023 Glen Popowich &copy; All Rights Reserved</small>
      </div>
    </footer>
  );
};

export default Footer;
