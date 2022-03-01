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

  const getSegmentId = (childData) => {
    api.findEventTypeById(childData).then((eventsFromApi) => {
      setEvents(eventsFromApi);
      setisLoading(false);
    });
  };

  // useEffect(() => {
  //   api.findEvents().then((eventsFromApi) => {
  //     setEvents(eventsFromApi);
  //   });
  // }, []);

  //   useEffect(() => {
  //     api.findEventTypeById().then((eventsFromApi) => {
  //     setEvents(eventsFromApi);
  //   });
  // }, []);

  return (
    <div>
      <Filters classifications={classifications} getSegmentId={getSegmentId} />
      <EventList events={events} isLoading={isLoading} />
    </div>
  );
}

export default Main;
