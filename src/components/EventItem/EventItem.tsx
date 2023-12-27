import { FC } from "react";
import styles from "./EventItem.module.scss";
import { FaGift } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

type Event = {
  id: number;
  name: string;
  rating: string;
  cost: string;
  date: string;
};

type EventItemProps = {
  event: Event;
  index: number;
};
const EventItem: FC<EventItemProps> = ({ event, index }) => {
  return (

    <div className={styles.event}>
      <div className={styles.button}>
        <div className={styles.buttonIndex}>
          <div className={styles.index}>{index + 1}</div>
          <button className={styles.buttonName}>{event.name}</button>
        </div>
        <span><div className={styles.buttonRating}>Рейтинг</div><div className={styles.eventRating}><FaStar color="orange" /><span className={styles.rating}>{event.rating}</span></div></span>
        {/* <span className={styles.buttonDate}>{event.date}</span> */}
        <span className={styles.buttonCost}>
          <span className={styles.buttonBonus}><FaGift color="red" />
            <span className={styles.bonusText}>Бонус на первый депозит</span></span>
          <span className={styles.eventCost}>{event.cost}</span></span>
        <button className={styles.buttonReview}>Обзор</button>
      </div>
    </div>
  );
};

export default EventItem;
