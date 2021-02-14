import React from "react";
import "./About.css";
import booklogo from "../../Assets/booklogo.svg";

function About() {
  return (
    <div className="About__root">
      <div className="About__text left-section">
        <div className="About__text--heading About__font">ABOUT</div>
        <div className="About__text--content About__font">
          Kreiva is the annual cultural festival of Indian Institute of
          Information Technology, Vadodara. Kreiva serves as a platform for
          students to show their talents in performing arts and aesthetic arts,
          where students can collaborate and team up with other students to
          bring out the best in them.
          <br />
          <br />
          The Annual Cultural Festival of IIIT Vadodara gets its name from the
          Esperanto word "Kreiva", meaning "Creativity". Since its inception in
          2016 as an intra-institute fest in 2016, it has consistently been a
          huge platform for individuals to showcase their talents. A spectacular
          extravaganza, Kreiva is home to expression through art, music, drama,
          dance and culture. <br />
          <br />
          Join us to celebrate creativity, join us, to celebrate Kreiva!
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
