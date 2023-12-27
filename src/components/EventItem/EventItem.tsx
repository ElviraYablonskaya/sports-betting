import { FC } from "react";
import styles from "./EventItem.module.scss"

type Event = {
  id: number;
  name: string;
  cost: string;
  date: string;
};

type EventItemProps = {
  event: Event;
};
const EventItem: FC<EventItemProps> = ({ event }) => {
  // return (
  //   <div className={styles.event}>
  //     <button className={styles.buttonName}>{event.name}</button>
  //     <div>{event.date}</div>
  //     <div>{event.cost}</div>
  //   </div>
  // );
  return (
    <div className={styles.event}>
      <button className={styles.buttonName}>
        {event.name}
        <span className={styles.date}>{event.date}</span>
        <span className={styles.cost}>{event.cost}</span>
      </button>
    </div>
  );
};

export default EventItem;
