import { getAllEvents } from "../../utils/api";
import EventItem from "../EventItem";


const EventList = () => {
  const events = getAllEvents();
  return (
    <ul>
      {events.map((event, index) => (
        <EventItem key={event.id} event={event} index={index} />
      ))}
    </ul>
  );
};
export default EventList;
