import EventList from "./eventlist";
import { useState, useEffect } from "react";
import * as api from "../api";

function Main() {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    api.findEvents().then((response) => {
      setEvents(response);
    });
  }, []);
  return (
    <div>
      <EventList events={events} />
    </div>
  );
}

export default Main;
