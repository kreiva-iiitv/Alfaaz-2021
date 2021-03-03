import React, { useEffect, useState } from "react";
import EventHeader from "../../Component/EventHeader/EventHeader";
import Cards from "../Cards";
import "./EventsTimeline.css";
import Footer from "../Footer";
import NavigationHelper from "../NavigationHelper";

const EventsTimeline = () => {
  const [events, setEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchAPI() {
      setIsLoading(true);
      const res = await fetch("https://sheet.best/api/sheets/e7fb214f-726c-4ac7-8d84-a354edeaffc2");
      const data = await res.json();
      console.log(data)
      setEvents(data);
      setIsLoading(false);
      window.scroll(0, 0);
    }
    fetchAPI();
  }, []);
  return (
    <div>
      <NavigationHelper />
      <EventHeader />
      <div className="heading">EVENTS </div>
      {events.map((card) => (
        <Cards
        name={card.name}
        long_description={card.long_description}
          worth={card.prize}
          venue={card.venue}
          date={card.start_date+ ", " + card.start_time}
          convenor={card.convenor}
          coconvenor={card.co_convenor}
          members={card.members}
          reg_link={card.reg_link}
        />
      ))}
      <Footer />
    </div>
  );
};
export default EventsTimeline;