import React, { useState, useEffect } from "react";
import Footer from "../Footer";
import EventHeader from "../../Component/EventHeader/EventHeader";
import Timeline from "../../Component/Timeline/Timeline";
import NavigationHelper from "../NavigationHelper";

const TimelineIndex = () => {
  const [events, setEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchAPI() {
      setIsLoading(true);
      const res = await fetch("https://sheet.best/api/sheets/e7fb214f-726c-4ac7-8d84-a354edeaffc2");
      const data = await res.json();
      setEvents(data);
      setIsLoading(false);
      window.scroll(0, 0);
    }
    fetchAPI();
  }, []);

  return (
    <React.Fragment>
      <NavigationHelper />
      <EventHeader timeline={true} />
      {isLoading ? (
        <div className="CardContainer">
          <div className="lds-facebook">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      ) : (
        <Timeline events={events} />
      )}
      <Footer />
    </React.Fragment>
  );
};

export default TimelineIndex;
