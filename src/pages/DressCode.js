import React from 'react';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        background: 'rgba(216, 216, 216, 1)',
        padding: '40px',
        overflow: 'hidden',
        margin: 0,
    },
    dressCode: {
        marginTop: '20px',
        fontFamily: 'Playfair Display',
        fontSize: '32px',
        color: 'rgba(66, 66, 66, 1)',
        fontWeight: '500',
        lineHeight: '42.66px',
        textAlign: 'center',
    },
    dressCodeText: {
        fontFamily: 'Lora',
        fontSize: '18px',
        fontWeight: '400',
        color: 'rgba(66, 66, 66, 1)',
        lineHeight: '20.48px',
        textAlign: 'center',
        margin: '10px 0',
    },
}));

function DressCode() {
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <div className={classes.dressCode}>ДРЕСС-КОД</div>
            <div className={classes.dressCodeText}>
                Мы будем очень рады, если Вы сможете поддержать цветовую палитру нашей свадьбы
            </div>
            <div className={classes.dressCodeText}>
                Мы не хотим ограничивать Вас в выборе наряда, однако просим воздержаться от ярких цветов
            </div>
        </div>
    );
}

export default DressCode;