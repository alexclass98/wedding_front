import React, {useEffect, useState} from 'react';
import {makeStyles, createTheme, ThemeProvider} from '@material-ui/core/styles';
import hands from '../images/hands.jpg';
import calendar from '../images/calendar.png';
import {Button} from "@material-ui/core";
import axios from "axios";
import ICalendarLink from "react-icalendar-link";


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
        background: `url(${hands}) 30% no-repeat;`,
        backgroundSize: 'cover',
        overflow: 'hidden',
        padding: '0px 0px 0px 0px',
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
        flexDirection: 'column',
        backgroundColor: 'rgba(30, 30, 30, 0.5)',
        padding: '20px',
        color: '#D9D9D9',
        fontFamily: 'Abhaya Libre',
        fontSize: '40px',
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
        padding: '40px 10px',
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
        fontSize: '18px',
        fontWeight: '400',
        lineHeight: '20.48px',
        textAlign: 'center',
        color: 'rgba(66, 66, 66, 1)',
        padding: '20px 0px 30px 0px',
        maxWidth: '70%',
        whiteSpace: 'pre-line',
        marginBottom: '15px'
    },
    button: {
        fontFamily: 'Lora',
        fontSize: '16px',
        fontWeight: '400',
        lineHeight: '20.48px',
        textAlign: 'center',
        background: 'rgba(66, 66, 66, 1)',
        width: '300px',
        height: '46px',
        borderRadius: '5px',
        opacity: '1',
        marginTop: '20px',
        marginBottom: '20px',
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
    blurOverlay: {
        position: 'absolute',
        bottom: -1,
        left: 0,
        width: '100%',
        height: '30%',
        background: 'linear-gradient(to bottom, rgba(118, 118, 118, 0) 0%, rgba(241, 241, 241, 1) 100%)',
      },
}));

function WelcomePage() {
    const classes = useStyles();
    const [data, setData] = useState([]);

   useEffect(() => {
        let ID = window.location.pathname.split("/");
        axios.get('http://khatnyanskiewedding.ru:8082/api/Welcome/get/' + ID[1])
            .then(function (response) {
                setData(response.data);
            }).catch((error) => {
            console.log(error)
            setData({
                title: 'ДОРОГИЕ ГОСТИ',
                text: 'С радостью приглашаем вас разделить с нами самый важный день в нашей жизни – нашу свадьбу! Ваше присутствие сделает этот день незабываемым и полным радости',
            })
        });
    }, [])
    
    // Функция добавления в календарь
    const event = {
        title: "Свадьба Максима и Ирины",
        startTime: "2024-08-31T15:00:00+03:00",
        endTime: "2024-08-31T23:00:00+03:00",
        location: "Дивный лес (https://yandex.ru/maps/-/CDCI5VMe)",
      };


    return (
        <ThemeProvider theme={theme}>
            <div className={classes.container}>
                <div className={classes.firstOverlay}>
                    MAXIM & IRINA
                    <br/>
                    WEDDING DAY
                </div>
            <div className={classes.blurOverlay}></div>
            </div>
            <div className={classes.secondOverlay}>
                <div className={classes.dearGuests}>{data.title}</div>
                <div className={classes.invitationText}>
                    {data.text}
                </div>
                <img src={calendar} alt="calendar" className={classes.calendarImg}/>
                <ICalendarLink  className={classes.button} event={event}>ДОБАВИТЬ В КАЛЕНДАРЬ</ICalendarLink >
            </div>
        </ThemeProvider>
    );
}

export default WelcomePage;