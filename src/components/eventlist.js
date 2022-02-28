import EventCard from "./eventcard";

function EventList({ events }) {
  return (
    <section>
      <h2>List of Events</h2>
      {events.map((event) => {
        return <EventCard event={event} key={event.id} />;
      })}
    </section>
  );
}

export default EventList;
