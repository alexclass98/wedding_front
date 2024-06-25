import React, {useState, useEffect} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import backgroundImage from '../images/hands2.png';
import {Box} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white',
        overflow: 'hidden',
        margin: 0,
    },
    title: {
        fontFamily: 'Lora',
        fontSize: '40px',
        fontWeight: '400',
        lineHeight: '51.2px',
        textAlign: 'center',
    },
    countdown: {
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '10px'
    },
    countdownItem: {
        marginRight: '10px',
        fontFamily: 'Lora',
        fontSize: '40px',
        fontWeight: '400',
        lineHeight: '50px',
    },
    label: {
        fontFamily: 'Lora',
        fontSize: '16px',
        fontWeight: '400',
        lineHeight: '20px',
    },
    verticalDivider: {
        borderLeft: '3px solid white',
        height: '50px',
        margin: '0', // Adjust margin as needed
    },
}));

function CountingPage() {
    const classes = useStyles();

    const calculateTimeLeft = () => {
        const difference = +new Date('2024-08-31') - +new Date();
        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60)
            };
        }

        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearTimeout(timer);
    });

    return (
        <div className={classes.container}>
            <Typography variant="h1" className={classes.title}>
                ДО СВАДЬБЫ
            </Typography>
            <Box className={classes.countdown}>
                {timeLeft.days > 0 &&
                    <Box display={'flex'} gridGap={'15px'} mt={4}>
                        <div style={{display: 'flex', flexDirection: 'column', alignItems: "center"}}>
                            <Typography variant="h1" className={classes.countdownItem}>{timeLeft.days}</Typography>
                            <Typography variant="body1" className={classes.label}>дни</Typography>
                        </div>
                        <div className={classes.verticalDivider}/>
                        <div style={{display: 'flex', flexDirection: 'column', alignItems: "center"}}>
                            <Typography variant="h1" className={classes.countdownItem}>{timeLeft.hours}</Typography>
                            <Typography variant="body1" className={classes.label}>часы</Typography>
                        </div>
                        <div className={classes.verticalDivider}/>
                        <div style={{display: 'flex', flexDirection: 'column', alignItems: "center"}}>
                            <Typography variant="h1" className={classes.countdownItem}>{timeLeft.minutes}</Typography>
                            <Typography variant="body1" className={classes.label}>минуты</Typography>
                        </div>
                        <div className={classes.verticalDivider}/>
                        <div style={{display: 'flex', flexDirection: 'column', alignItems: "center"}}>
                            <Typography variant="h1" className={classes.countdownItem}>{timeLeft.seconds}</Typography>
                            <Typography variant="body1" className={classes.label}>секунды</Typography>
                        </div>
                    </Box>
                }
                {timeLeft.days <= 0 &&
                    <Typography variant="h1">Свадьба уже совсем скоро! 💒🥂🎉</Typography>
                }
            </Box>
        </div>
    );
}

export default CountingPage;