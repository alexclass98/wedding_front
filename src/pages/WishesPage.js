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
        window.open('https://messenger.online.sberbank.ru/sl/UBFsQvycmre8WL0Cz');
    };

    return (
        <div className={classes.container}>
            <div className={classes.title}>ПОЖЕЛАНИЯ</div>
            <div className={classes.text}>
                Если вы хотите порадовать нас цветами, у нас есть небольшая просьба. Вместо букетов на церемонию, просим вас пополнить специально созданный «Цветочный счет»
            </div>
            <Button className={classes.button} onClick={handleDepositClick}>
                Пополнить счет
            </Button>
            <div className={classes.text}>
                После праздника мы оформим еженедельную доставку свежих цветов, чтобы наслаждаться ими еще долгое время
            </div>
        </div>
    );
}

export default WishesPage;