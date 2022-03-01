import EventCard from "./eventcard";

function EventList({ events, isLoading }) {
  if (isLoading) return <p>Loading...</p>
  return (
    <>
      <h2>List of Events</h2>
      <section className="section__collection">
        {events.map((event) => {
          return <EventCard event={event} key={event.id} />;
        })}
      </section>
    </>
  );
}

export default EventList;
