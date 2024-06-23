import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import clock from '../images/clock.png';
import vine from '../images/vine.png';
import rings from '../images/rings.png';
import tits from '../images/tits.png';
import cake from '../images/cake.png';
import car from '../images/car.png';
import {Box} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '40px',
        overflow: 'hidden',
        margin: 0,
    },
    timingText: {
        fontFamily: 'Playfair Display',
        fontSize: '32px',
        fontWeight: '500',
        lineHeight: '42.66px',
        textAlign: 'center',
        color: 'rgba(66, 66, 66, 1)',
        margin: '20px 0',
    },
    scheduleItem: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '20px',
        margin: '10px 0',
    },
    image: {
        width: '64px',
        height: '64px',
        marginRight: '20px',
    },
    text: {
        width: '100%',
        fontFamily: 'Lora',
        fontSize: '20px',
        fontWeight: '400',
        lineHeight: '25.6px',
        textAlign: 'center',
    },
}));

function TimeTablePage() {
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <div className={classes.timingText}>Тайминг</div>
            <Box gridGap={'40px'} display={'flex'} flexDirection={'row'}>
                <Box display={'flex'} flexDirection={'column'} alignItems={'flex-start'}>
                    <div className={classes.scheduleItem}>
                        <img src={clock} alt="clock" className={classes.image}/>
                    </div>
                    <div className={classes.scheduleItem}>
                        <img src={vine} alt="vine" className={classes.image}/>
                    </div>
                    <div className={classes.scheduleItem}>
                        <img src={rings} alt="rings" className={classes.image}/>
                    </div>
                    <div className={classes.scheduleItem}>
                        <img src={tits} alt="tits" className={classes.image}/>
                    </div>
                    <div className={classes.scheduleItem}>
                        <img src={cake} alt="cake" className={classes.image}/>
                    </div>
                    <div className={classes.scheduleItem}>
                        <img src={car} alt="car" className={classes.image}/>
                    </div>
                </Box>
                <Box display={'flex'} flexDirection={'column'} alignItems={'flex-start'} justifyContent={'space-between'}>
                    <div className={classes.scheduleItem}>
                        <div className={classes.text}>15:00<br/>Сбор гостей</div>
                    </div>
                    <div className={classes.scheduleItem}>
                        <div className={classes.text}>15:30<br/>Фуршет</div>
                    </div>
                    <div className={classes.scheduleItem}>
                        <div className={classes.text}>16:00<br/>Церемония</div>
                    </div>
                    <div className={classes.scheduleItem}>
                        <div className={classes.text}>17:00<br/>Банкет</div>
                    </div>
                    <div className={classes.scheduleItem}>
                        <div className={classes.text}>17:30<br/>Торт</div>
                    </div>
                    <div className={classes.scheduleItem}>
                        <div className={classes.text}>18:00<br/>Завершение<br/> вечера</div>
                    </div>
                </Box>
            </Box>
        </div>
    );
}

export default TimeTablePage;