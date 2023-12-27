import EventList from "../../components/EventList";
import styles from "./Home.module.scss"

const Home = () => {
  return (
    <div>
      <h1 className={styles.home}>Ставки на спорт</h1>
      <EventList />
    </div>
  );
};
export default Home;
