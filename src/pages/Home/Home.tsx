import EventList from "../../components/EventList";
import styles from "./Home.module.scss"

const Home = () => {
  return (
    <div>
      <h1 className={styles.h1}>Ставки на спорт</h1>
      <h2 className={styles.h2}>Рейтинг букмекеров</h2>
      <EventList />
    </div>
  );
};
export default Home;
