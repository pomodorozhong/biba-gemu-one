import { events } from "./events";

const pickNextEvent = (playerAttributes) => {
  const possibleEvents = events;
  let pickedEventId = null;
  if (possibleEvents.length > 1) {
    possibleEvents.sort((a, b) => a.priority - b.priority);
    const event =
      possibleEvents[Math.floor(Math.random() * possibleEvents.length)];
    pickedEventId = event.id;
  } else {
    pickedEventId = possibleEvents[0].id;
  }

  return pickedEventId;
};

const handleEvent = (eventId, playerAttributes) => {
  const event = events.find((e) => e.id === eventId);
  let outcome;
  let possibleOutcomes = event.outcomes.filter((o) =>
    o.condition(playerAttributes)
  );
  if (possibleOutcomes.length > 1) {
    possibleOutcomes = possibleOutcomes.sort((a, b) => a.priority - b.priority);
    outcome =
      possibleOutcomes[Math.floor(Math.random() * possibleOutcomes.length)];
  } else {
    outcome = possibleOutcomes[0];
  }
  const result = outcome.result(playerAttributes);

  return [event.description, outcome.description, result];
};

export { pickNextEvent, handleEvent };
