import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import whatsApp from '../images/whatsApp.png'

const useStyles = makeStyles((theme) => ({
    container: {
        textAlign: 'left',
        padding: '40px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        overflow: 'hidden',
        margin: 0,
    },
    phoneNumber: {
        fontFamily: 'Lora',
        fontSize: '16px',
        fontWeight: 400,
        lineHeight: '20.48px',
        textDecoration: 'underline',
    },
    chatText: {
        textAlign: 'center',
        fontFamily: 'Lora',
        fontSize: '16px',
        fontWeight: 400,
        lineHeight: '20.48px',
    },
    chatTextSecond: {
        textAlign: 'center',
        fontFamily: 'Lora',
        fontSize: '16px',
        fontWeight: 400,
        lineHeight: '20.48px',
        marginTop: '20px',
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
        marginTop: '20px',
        background: 'white',
    },
}));

function FooterPage() {
    const classes = useStyles();
    const handleTGChat = () => {
        window.open('https://t.me/+XgcNLcJ5H1piZmMy');
    };


    return (
        <div className={classes.container}>
            <Typography variant="body1" className={classes.chatTextSecond} >
                По всем вопросам вы можете обратиться к нашему организатору
            </Typography>
            <div style={{display: 'flex', alignItems: 'center', marginTop: '10px', justifyContent: 'center', gap: '10px'}}>
                <img src={whatsApp} alt="WhatsApp" width="32" height="32" style={{marginRight: '10px'}}/>
                <Typography variant="body1" className={classes.phoneNumber}>
                    <span style={{textDecoration: 'underline'}}>+7 (903) 178 35 30</span>
                </Typography>
                <Typography variant="body1" className={classes.chatText}>
                    Дарья
                </Typography>
            </div>
            <Typography variant="body1" className={classes.chatTextSecond}>
                Вступайте в наш Телеграм чат - там будет актуальная информация и фотографии после свадьбы
            </Typography>
            <Button variant="contained" onClick={handleTGChat} className={classes.button}>
                ПЕРЕЙТИ В ЧАТ
            </Button>
        </div>
    );
}

export default FooterPage;