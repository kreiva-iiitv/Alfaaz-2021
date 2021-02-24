import React from "react";
import EventHeader from "../../Component/EventHeader/EventHeader";
import Cards from "../Cards";
import "./EventsTimeline.css";
import Cardinfo from "../../Cardinfo.js";
import Footer from "../Footer";
import NavigationHelper from "../NavigationHelper";

const EventsTimeline = () => {
  return (
    <div>
      <NavigationHelper />
      <EventHeader />
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
export default EventsTimeline;
