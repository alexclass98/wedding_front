import React, {useEffect, useState} from 'react';
import {makeStyles, createTheme, ThemeProvider} from '@material-ui/core/styles';
import hands from '../images/hands.jpg';
import calendar from '../images/calendar.png';
import {Button} from "@material-ui/core";
import axios from "axios";


const theme = createTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 768,
            lg: 992,
            xl: 1200,
        },
    },
});

const useStyles = makeStyles((theme) => ({
    container: {
        position: 'relative',
        height: '100vh',
        fontSize: '24px',
        backgroundImage: `url(${hands})`,
        backgroundSize: 'cover',
        overflow: 'hidden',
        margin: 0,
    },
    firstOverlay: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(30, 30, 30, 0.5)',
        padding: '20px',
        color: '#D9D9D9',
        fontFamily: 'Abhaya Libre',
        fontSize: '28px',
        fontWeight: '700',
        lineHeight: '54px',
        textAlign: 'center',
    },
    secondOverlay: {
        position: 'relative',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        background: "rgba(241, 241, 241, 1)",
        padding: '20px',
        color: '#F1F1F1',
    },
    dearGuests: {
        fontFamily: 'Playfair Display',
        fontSize: '32px',
        fontWeight: '500',
        lineHeight: '42.66px',
        textAlign: 'center',
        color: 'rgba(66, 66, 66, 1)',
    },
    invitationText: {
        fontFamily: 'Lora',
        fontSize: '16px',
        fontWeight: '400',
        lineHeight: '20.48px',
        textAlign: 'center',
        color: 'rgba(66, 66, 66, 1)',
        padding: '20px',
        maxWidth: '70%',
    },
    button: {
        fontFamily: 'Lora',
        fontSize: '16px',
        fontWeight: '400',
        lineHeight: '20.48px',
        textAlign: 'center',
        background: 'rgba(66, 66, 66, 1)',
        border: '1px solid rgba(174, 174, 174, 1)',
        width: '292px',
        height: '46px',
        borderRadius: '5px',
        opacity: '1',
        marginTop: '20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
    },
    calendarImg: {
        width: '329px',
        height: '346px',
        left: '30px',
        gap: '0',
        opacity: '1',
    },
}));

function WelcomePage() {
    const classes = useStyles();
    const [data, setData] = useState([]);

    useEffect(() => {
        let ID = window.location.pathname.split("/");
        axios.get('http://localhost:8082/api/Welcome/get/' + ID[1])
            .then(function (response) {
                setData(response.data);
            });
    }, [])

    // Функция добавления в календарь
    const addToCalendar = () => {
        const event = {
            title: "Свадьба",
            location: "Веранда “Дивный Лес Красногорский район",
            description: "Ждём всех вас на свадьбе!",
            startTime: new Date("2024-08-31T16:00:00"),
            endTime: new Date("2024-08-31T22:00:00")
        };
        const url = `data:text/calendar;charset=utf8,${encodeURIComponent(`
        BEGIN:VCALENDAR
        VERSION:2.0
        BEGIN:VEVENT
        DTSTART:${event.startTime.toISOString().replace(/-|:|\.\d+/g, '')}
        DTEND:${event.endTime.toISOString().replace(/-|:|\.\d+/g, '')}
        SUMMARY:${event.title}
        DESCRIPTION:${event.description}
        LOCATION:${event.location}
        END:VEVENT
        END:VCALENDAR
        `)}`;
        window.open(url, '_blank');
    };

    return (
        <ThemeProvider theme={theme}>
            <div className={classes.container}>
                <div className={classes.firstOverlay}>
                    MAXIM & IRINA
                    <br/>
                    WEDDING DAY
                </div>
            </div>
            <div className={classes.secondOverlay}>
                <div className={classes.dearGuests}>{data.title}</div>
                <div className={classes.invitationText}>
                    {data.text}
                </div>
                <img src={calendar} alt="calendar" className={classes.calendarImg}/>
                <Button className={classes.button} onClick={addToCalendar}>ДОБАВИТЬ В КАЛЕНДАРЬ</Button>
            </div>
        </ThemeProvider>
    );
}

export default WelcomePage;