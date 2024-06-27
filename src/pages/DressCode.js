import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Button} from "@material-ui/core";

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
        marginBottom: '20px'
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
    button: {
        width: '300px',
        height: '46px',
        borderRadius: '5px',
        opacity: '1',
        fontSize: '18px',
        fontFamily: 'Playfair Display',
        color: 'rgba(66, 66, 66, 1)',
        background: 'white',
        "&:hover": {
            backgroundColor: 'white'
        },
        marginTop: '20px',
        marginBottom: '20px',
    },
}));

function DressCode() {
    const classes = useStyles();

    const handleShowMap = () => {
        window.open('https://pin.it/7DnYdEe9s');
    };

    return (
        <div className={classes.container}>
            <div className={classes.dressCode}>ДРЕСС-КОД</div>
            <div className={classes.dressCodeText}>
                Мы будем очень рады, если Вы сможете поддержать цветовую палитру нашей свадьбы
            </div>
            <div className={classes.dressCodeText}>
                Мы не хотим ограничивать Вас в выборе наряда, однако просим воздержаться от ярких цветов
            </div>
            <Button className={classes.button} onClick={handleShowMap}>Примеры образов</Button>
        </div>
    );
}

export default DressCode;