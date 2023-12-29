import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getEventDetailsInformation } from "../../utils/api";
import styles from "./EventInformation.module.scss";
import { MdEmail } from "react-icons/md";
import { DiMitlicence } from "react-icons/di";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { FaPlus, FaMinus } from "react-icons/fa";


const EventInformation = () => {
    const { eventId } = useParams<{ eventId: string }>();
    const navigate = useNavigate();

    const [bookmakerDetails, setBookmakerDetails] = useState<{
        id: number;
        name: string;
        page: string;
        license: string;
        deposit: string;
        pluses: string[];
        minuses: string[];
    } | null>(null);

    useEffect(() => {
        const details = getEventDetailsInformation(Number(eventId));

        if (details) {
            setBookmakerDetails(details);
        } else {
            console.error(`Букмекер с идентификатором ${eventId} не найден.`);
        }
    }, [eventId]);

    if (!bookmakerDetails) {
        return <div>Loading...</div>;
    }

    const handlePlayClick = () => {
        navigate(`/events/${eventId}`);
    };

    const handleHomeClick = () => {
        navigate("/");
    }

    return (
        <div className={styles.infromationContainer}>
            <h1>Букмекерская контора <span className={styles.bookmakerColor}>{bookmakerDetails.name}</span></h1>
            <div className={styles.bookmakerInformation}>
                <div className={styles.emailInformation}><MdEmail color="#fd5656" />
                    <span className={styles.email}>Email: <span className={styles.emailColor}>{bookmakerDetails.page}</span></span>
                </div>
                <div className={styles.licenceInformation}>
                    <DiMitlicence size={22} color="#fd5656" />Лицензия: <span className={styles.licenceColor}>{bookmakerDetails.license}</span>
                </div>
                <div>
                    <FaMoneyBillTrendUp color="#fd5656" />
                    <span className={styles.deposit}>Минимальный депозит: <span className={styles.depositColor}>{bookmakerDetails.deposit}</span></span>
                </div>
            </div>
            <div className={styles.plusesInformation}>
                <h2 className={styles.h2}><FaPlus color="#4caf50" size={20} /><span className={styles.pluses}>Преимущества:</span></h2>
                <ul>
                    {bookmakerDetails.pluses.map((plus, index) => (
                        <li key={index}>{plus}</li>
                    ))}
                </ul>
            </div>
            <div className={styles.minusesInformation}>
                <h2><FaMinus size={20} color="fd5656" /><span className={styles.minuses}>Недостатки:</span></h2>
                <ul>
                    {bookmakerDetails.minuses.map((minus, index) => (
                        <li key={index}>{minus}</li>
                    ))}
                </ul>
            </div>
            <div className={styles.buttons}>
                <button className={styles.buttonBack} onClick={handleHomeClick}>Вернуться в главное меню</button>
                <button className={styles.buttonPlay} onClick={handlePlayClick}>Играть</button>
            </div>
        </div>
    );
};

export default EventInformation;
