function EventCard({ event }) {
  return (
    <div>
      <h3>{event.name}</h3>
      <img
        className="thumbnail"
        src={event.images[0].url}
        alt={event.name}
      ></img>
      <p>
        Starts on{" "}
        <span className="event_details">{event.dates.start.localDate}</span> at{" "}
        <span className="event_details">{event.dates.start.localTime} </span>{" "}
        sharp!
      </p>
      <h5>
        <form action={event.url}>
          <button type="submit">Buy Tickets Now</button>
        </form>
      </h5>
    </div>
  );
}

export default EventCard;
