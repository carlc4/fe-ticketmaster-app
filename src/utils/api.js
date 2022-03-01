const apiKey = 'apikey=rnuQg4fQbBA8f5ZAUoUJePXyGZ1Owsr8'


export function findEvents() {
  return fetch(
    `https://app.ticketmaster.com/discovery/v2/events.json?size=50&${apiKey}`
  )
    .then((event) => {
      return event.json();
    })
    .then((data) => {
      return data._embedded.events;
    });
}

export function findClassifications() {
  return fetch(`https://app.ticketmaster.com/discovery/v2/classifications.json?${apiKey}`)
  .then((response) => response.json())
  .then((data) => {

    return data._embedded.classifications;
  })

}

export function findEventTypeById (eventTypeId) {
  return fetch(`https://app.ticketmaster.com/discovery/v2/events.json?size=50&${apiKey}&classificationId=`)
  .then((response) => response.json())
  .then((data) => {
    return data._embedded.events
  })
}