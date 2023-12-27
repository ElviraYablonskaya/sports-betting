import EventItem from "../EventItem";

const events = [
  { id: 1, name: "BetBoom", rating: "5.0", cost: "100 BYN", date: "01-02-2024" },
  { id: 2, name: "Winline", rating: "4.8", cost: "120 BYN", date: "01-03-2024" },
  { id: 3, name: "Fonbet", rating: "4.5", cost: "130 BYN", date: "01-05-2024" },
  { id: 4, name: "Leon", rating: "4.3", cost: "160 BYN", date: "02-07-2024" },
  { id: 5, name: "Pari", rating: "4.1", cost: "100 BYN", date: "05-04-2024" },
  { id: 6, name: "Olimbet", rating: "3.6", cost: "160 BYN", date: "08-02-2024" },
  { id: 7, name: "Liga", rating: "3.5", cost: "100 BYN", date: "06-04-2024" },
  { id: 8, name: "Betsity", rating: "3.3", cost: "500 BYN", date: "21-05-2024" },
  { id: 9, name: "LeonRu", rating: "3.1", cost: "700 BYN", date: "31-09-2024" },
  { id: 10, name: "Pariline", rating: "3.0", cost: "500 BYN", date: "22-12-2024" },
];

const EventList = () => {
  return (
    <ul>
      {events.map((event, index) => (
        <EventItem key={event.id} event={event} index={index} />
      ))}
    </ul>
  );
};
export default EventList;
