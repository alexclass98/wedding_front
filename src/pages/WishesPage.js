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
        color: 'rgba(66, 66, 66, 1)',
        lineHeight: '42.66px',
        textAlign: 'center',
        margin: '20px 0',
    },
    text: {
        fontFamily: 'Lora',
        fontSize: '18px',
        color: 'rgba(66, 66, 66, 1)',
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
        marginBottom: '20px',
        marginTop: '10px',
        background: 'rgba(66, 66, 66, 1)',
        color: 'rgba(255, 255, 255, 1)',
        "&:hover": {
            backgroundColor: 'rgba(66, 66, 66, 1)'
        },
    },
}));

function WishesPage() {
    const classes = useStyles();

    const handleDepositClick = () => {
        // Handle deposit button click
        window.open('https://lavka-flower.ru/%D0%9F%D0%BE%D0%B4%D0%B0%D1%80%D0%BE%D1%87%D0%BD%D1%8B%D0%B9-%D1%81%D0%B5%D1%80%D1%82%D0%B8%D1%84%D0%B8%D0%BA%D0%B0%D1%82-%D0%A6%D0%B2%D0%B5%D1%82%D0%BE%D1%87%D0%BD%D0%B0%D1%8F-%D0%9B%D0%B0%D0%B2%D0%BA%D0%B0-p162790771');
    };

    return (
        <div className={classes.container}>
            <div className={classes.title}>ПОЖЕЛАНИЯ</div>
            <div className={classes.text}>
                Если вы планируете порадовать нас цветами, у нас есть небольшая просьба. Вместо букетов на церемонию, просим вас купить сертификат в цветочном магазине  “Цветочная лавка”
            </div>
            <Button className={classes.button} onClick={handleDepositClick}>
                Купить сертификат
            </Button>
            <div className={classes.text}>
                Это позволит нам получать свежие цветы каждую неделю и наслаждаться ими долго после свадьбы.
            </div>
        </div>
    );
}

export default WishesPage;