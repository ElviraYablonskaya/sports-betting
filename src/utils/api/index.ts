export const getAllEvents = () => {
    return [
        { id: 1, name: "BetBoom", rating: "5.0", cost: "100 BYN" },
        { id: 2, name: "Winline", rating: "4.8", cost: "120 BYN" },
        { id: 3, name: "Fonbet", rating: "4.5", cost: "130 BYN" },
        { id: 4, name: "Leon", rating: "4.3", cost: "160 BYN" },
        { id: 5, name: "Pari", rating: "4.1", cost: "100 BYN" },
        { id: 6, name: "Olimbet", rating: "3.6", cost: "160 BYN" },
        { id: 7, name: "Liga", rating: "3.5", cost: "100 BYN" },
        { id: 8, name: "Betsity", rating: "3.3", cost: "500 BYN" },
        { id: 9, name: "LeonRu", rating: "3.1", cost: "700 BYN" },
        { id: 10, name: "Pariline", rating: "3.0", cost: "500 BYN" },
    ];
};

export const getEventDetails = (eventId: number) => {
    switch (eventId) {
        case 1:
            return {
                id: eventId,
                team1: "Manchester United",
                team2: "Liverpool",
                score: "0 - 0",
                venue: "Old Trafford",
                date: "1 мая 2024",
            };
        case 2:
            return {
                id: eventId,
                team1: "Real Madrid",
                team2: "Barcelona",
                score: "0 - 0",
                venue: "Santiago Bernabeu",
                date: "25 февраля 2024",
            };
        case 3:
            return {
                id: eventId,
                team1: "Bayern Munich",
                team2: "Borussia",
                score: "0 - 0",
                venue: "Allianz Arena",
                date: "26 марта 2024",
            };
        case 4:
            return {
                id: eventId,
                team1: "Saint-Germain",
                team2: "Manchester City",
                score: "0 - 0",
                venue: "Parc des Princes",
                date: "2 июля 2024",
            };
        case 5:
            return {
                id: eventId,
                team1: "Juventus",
                team2: "AC Milan",
                score: "0 - 0",
                venue: "Allianz Stadium",
                date: "5 апреля 2024",
            };
        case 6:
            return {
                id: eventId,
                team1: "Chelsea",
                team2: "Arsenal",
                score: "0 - 0",
                venue: "Stamford Bridge",
                date: "8 февраля 2024",
            };
        case 7:
            return {
                id: eventId,
                team1: "Ajax",
                team2: "PSV Eindhoven",
                score: "0 - 0",
                venue: "Johan Cruyff Arena",
                date: "6 апреля 2024",
            };
        case 8:
            return {
                id: eventId,
                team1: "Inter Milan",
                team2: "AS Roma",
                score: "0 - 0",
                venue: "San Siro",
                date: "21 мая 2024",
            };
        case 9:
            return {
                id: eventId,
                team1: "Atletico Madrid",
                team2: "Sevilla",
                score: "0 - 0",
                venue: "Wanda Metropolitano",
                date: "31 сентября 2024",
            };
        case 10:
            return {
                id: eventId,
                team1: "Borussia",
                team2: "Hertha BSC",
                score: "0 - 0",
                venue: "Borussia-Park",
                date: "22 декабря 2024",
            };
        default:
            return null;
    }
};


export const getEventDetailsInformation = (eventId: number) => {
    switch (eventId) {
        case 1:
            return {
                id: eventId,
                name: "BetBoom",
                page: "qwerty@col",
                license: "Есть",
                deposit: "150 BYN",
                pluses: [
                    "Эксклюзивный бонус",
                    "Широкая линия и подробная роспись",
                    "Функции кэшаута и редактирования ставки"
                ],
                minuses: [
                    "Вероятное ограничение лимитов",
                    "Отсутствие системы самоограничений",
                ],
            };
        case 2:
            return {
                id: eventId,
                name: "Winline",
                page: "qwerty@col",
                license: "Есть",
                deposit: "100 BYN",
                pluses: [
                    "Широкая линия",
                    "ТВ-трансляции и качественный Live-трекер",
                    "Бонус на депозит"
                ],
                minuses: [
                    "Высокая вероятность ограничения по лимитам",
                    "Задержка расчета ставок на срок до 365 дней",
                    "Возможные технические ошибки при выводе средств"
                ],
            };
        case 3:
            return {
                id: eventId,
                name: "Fonbet",
                page: "qwerty@col",
                license: "Есть",
                deposit: "130 BYN",
                pluses: [
                    "Компенсация налога",
                    "Широкая линия и вариативная роспись",
                    "Политика ответственной игры, наличие возможности самоисключения"
                ],
                minuses: [
                    "Проблемный расчет ставок на статистику",
                    "Нестабильная роспись"
                ],
            };
        case 4:
            return {
                id: eventId,
                name: "Leon",
                page: "qwerty@col",
                license: "Есть",
                deposit: "50 BYN",
                pluses: [
                    "Широкая бонусная программа",
                    "Наличие приветственного бездепозитного бонуса",
                    " Высокие коэффициенты на баскетбол",
                ],
                minuses: [
                    "Возможное ограничение способов вывода отдельным игрокам",
                    "Слабая роспись"
                ],
            };
        case 5:
            return {
                id: eventId,
                name: "Pari",
                page: "qwerty@col",
                license: "Есть",
                deposit: "130 BYN",
                pluses: [
                    "Компенсация налога",
                    "Эксклюзивный приветственный бонус",
                    "Обширная линия и вариативная роспись"
                ],
                minuses: [
                    "Очная верификация в ППС для отдельных игроков",
                    "Возможное ограничение размера выплаты в качестве персональной санкции",
                ],
            };
        case 6:
            return {
                id: eventId,
                name: "Olimbet",
                page: "qwerty@col",
                license: "Есть",
                deposit: "150 BYN",
                pluses: [
                    "Компенсация налога",
                    "Эксклюзивный приветственный бонус",
                    "Обширная линия и вариативная роспись"
                ],
                minuses: [
                    "Очная верификация в ППС для отдельных игроков",
                    "Возможное ограничение размера выплаты в качестве персональной санкции",
                ],
            };
        case 7:
            return {
                id: eventId,
                name: "Liga",
                page: "qwerty@col",
                license: "Есть",
                deposit: "180 BYN",
                pluses: [
                    "Компенсация налога",
                    "Эксклюзивный приветственный бонус",
                    "Обширная линия и вариативная роспись"
                ],
                minuses: [
                    "Частый расчет выигрыша по заниженному коэффициенту",
                    "Возможные возвраты ставок из-за ошибок в линии"
                ],
            };
        case 8:
            return {
                id: eventId,
                name: "Betsity",
                page: "qwerty@col",
                license: "Есть",
                deposit: "140 BYN",
                pluses: [
                    "Компенсация налога",
                    "Эксклюзивный приветственный бонус",
                    "Обширная линия и вариативная роспись"
                ],
                minuses: [
                    "Очная верификация в ППС для отдельных игроков",
                    "Возможное ограничение размера выплаты в качестве персональной санкции",
                ],
            };
        case 9:
            return {
                id: eventId,
                name: "LeonRu",
                page: "qwerty@col",
                license: "Есть",
                deposit: "350 BYN",
                pluses: [
                    "Компенсация налога",
                    "Эксклюзивный приветственный бонус",
                    "Обширная линия и вариативная роспись"
                ],
                minuses: [
                    "Очная верификация в ППС для отдельных игроков",
                    "Возможное ограничение размера выплаты в качестве персональной санкции",
                ],
            };
        case 10:
            return {
                id: eventId,
                name: "Pariline",
                page: "qwerty@col",
                license: "Есть",
                deposit: "40 BYN",
                pluses: [
                    "Компенсация налога",
                    "Эксклюзивный приветственный бонус",
                    "Обширная линия и вариативная роспись"
                ],
                minuses: [
                    "Очная верификация в ППС для отдельных игроков",
                    "Возможное ограничение размера выплаты в качестве персональной санкции",
                ],
            };
        default:
            return null;
    }
};