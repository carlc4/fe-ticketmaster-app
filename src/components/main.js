import EventList from "./eventlist";
import Filters from "./filters";

import { useState, useEffect } from "react";
import * as api from "../utils/api";

function Main() {
  const [events, setEvents] = useState([]);
  const [classifications, setClassifications] = useState([]);
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    api.findClassifications().then((classificationsFromApi) => {
      setClassifications(classificationsFromApi.slice(0, 6));
    });
  }, []);

  const selectEvents = (segmentId) => {
    api.findEventsById(segmentId).then((eventsFromApi) => {
      setEvents(eventsFromApi);
      setisLoading(false);
    });
  };


  return (
    <div>
      <Filters classifications={classifications} selectEvents={selectEvents} setisLoading={setisLoading}/>
      <EventList events={events} isLoading={isLoading} />
    </div>
  );
}

export default Main;
