import EventList from "./eventlist";
import Filters from "./filters"

import { useState, useEffect } from "react";
import * as api from "../utils/api";

function Main() {
  const [events, setEvents] = useState([]);
  const [classifications, setClassifications] = useState([])

  useEffect(() => {
    api.findClassifications()
    .then((classificationsFromApi) => {
      setClassifications(classificationsFromApi.slice(0,6))
    })
  }, [])


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
      <Filters classifications={classifications} />
      <EventList events={events} />
    </div>
  );
}

export default Main;
