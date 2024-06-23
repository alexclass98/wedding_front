import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    container: {
        minHeight: '300px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '40px',
        overflow: 'hidden',
        margin: 0,
    },
    title: {
        fontFamily: 'Playfair Display',
        fontSize: '32px',
        fontWeight: '500',
        lineHeight: '42.66px',
        textAlign: 'center',
        margin: '20px 0',
    },
    text: {
        fontFamily: 'Lora',
        fontSize: '16px',
        fontWeight: '400',
        lineHeight: '20.48px',
        textAlign: 'center',
        margin: '10px 0',
    },
    button: {
        fontFamily: 'Lora',
        fontSize: '16px',
        fontWeight: '400',
        lineHeight: '20.48px',
        textAlign: 'center',
        width: '300px',
        height: '46px',
        borderRadius: '5px',
        marginTop: '10px',
        background: 'rgba(66, 66, 66, 1)',
        color: 'rgba(255, 255, 255, 1)',
    },
}));

function WishesPage() {
    const classes = useStyles();

    const handleDepositClick = () => {
        // Handle deposit button click
        console.log('Deposit button clicked');
    };

    return (
        <div className={classes.container}>
            <div className={classes.title}>ПОЖЕЛАНИЯ</div>
            <div className={classes.text}>
                Если вы планируете порадовать нас цветами, у нас есть небольшая просьба. Вместо букетов на церемонию, просим положить деньги на счет в цветочном магазине “Название магазина”
            </div>
            <Button className={classes.button} onClick={handleDepositClick}>
                ПОПОЛНИТЬ СЧЕТ
            </Button>
            <div className={classes.text}>
                Это позволит нам получать свежие цветы каждую неделю и наслаждаться ими долго после свадьбы.
            </div>
        </div>
    );
}

export default WishesPage;