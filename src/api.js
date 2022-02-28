export function findEvents() {
  return fetch(
    "https://app.ticketmaster.com/discovery/v2/events.json?size=3&apikey=rnuQg4fQbBA8f5ZAUoUJePXyGZ1Owsr8"
  )
    .then((event) => {
      return event.json();
    })
    .then((data) => {
      return data._embedded.events;
    });
}
