import EventCard from "./eventcard";

function EventList({ events, isLoading }) {
  return (
    <>
      <h2>List of Events</h2>
      {/* if (isLoading) return <p>Loading...</p> */}
      <section className="section__collection">
        {events.map((event) => {
          return <EventCard event={event} key={event.id} />;
        })}
      </section>
    </>
  );
}

export default EventList;
