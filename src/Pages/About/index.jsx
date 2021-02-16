import React from "react";
import "./About.css";
import booklogo from "../../Assets/booklogo.svg";

function About() {
  return (
    <div className="About__root">
      <div className="About__text left-section">
        <div className="About__text--heading About__font">ABOUT</div>
        <div className="About__text--content About__font">
          Alfaaz is the Annual Literature Festival of Indian Institute of
          Information Technology, Vadodara. It is organized by the Literature
          Committee IIIT Vadodara and serves as a platform for literarians to
          showcase their knowledge, creativity and skills.
          <br />
          <br />
          It has a complete dose of mainstream events including open mic, poetry
          & microstory writing, fan fiction , spell bee and fun events such as
          guess the gibberish and many more. The festival offers a unique
          opportunity to hear some of the greatest contemporary literary
          stalwarts together on a single platform that brings diverse thoughts &
          opinions, and upholds freedom of thought & expression during the
          five-day mega event.
          <br />
          <br />
          Join us to celebrate creativity, join us, to celebrate Alfaaz!
        </div>
      </div>
      <div className="right-section">
        <div className="book-img">
          <img src={booklogo} alt="book-logo" className="booklogo"></img>
        </div>

        <div className="book-text">
          <p className="book-heading1 bookstyles">60 K+</p>
          <p className="book-content1 bookstyles">worth prize to win</p>
        </div>
        <div className="book-text">
          <p className="book-heading2 bookstyles">14 D+</p>
          <p className="book-content2 bookstyles">long fest</p>
        </div>
        <div className="book-text">
          <p className="book-heading3 bookstyles">20+</p>
          <p className="book-content3 bookstyles">events to participate</p>
        </div>
      </div>
    </div>
  );
}

export default About;
