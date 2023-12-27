import EventItem from "../EventItem";

const events = [
  { id: 1, name: "BetBoom", cost: "1000 BYN", date: "01-02-2024" },
  { id: 2, name: "Winline", cost: "120 BYN", date: "01-03-2024" },
  { id: 3, name: "Fonbet", cost: "130 BYN", date: "01-05-2024" },
  { id: 4, name: "Leon", cost: "1600 BYN", date: "02-07-2024" },
  { id: 5, name: "Pari", cost: "1000 BYN", date: "05-04-2024" },
  { id: 6, name: "Olimbet", cost: "1670 BYN", date: "08-02-2024" },
  { id: 7, name: "Liga", cost: "100 BYN", date: "06-04-2024" },
  { id: 8, name: "Betsity", cost: "500 BYN", date: "21-05-2024" },
  { id: 9, name: "LeonRu", cost: "700 BYN", date: "31-09-2024" },
  { id: 10, name: "Pariline", cost: "500 BYN", date: "22-12-2024" },
];

const EventList = () => {
  return (
    <ul>
      {events.map((event) => (
        <EventItem key={event.id} event={event} />
      ))}
    </ul>
  );
};
export default EventList;
