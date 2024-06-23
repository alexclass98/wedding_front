import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import place from '../images/place.png';
import { Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    container: {
        height: '400px',
        position: 'relative',
        backgroundImage: `url(${place})`,
        backgroundSize: 'cover',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'rgba(241, 241, 241, 1)',
        overflow: 'hidden',
        margin: 0,
    },
    addressText: {
        marginBottom: '20px',
        fontFamily: 'Lora',
        fontSize: '18px',
        fontWeight: '400',
        lineHeight: '23.04px',
        letterSpacing: '0.03em',
        textAlign: 'center',
    },
    button: {
        border: '1px solid rgba(30, 30, 30, 1)',
        width: '292px',
        height: '46px',
        borderRadius: '5px',
        opacity: '1',
        background: 'white',
        "&:hover": {
            backgroundColor: '#808080'
        }
    },
}));

function PlacePage() {
    const classes = useStyles();

    const handleShowMap = () => {
        window.open('https://www.google.com/maps/search/?api=1&query=Дивный+Лес+Красногорский+район');
    };

    return (
        <div className={classes.container}>
            <div className={classes.addressText}>
                Ждем вас по адресу <br />
                Веранда “Дивный Лес” <br />
                Красногорский район
            </div>
            <Button className={classes.button} onClick={handleShowMap}>Показать на карте</Button>
        </div>
    );
}

export default PlacePage;