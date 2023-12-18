import { Link } from "react-router-dom";
import Image from "../assets/images/header_1.jpg";

const MainHeader = () => {
  return (
    <>
      <header className="main__header">
        <div className="container main__header-container">
          <div className="main__header-left">
            <h4>I am a </h4>
            <h1>Full Stack Developer</h1>
            <p>
              Specializing in Web Development, using HTML, CSS, JavaScript,
              React, Mongo DB, PostgreSQL, NodeJS and Express. I am able to
              provide the widest range of services you may need.
            </p>
            <Link to="/about" className="btn lg">
              Get Started
            </Link>
          </div>
          <div className="main__header-right">
            <div className="main__header-image">
              <img src={Image} alt="Whiteboard" />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default MainHeader;
