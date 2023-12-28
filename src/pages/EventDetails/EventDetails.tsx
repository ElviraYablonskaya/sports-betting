import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getEventDetails } from "../../utils/api";
import styles from "./EventDetails.module.scss";

const EventDetails = () => {
    const { eventId } = useParams<{ eventId: string }>();
    const navigate = useNavigate();

    const [eventDetails, setEventDetails] = useState<{
        id: number;
        team1: string;
        team2: string;
        score: string;
        venue: string;
        date: string;
    } | null>(null);

    const [currentCoefficient, setCurrentCoefficient] = useState<string>("");
    const [showNotification, setShowNotification] = useState<boolean>(false);

    useEffect(() => {
        const eventDetails = getEventDetails(Number(eventId));

        if (eventDetails) {
            setEventDetails(eventDetails);
        } else {
            console.error(`Событие с идентификатором ${eventId} не найдено.`);
        }
    }, [eventId]);

    const handlePlaceBet = () => {
        if (currentCoefficient) {
            localStorage.setItem("betDetails", JSON.stringify({ team1: eventDetails?.team1, team2: eventDetails?.team2, coefficient: currentCoefficient }));
            setShowNotification(true);
            setTimeout(() => {
                setShowNotification(false);
                navigate("/");
            }, 2000);
        }
    };

    if (!eventDetails) {
        return <div>Loading...</div>;
    }

    return (
        <div className={styles.eventDetailsContainer}>
            <h1 className={styles.h1}>
                <span className={styles.team1}>{eventDetails.team1}</span>
                <span className={styles.score}>{eventDetails.score}</span>
                <span className={styles.team2}>{eventDetails.team2}</span>
            </h1>
            <div className={styles.date}>Дата события: <span className={styles.dateText}>{eventDetails.date}</span></div>
            <div className={styles.venue}>Место проведения: <span className={styles.venueText}>{eventDetails.venue}</span></div>
            <div className={styles.coefficientOptions}>
                <label>
                    <input
                        type="radio"
                        value="home"
                        checked={currentCoefficient === "home"}
                        onChange={() => setCurrentCoefficient("home")}
                    />
                    На победу хозяев
                </label>
                <label>
                    <input
                        type="radio"
                        value="draw"
                        checked={currentCoefficient === "draw"}
                        onChange={() => setCurrentCoefficient("draw")}
                    />
                    Ничья
                </label>
                <label>
                    <input
                        type="radio"
                        value="away"
                        checked={currentCoefficient === "away"}
                        onChange={() => setCurrentCoefficient("away")}
                    />
                    На победу гостей
                </label>
            </div>
            {showNotification && (
                <div className={styles.notification}>
                    Спасибо, ваша ставка на матч {`${eventDetails.team1} vs ${eventDetails.team2}, коэффициент "${currentCoefficient}"`} принята.
                </div>
            )}
            <button
                onClick={handlePlaceBet}
                disabled={!currentCoefficient}
                className={`${styles.placeBetButton} ${!currentCoefficient ? styles.disabledButton : ""}`}
            >
                Сделать ставку
            </button>
        </div>
    );
};

export default EventDetails;
