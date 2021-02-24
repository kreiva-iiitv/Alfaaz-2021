import React from "react";

import Cards from "../Cards";
import "./Events.css";
import Cardinfo from "../../Cardinfo.js";
import Footer from "../Footer";
import NavigationHelper from "../NavigationHelper";

const Events = () => {
  return (
    <div>
      <NavigationHelper />
      <div className="heading">EVENTS </div>
      {Cardinfo.map((card) => (
        <Cards
          worth={card.worth}
          venue={card.venue}
          date={card.date}
          convenor={card.convenor}
          coconvenor={card.coconvenor}
          members={card.members}
        />
      ))}

      <Footer />
    </div>
  );
};
export default Events;
