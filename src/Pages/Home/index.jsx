import React from "react";
import Footer from "../Footer";
import Header from "../Header";
import About from "../About";
import Gallery from "../Gallery";
import Landing from "../Landing";

const Home = () => {
  return (
    <div>
      <Header />
      <Landing />
      <About />
      <Gallery />
      <Footer />
    </div>
  );
};

export default Home;
