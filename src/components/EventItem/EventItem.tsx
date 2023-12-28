import { FC } from "react";
import styles from "./EventItem.module.scss";
import { FaGift } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

type Event = {
  id: number;
  name: string;
  rating: string;
  cost: string;
};

type EventItemProps = {
  event: Event;
  index: number;
};
const EventItem: FC<EventItemProps> = ({ event, index }) => {
  const navigate = useNavigate()

  const handleReviewClick = () => {
    navigate(`/events/${event.id}`);
  };

  return (
    <div className={styles.event}>
      <div className={styles.button}>
        <div className={styles.buttonIndex}>
          <div className={styles.index}>{index + 1}</div>
          <button className={styles.buttonName} onClick={handleReviewClick}>{event.name}</button>
        </div>
        <span>
          <div className={styles.buttonRating}>Рейтинг</div>
          <div className={styles.eventRating}><FaStar color="orange" />
            <span className={styles.rating}>{event.rating}</span></div>
        </span>
        <span className={styles.buttonCost}>
          <span className={styles.buttonBonus}><FaGift color="red" />
            <span className={styles.bonusText}>Бонус на первый депозит</span></span>
          <span className={styles.eventCost}>{event.cost}</span></span>
        <button className={styles.buttonReview} onClick={handleReviewClick}>Обзор</button>
      </div>
    </div>
  );
};

export default EventItem;
